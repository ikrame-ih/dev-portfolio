/**
 * @file useGuestbookKeyboard.js
 * @description Custom hook managing keyboard navigation for the guestbook canvas.
 * Allows users to place signatures precisely using arrow keys without relying on a pointer.
 */
import { useState, useCallback } from "react";
import { clampBowPosition } from "@/lib/bowUtils";

const KEYBOARD_STEP = 0.05;
const DEFAULT_KEYBOARD_POS = { mx: 0.5, y: 0.42 };

export function useGuestbookKeyboard({ unavailable, placeBowAt }) {
  const [ghost, setGhost] = useState(null);

  const clearGhost = useCallback(() => setGhost(null), []);

  const handlePageFocus = useCallback(
    (page) => {
      if (unavailable) return;
      setGhost((prev) =>
        prev?.page === page
          ? prev
          : { page, ...DEFAULT_KEYBOARD_POS },
      );
    },
    [unavailable],
  );

  const handlePageKeyDown = useCallback(
    (page, e) => {
      if (unavailable) return;

      const moveKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (moveKeys.includes(e.key)) {
        e.preventDefault();
        setGhost((prev) => {
          const base =
            prev?.page === page ? prev : { page, ...DEFAULT_KEYBOARD_POS };
          let { mx, y } = base;
          if (e.key === "ArrowLeft") mx -= KEYBOARD_STEP;
          if (e.key === "ArrowRight") mx += KEYBOARD_STEP;
          if (e.key === "ArrowUp") y -= KEYBOARD_STEP;
          if (e.key === "ArrowDown") y += KEYBOARD_STEP;
          return { page, ...clampBowPosition(mx, y, page) };
        });
        return;
      }

      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      const pos =
        ghost?.page === page ? ghost : { page, ...DEFAULT_KEYBOARD_POS };
      placeBowAt(page, pos.mx, pos.y);
    },
    [unavailable, ghost, placeBowAt],
  );

  return {
    ghost,
    setGhost,
    clearGhost,
    handlePageFocus,
    handlePageKeyDown,
  };
}
