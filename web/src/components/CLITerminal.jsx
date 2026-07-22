import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { saveGuestbookEntry } from "@/lib/storage";
import { MOTION_EASE, MOTION_DURATION } from "@/lib/motion";
import { scrollToElement } from "@/lib/scroll";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useModalIsolation } from "@/lib/useModalIsolation";
import { PROFILE } from "@/data/portfolio";
import {
  L,
  HELP_LINES,
  buildBanner,
  echoPrompt,
  resolveShortcut,
  canonicalize,
  suggestCommand,
  completeCommand,
  aboutLines,
  tldrLines,
  availLines,
  nowLines,
  eduLines,
  stackLines,
  projectLines,
  linkLines,
  openCvPdf,
  openProjectUrl,
  openExternal,
  copyEmail,
  resolveGoTarget,
  goHelpLines,
  loadCliHistory,
  saveCliHistory,
} from "@/lib/cli";

const parseQuoted = (str) => {
  const out = [];
  const re = /"([^"]*)"|(\S+)/g;
  let m;
  while ((m = re.exec(str)) !== null)
    out.push(m[1] !== undefined ? m[1] : m[2]);
  return out;
};

const uid = () => Math.random().toString(36).slice(2, 9);

const URL_SPLIT =
  /(https?:\/\/[^\s]+)|(mailto:[^\s]+)|(\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b)/gi;

/** Normalize print args into typed line objects. */
const toEntries = (args) =>
  args.flatMap((arg) => {
    if (arg == null || arg === false) return [];
    if (typeof arg === "string") return [L("out", arg)];
    if (arg.type) return [arg];
    return [];
  });

const LINE_CLASS = {
  sys: "cli-line cli-line--sys",
  cmd: "cli-line cli-line--cmd",
  out: "cli-line cli-line--out",
  title: "cli-line cli-line--title",
  meta: "cli-line cli-line--meta",
  ok: "cli-line cli-line--ok",
  err: "cli-line cli-line--err",
  menu: "cli-line cli-line--menu",
  blank: "cli-line cli-line--blank",
  rule: "cli-line cli-line--rule",
};

