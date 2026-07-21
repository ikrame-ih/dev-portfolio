import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { loadGuestbook, saveGuestbookEntry } from "@/lib/storage";
import { PROFILE } from "@/data/portfolio";
import { MOTION_EASE, MOTION_DURATION } from "@/lib/motion";
import { scrollToElement } from "@/lib/scroll";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useModalIsolation } from "@/lib/useModalIsolation";

const HELP = [
  "Available commands:",
  "  help                              show this help",
  "  about                             about Ikrame",
  "  whoami                            technical identity",
  "  guestbook --list                  list recent signatures",
  '  guestbook --sign "name" "msg"     sign the guestbook',
  "  cv                                scroll to CV section",
  "  contact                           scroll to contact",
  "  clear                             clear terminal",
  "  exit                              close terminal (Esc)",
  "",
  "Visual guest book: scroll to Guest book and click a page.",
];

const BANNER = [
  "ikrame@portfolio:~$ welcome.",
  "Type help to start · Esc to close.",
];

const parseQuoted = (str) => {
  const out = [];
  const re = /"([^"]*)"|(\S+)/g;
  let m;
  while ((m = re.exec(str)) !== null)
    out.push(m[1] !== undefined ? m[1] : m[2]);
  return out;
};

export const CLITerminal = ({ open, onClose }) => {
  const [lines, setLines] = useState(BANNER);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
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
  }, [lines, reduce]);

  const print = (...newLines) => setLines((prev) => [...prev, ...newLines]);

  const runCommand = async (raw) => {
    const cmd = raw.trim();
    print(`ikrame@portfolio:~$ ${cmd}`);
    if (!cmd) return;

    if (cmd === "help") return print(...HELP);
    if (cmd === "clear") return setLines([]);
    if (cmd === "exit") return onClose();
    if (cmd === "about") {
      return print(
        `${PROFILE.name} — ${PROFILE.location}`,
        PROFILE.tagline,
        PROFILE.heroSubtext,
        PROFILE.workPreference,
      );
    }
    if (cmd === "whoami") {
      return print(
        "uid=ikrame gid=developer groups=frontend,backend",
        "shell=/bin/focus · home=/src",
      );
    }
    if (cmd === "cv") {
      onClose();
      setTimeout(() => scrollToElement("cv"), 200);
      return print("Navigating to /cv…");
    }
    if (cmd === "contact") {
      onClose();
      setTimeout(() => scrollToElement("contact"), 200);
      return print("Navigating to /contact…");
    }
    if (cmd.startsWith("guestbook")) {
      const args = parseQuoted(cmd.slice("guestbook".length).trim());
      if (args[0] === "--list" || args.length === 0) {
        const entries = loadGuestbook();
        if (!entries.length) {
          return print(
            '(empty) be first: guestbook --sign "your_name" "message"',
          );
        }
        print("── recent signatures ──");
        entries.slice(0, 12).forEach((e) => {
          const d = new Date(e.created_at).toLocaleDateString("en-GB");
          print(`  [${d}] ${e.name}: ${e.message}`);
        });
        return print("────────────────────");
      }
      if (args[0] === "--sign") {
        const name = args[1];
        const message = args[2];
        if (!name || !message)
          return print('usage: guestbook --sign "name" "message"');
        saveGuestbookEntry({
          id: `gb_${Date.now()}`,
          name,
          message,
          created_at: new Date().toISOString(),
        });
        return print(`signed as "${name}". thank you.`);
      }
      return print(
        'usage: guestbook --list  |  guestbook --sign "name" "message"',
      );
    }
    return print(`command not found: ${cmd}. type 'help'.`);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const cmd = input;
    setInput("");
    setHistory((prev) => [cmd, ...prev]);
    setHistoryIdx(-1);
    await runCommand(cmd);
  };

  const onInputKeyDown = (e) => {
    e.stopPropagation();
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
            aria-label="CLI guestbook"
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
              className="h-[60vh] md:h-[420px] overflow-y-auto p-4 leading-relaxed"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
            >
              {lines.map((l, i) => (
                <pre
                  key={`${i}-${l.slice(0, 12)}`}
                  className="whitespace-pre-wrap text-ink"
                >
                  {l}
                </pre>
              ))}
              <div ref={endRef} />
            </div>
            <form
              onSubmit={onSubmit}
              onMouseDown={(e) => e.stopPropagation()}
              className="border-t border-bone-400 px-4 py-3 flex items-center gap-2"
            >
              <span className="text-burgundy shrink-0">
                ikrame@portfolio:~$
              </span>
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
