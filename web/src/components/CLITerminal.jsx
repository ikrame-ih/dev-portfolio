import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { saveGuestbookEntry } from "@/lib/storage";
import { MOTION_EASE, MOTION_DURATION } from "@/lib/motion";
import { scrollToElement } from "@/lib/scroll";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useModalIsolation } from "@/lib/useModalIsolation";
import { useContent, useLocale, useUi } from "@/i18n/LocaleContext";
import {
  L,
  getHelpLines,
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
  const content = useContent();
  const ui = useUi();
  const { lang } = useLocale();
  const { PROFILE } = content;
  const cli = ui.cli;
  const [lines, setLines] = useState(() => buildBanner(cli));
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
    setLines(buildBanner(cli));
    setInput("");
    setHistoryIdx(-1);
    setHistory(loadCliHistory());

    const raf = requestAnimationFrame(() => {
      focusInput();
      setTimeout(focusInput, 50);
      setTimeout(focusInput, 150);
    });

    return () => cancelAnimationFrame(raf);
  }, [open, focusInput, lang]);

  useEffect(() => {
    if (!open) return;
    endRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
    });
  }, [lines, reduce, open]);

  const print = (...args) => {
    const entries = toEntries(args);
    setLines((prev) => {
      const next = [
        ...prev,
        ...entries.map((entry, j) => ({
          ...entry,
          id: `${Date.now()}-${prev.length + j}-${uid()}`,
          delay: j * 0.028,
        })),
      ];
      if (next.length > 200) {
        return next.slice(next.length - 200);
      }
      return next;
    });
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
        L("meta", cli.signUsage),
        L("meta", cli.signHint),
      );
    }
    const name = args[0];
    const message = args[1];
    if (!name || !message) {
      return print(L("err", cli.signUsage));
    }
    saveGuestbookEntry({
      id: `gb_${Date.now()}`,
      name,
      message,
      created_at: new Date().toISOString(),
    });
    return print(
      L("ok", cli.signThanks.replace("{name}", name)),
    );
  };

  const runGo = (rest) => {
    const token = rest.trim().split(/\s+/)[0];
    if (!token) return print(...goHelpLines(cli));
    const id = resolveGoTarget(token);
    if (!id) {
      return print(
        L("err", `${cli.unknownSection}: ${token}`),
        ...goHelpLines(cli).slice(1),
      );
    }
    return goSection(id, `${cli.openingSection} #${id}…`);
  };

  const COMMANDS = {
    help: async (ctx) => ctx.print(...getHelpLines(ctx.cli)),
    "?": async (ctx) => ctx.print(...getHelpLines(ctx.cli)),
    cmds: async (ctx) => ctx.print(...getHelpLines(ctx.cli)),
    commands: async (ctx) => ctx.print(...getHelpLines(ctx.cli)),
    clear: async (ctx) => ctx.setLines(buildBanner(ctx.cli)),
    exit: async (ctx) => ctx.onClose(),
    q: async (ctx) => ctx.onClose(),
    about: async (ctx) => ctx.print(...aboutLines(ctx.content)),
    tldr: async (ctx) => ctx.print(...tldrLines(ctx.content, ctx.cli)),
    avail: async (ctx) => ctx.print(...availLines(ctx.content, ctx.cli)),
    now: async (ctx) => ctx.print(...nowLines(ctx.content, ctx.cli)),
    edu: async (ctx) => ctx.print(...eduLines(ctx.content, ctx.cli)),
    stack: async (ctx) => ctx.print(...stackLines(ctx.content, ctx.cli)),
    proj: async (ctx) => ctx.print(...projectLines(ctx.content, ctx.cli)),
    links: async (ctx) => ctx.print(...linkLines(ctx.content, ctx.cli)),
    pdf: async (ctx) => ctx.print(...openCvPdf(ctx.arg0 || ctx.rest || "en", ctx.cli)),
    gh: async (ctx) => ctx.print(...openExternal("GitHub", ctx.PROFILE.github, ctx.cli)),
    li: async (ctx) => ctx.print(...openExternal("LinkedIn", ctx.PROFILE.linkedin, ctx.cli)),
    tip: async (ctx) =>
      ctx.print(
        ...openExternal(
          ctx.cli.tipLabel ?? "Buy Me a Coffee",
          ctx.PROFILE.buyMeACoffee,
          ctx.cli,
        ),
      ),
    copy: async (ctx) => ctx.print(...(await copyEmail(ctx.content, ctx.cli))),
    open: async (ctx) => ctx.print(...openProjectUrl("open", ctx.arg0, ctx.content, ctx.cli)),
    demo: async (ctx) => ctx.print(...openProjectUrl("demo", ctx.arg0, ctx.content, ctx.cli)),
    repo: async (ctx) => ctx.print(...openProjectUrl("repo", ctx.arg0, ctx.content, ctx.cli)),
    go: async (ctx) => ctx.runGo(ctx.rest),
    cv: async (ctx) => {
      if (ctx.rest.toLowerCase().includes("pdf")) {
        const es = /\bes\b/i.test(ctx.rest);
        return ctx.print(...openCvPdf(es ? "es" : "en", ctx.cli));
      }
      return ctx.goSection("cv", ctx.cli.openingCv);
    },
    contact: async (ctx) => ctx.goSection("contact", ctx.cli.openingContact),
    sign: async (ctx) => ctx.runSign(ctx.rest),
  };

  const runCommand = async (raw) => {
    let cmd = raw.trim();
    print(L("cmd", cmd || cli.emptyCmd));

    if (!cmd) {
      return print(
        L("meta", cli.emptyHint),
        L("meta", cli.menuHint),
      );
    }

    const shortcut = resolveShortcut(cmd);
    if (shortcut) cmd = shortcut;

    const [head, ...restParts] = cmd.split(/\s+/);
    const headLower = canonicalize(head.toLowerCase());
    const rest = restParts.join(" ");
    const arg0 = restParts[0];

    const ctx = {
      print,
      setLines,
      onClose,
      content,
      cli,
      PROFILE,
      arg0,
      rest,
      runGo,
      runSign,
      goSection,
    };

    const handler = COMMANDS[headLower];
    if (handler) {
      await handler(ctx);
      return;
    }

    const suggestion = suggestCommand(head.toLowerCase());
    if (suggestion && suggestion !== head.toLowerCase()) {
      return print(
        L("err", `${cli.didYouMean} “${suggestion}”?`),
        L("meta", cli.typeHelp),
      );
    }
    return print(
      L("err", cli.unknown),
      L("meta", cli.typeHelp),
    );
  };

  const pushHistory = (cmd) => {
    if (!cmd.trim()) return;
    setHistory((prev) => {
      const next = [cmd, ...prev.filter((h) => h !== cmd)].slice(0, 200);
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
          L("meta", cli.completions),
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
    ? { initial: false, animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } }
    : {
        initial: { opacity: 0, y: 16, clipPath: "inset(0% 0% 92% 0%)" },
        animate: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
        exit: { opacity: 0, y: 20, clipPath: "inset(0% 0% 85% 0%)" },
        transition: { duration: 0.5, ease: MOTION_EASE },
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
            className="cli-window w-full max-w-3xl bg-bone border border-burgundy font-mono text-sm text-ink shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={ui.cli.dialog}
          >
            <div className="flex items-center justify-between border-b border-bone-400 px-4 py-2 bg-bone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-soft">
                <span className="cli-window__boot-dot w-2 h-2 rounded-full bg-burgundy shrink-0" />
                <span className="caret">ikrame@portfolio · zsh</span>
              </div>
              <button
                type="button"
                data-testid="cli-close"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                aria-label={ui.cli.close}
                className="text-xs uppercase tracking-[0.2em] text-ink-soft hover:text-burgundy"
              >
                {ui.cli.closeBtn}
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
                  className="cli-boot-line"
                  initial={reduce ? false : { opacity: 0, x: -8, filter: "blur(2px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.32,
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
                aria-label={ui.cli.input}
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CLITerminal;