const LinkifiedText = ({ text }) => {
  if (!text) return null;
  const parts = text.split(URL_SPLIT).filter((p) => p != null && p !== "");
  return parts.map((part, i) => {
    if (/^https?:\/\//i.test(part)) {
      return (
        <a
          key={`${part}-${i}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="cli-link"
          onClick={(e) => e.stopPropagation()}
        >
          {part}
        </a>
      );
    }
    if (/^mailto:/i.test(part)) {
      return (
        <a
          key={`${part}-${i}`}
          href={part}
          className="cli-link"
          onClick={(e) => e.stopPropagation()}
        >
          {part.replace(/^mailto:/i, "")}
        </a>
      );
    }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(part)) {
      return (
        <a
          key={`${part}-${i}`}
          href={`mailto:${part}`}
          className="cli-link"
          onClick={(e) => e.stopPropagation()}
        >
          {part}
        </a>
      );
    }
    return <span key={`${i}-${part.slice(0, 8)}`}>{part}</span>;
  });
};

const CliLine = ({ line }) => {
  const cls = LINE_CLASS[line.type] || LINE_CLASS.out;

  if (line.type === "blank") {
    return <div className={cls} aria-hidden="true" />;
  }

  if (line.type === "rule") {
    return <div className={cls} aria-hidden="true" />;
  }

  if (line.type === "cmd") {
    return (
      <pre className={cls}>
        <span className="cli-prompt">{echoPrompt()}</span>
        <span className="cli-cmd-text">{line.text}</span>
      </pre>
    );
  }

  if (line.type === "menu") {
    return (
      <pre className={cls}>
        <span className="cli-menu-key">{line.key}</span>
        <span className="cli-menu-cmd">{line.cmd}</span>
        <span className="cli-menu-label">{line.label}</span>
      </pre>
    );
  }

  if (line.type === "sys") {
    return (
      <pre className={cls}>
        <span className="cli-prompt">{echoPrompt()}</span>
        <span className="cli-sys-text">{line.text}</span>
      </pre>
    );
  }

  return (
    <pre className={cls}>
      <LinkifiedText text={line.text} />
    </pre>
  );
};

export const CLITerminal = ({ open, onClose }) => {
  const [lines, setLines] = useState(buildBanner);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(() => loadCliHistory());
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const endRef = useRef(null);
  const reduce = useReducedMotion();

  useFocusTrap(open, panelRef, onClose);
  useModalIsolation(open);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    setLines(buildBanner());
    setInput("");
    setHistoryIdx(-1);
    setHistory(loadCliHistory());

    const raf = requestAnimationFrame(() => {
      focusInput();
      setTimeout(focusInput, 50);
      setTimeout(focusInput, 150);
    });

    return () => cancelAnimationFrame(raf);
  }, [open, focusInput]);

  useEffect(() => {
    if (!open) return;
    endRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
    });
  }, [lines, reduce, open]);

  const print = (...args) => {
    const entries = toEntries(args);
    setLines((prev) => [
      ...prev,
      ...entries.map((entry, j) => ({
        ...entry,
        id: `${Date.now()}-${prev.length + j}-${uid()}`,
        delay: j * 0.028,
      })),
    ]);
  };

  const goSection = (sectionId, message) => {
    print(L("ok", message));
    onClose();
    setTimeout(() => scrollToElement(sectionId), 200);
  };

  const runSign = (rest) => {
    const args = parseQuoted(rest.trim());
    if (args.length === 0) {
      return print(
        L("meta", 'usage: sign "your name" "short message"'),
        L("meta", "Or close and use the visual Guest book on the page."),
      );
    }
    const name = args[0];
    const message = args[1];
    if (!name || !message) {
      return print(L("err", 'usage: sign "your name" "short message"'));
    }
    saveGuestbookEntry({
      id: `gb_${Date.now()}`,
      name,
      message,
      created_at: new Date().toISOString(),
    });
    return print(L("ok", `Thanks, ${name} — note saved.`));
  };

  const runGo = (rest) => {
    const token = rest.trim().split(/\s+/)[0];
    if (!token) return print(...goHelpLines());
    const id = resolveGoTarget(token);
    if (!id) {
      return print(
        L("err", `Unknown section: ${token}`),
        ...goHelpLines().slice(1),
      );
    }
    return goSection(id, `Opening #${id}…`);
  };

  const runCommand = async (raw) => {
    let cmd = raw.trim();
    print(L("cmd", cmd || "(empty)"));

    if (!cmd) {
      return print(
        L("meta", "Type help (or cmds) for every command."),
        L("meta", "Or press 1–6 for the quick menu."),
      );
    }

    const shortcut = resolveShortcut(cmd);
    if (shortcut) cmd = shortcut;

    const [head, ...restParts] = cmd.split(/\s+/);
    const headLower = canonicalize(head.toLowerCase());
    const rest = restParts.join(" ");
    const arg0 = restParts[0];

    if (
      headLower === "help" ||
      headLower === "?" ||
      headLower === "cmds" ||
      headLower === "commands"
    ) {
      return print(...HELP_LINES);
    }
    if (headLower === "clear") {
      setLines(buildBanner());
      return;
    }
    if (headLower === "exit" || headLower === "q") return onClose();

    if (headLower === "about") return print(...aboutLines());
    if (headLower === "tldr") return print(...tldrLines());
    if (headLower === "avail") return print(...availLines());
    if (headLower === "now") return print(...nowLines());
    if (headLower === "edu") return print(...eduLines());
    if (headLower === "stack") return print(...stackLines());
    if (headLower === "proj") return print(...projectLines());
    if (headLower === "links") return print(...linkLines());
    if (headLower === "pdf") return print(...openCvPdf());
    if (headLower === "gh")
      return print(...openExternal("GitHub", PROFILE.github));
    if (headLower === "li")
      return print(...openExternal("LinkedIn", PROFILE.linkedin));
    if (headLower === "copy") return print(...(await copyEmail()));

    if (headLower === "open") return print(...openProjectUrl("open", arg0));
    if (headLower === "demo") return print(...openProjectUrl("demo", arg0));
    if (headLower === "repo") return print(...openProjectUrl("repo", arg0));

    if (headLower === "go") return runGo(rest);

    if (headLower === "cv") {
      if (rest.toLowerCase().includes("pdf")) return print(...openCvPdf());
      return goSection("cv", "Opening CV…");
    }

    if (headLower === "contact") return goSection("contact", "Opening contact…");

    if (headLower === "sign") return runSign(rest);

    const suggestion = suggestCommand(head.toLowerCase());
    if (suggestion && suggestion !== head.toLowerCase()) {
      return print(
        L("err", `Unknown. Did you mean “${suggestion}”?`),
        L("meta", "Type help for every command."),
      );
    }
    return print(
      L("err", "Unknown command."),
      L("meta", "Type help (or cmds) for every command."),
    );
  };

  const pushHistory = (cmd) => {
    if (!cmd.trim()) return;
    setHistory((prev) => {
      const next = [cmd, ...prev.filter((h) => h !== cmd)];
      saveCliHistory(next);
      return next;
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const cmd = input;
    setInput("");
    pushHistory(cmd);
    setHistoryIdx(-1);
    await runCommand(cmd);
  };

  const onInputKeyDown = (e) => {
    e.stopPropagation();
    if (e.key === "Tab") {
      e.preventDefault();
      const { matches, completed } = completeCommand(input);
      if (matches.length > 1) {
        print(
          L("meta", "completions:"),
          ...matches.map((m) => L("menu", "", { key: "·", cmd: m, label: "" })),
        );
      }
      if (completed !== input) setInput(completed);
      requestAnimationFrame(() => inputRef.current?.focus());
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, history.length - 1);
      if (history[next] !== undefined) {
        setHistoryIdx(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIdx - 1, -1);
      setHistoryIdx(next);
      setInput(next === -1 ? "" : history[next]);
    }
  };

  const panelMotion = reduce
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { y: 40, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 40, opacity: 0 },
        transition: { duration: MOTION_DURATION.normal, ease: MOTION_EASE },
      };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: MOTION_DURATION.fast }}
          data-testid="cli-overlay"
          className="fixed inset-0 z-[200] bg-ink/85 backdrop-blur-sm flex items-end md:items-center justify-center p-4 md:p-12 cli-terminal-panel"
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            {...panelMotion}
            onClick={(e) => {
              e.stopPropagation();
              focusInput();
            }}
            data-testid="cli-terminal"
            className="w-full max-w-3xl bg-bone border border-burgundy font-mono text-sm text-ink shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Quick terminal"
          >
            <div className="flex items-center justify-between border-b border-bone-400 px-4 py-2 bg-bone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-soft">
                <span className="w-2 h-2 rounded-full bg-burgundy shrink-0" />
                <span className="caret">ikrame@portfolio · zsh</span>
              </div>
              <button
                type="button"
                data-testid="cli-close"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                aria-label="Close terminal"
                className="text-xs uppercase tracking-[0.2em] text-ink-soft hover:text-burgundy"
              >
                close ✕
              </button>
            </div>
            <div
              className="cli-log h-[60vh] md:h-[420px] overflow-y-auto p-4 md:p-5 leading-relaxed"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
            >
              {lines.map((l) => (
                <motion.div
                  key={l.id}
                  initial={reduce ? false : { opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: MOTION_DURATION.fast,
                    ease: MOTION_EASE,
                    delay: reduce ? 0 : l.delay ?? 0,
                  }}
                >
                  <CliLine line={l} />
                </motion.div>
              ))}
              <div ref={endRef} />
            </div>
            <form
              onSubmit={onSubmit}
              onMouseDown={(e) => e.stopPropagation()}
              className="border-t border-bone-400 bg-bone-200/50 px-4 py-3 flex items-center gap-2"
            >
              <span className="cli-prompt shrink-0">{echoPrompt()}</span>
              <input
                ref={inputRef}
                data-testid="cli-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onInputKeyDown}
                className="flex-1 min-w-0 bg-transparent outline-none text-ink"
                autoComplete="off"
                spellCheck="false"
                aria-label="Terminal command input"
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CLITerminal;
