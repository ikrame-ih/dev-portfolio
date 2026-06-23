import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadGuestbook, saveGuestbookEntry } from "@/lib/storage";
import { PROFILE } from "@/data/portfolio";

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
  const endRef = useRef(null);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const raf = requestAnimationFrame(() => {
      focusInput();
      setTimeout(focusInput, 50); // input mount timing is flaky
      setTimeout(focusInput, 150);
    });

    return () => cancelAnimationFrame(raf);
  }, [open, focusInput]);

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc, true);
    return () => window.removeEventListener("keydown", handleEsc, true);
  }, [open, onClose]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

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
        "Web developer · open to frontend or backend roles.",
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
      setTimeout(
        () =>
          document.getElementById("cv")?.scrollIntoView({ behavior: "smooth" }),
        200,
      );
      return print("Navigating to /cv…");
    }
    if (cmd === "contact") {
      onClose();
      setTimeout(
        () =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" }),
        200,
      );
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          data-testid="cli-overlay"
          className="fixed inset-0 z-[200] bg-ink/85 backdrop-blur-sm flex items-end md:items-center justify-center p-4 md:p-12 cli-terminal-panel"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            onClick={(e) => {
              e.stopPropagation();
              focusInput();
            }}
            data-testid="cli-terminal"
            className="w-full max-w-3xl bg-bone border border-burgundy font-mono text-sm text-ink shadow-2xl"
            role="dialog"
            aria-label="CLI guestbook"
          >
            <div className="flex items-center justify-between border-b border-bone-400 px-4 py-2 bg-bone-200">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                <span className="w-2 h-2 rounded-full bg-burgundy" />
                ikrame@portfolio · zsh
              </div>
              <button
                type="button"
                data-testid="cli-close"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="text-[10px] uppercase tracking-[0.2em] text-ink-soft hover:text-burgundy"
              >
                close ✕
              </button>
            </div>
            <div
              className="h-[60vh] md:h-[420px] overflow-y-auto p-4 leading-relaxed"
              role="log"
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
