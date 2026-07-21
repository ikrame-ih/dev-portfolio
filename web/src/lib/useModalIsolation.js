import { useEffect } from "react";

/** Lock body scroll and inert the page shell while a modal is open. */
export function useModalIsolation(active) {
  useEffect(() => {
    if (!active) return;

    const shell = document.getElementById("app-shell");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (shell) shell.inert = true;

    return () => {
      document.body.style.overflow = previousOverflow;
      if (shell) shell.inert = false;
    };
  }, [active]);
}
