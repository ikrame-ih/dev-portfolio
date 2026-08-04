import { useState, useRef, useEffect, useCallback } from "react";
import { getVisitorId, loadAndMigrateBows, saveBow } from "@/lib/storage";
import { fetchRemoteBows, postRemoteBow, useRemoteBows } from "@/lib/bowsApi";
import { normalizeBow, bowTooClose } from "@/lib/bowUtils";

function mergeVisitorBow(bows, bow, visitorId) {
  const withoutVisitor = bows.filter((b) => b.visitor_id !== visitorId);
  return [bow, ...withoutVisitor].map(normalizeBow);
}

export function useGuestbookSync({ showHint }) {
  const visitorIdRef = useRef(null);
  const syncingRef = useRef(false);
  const hintTimerRef = useRef(null);
  const [bows, setBows] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [lastDropped, setLastDropped] = useState(null);
  const [remote, setRemote] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);
  const [visitorId, setVisitorId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const section = document.getElementById("guestbook");

    const load = async () => {
      if (useRemoteBows()) {
        try {
          const { bows: remoteBows, visitorId: vid } = await fetchRemoteBows();
          if (!cancelled) {
            visitorIdRef.current = vid;
            setVisitorId(vid);
            setBows(remoteBows.map(normalizeBow));
            setRemote(true);
            setUnavailable(false);
            setHasSigned(remoteBows.some((b) => b.visitor_id === vid));
          }
          return;
        } catch {
          if (import.meta.env.PROD) {
            if (!cancelled) {
              setUnavailable(true);
              setRemote(false);
            }
            return;
          }
        }
      }
      if (!cancelled) {
        const vid = getVisitorId();
        visitorIdRef.current = vid;
        setVisitorId(vid);
        const local = loadAndMigrateBows();
        setBows(local);
        setRemote(false);
        setUnavailable(false);
        setHasSigned(local.some((b) => b.visitor_id === vid));
      }
    };

    const start = () => {
      load().finally(() => {
        if (!cancelled) setLoaded(true);
      });
    };

    if (typeof IntersectionObserver === "undefined" || !section) {
      start();
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io.disconnect();
            start();
          }
        },
        { rootMargin: "240px 0px" },
      );
      io.observe(section);
      return () => {
        cancelled = true;
        io.disconnect();
        if (hintTimerRef.current) window.clearTimeout(hintTimerRef.current);
      };
    }

    return () => {
      cancelled = true;
      if (hintTimerRef.current) window.clearTimeout(hintTimerRef.current);
    };
  }, []);

  const placeBowSync = useCallback(
    async (page, mx, y) => {
      if (unavailable || syncingRef.current) return false;
      if (remote && !visitorIdRef.current) return false;

      const vid = remote ? visitorIdRef.current : getVisitorId();

      if (bowTooClose(page, mx, y, bows, vid)) {
        showHint("tooClose");
        return false;
      }

      const existing = bows.find((b) => b.visitor_id === vid);
      const bow = normalizeBow({
        id:
          existing?.id ??
          `bow_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        page,
        mx,
        y,
        rotation: Math.round((Math.random() - 0.5) * 40),
        visitor_id: vid,
        created_at: existing?.created_at ?? new Date().toISOString(),
      });

      const snapshot = bows;

      if (remote) {
        setBows(mergeVisitorBow(bows, bow, vid));
        setLastDropped(bow.id);
        showHint(null);
        syncingRef.current = true;
      }

      try {
        if (remote) {
          const { bows: synced, visitorId: nextVid } = await postRemoteBow(bow);
          const resolved = nextVid ?? vid;
          visitorIdRef.current = resolved;
          setVisitorId(resolved);
          setBows(synced.map(normalizeBow));
        } else {
          const next = saveBow(bow);
          setBows(next);
          setLastDropped(bow.id);
          showHint(null);
        }
        setHasSigned(true);
        if (!existing) {
          showHint(page === "left" ? "placedLeft" : "placedRight");
        } else {
          showHint("moved");
        }
        return true;
      } catch (err) {
        if (remote) {
          setBows(snapshot);
          setLastDropped(existing?.id ?? null);
        }
        if (err.code === "too_close") {
          showHint("tooClose");
          return false;
        }
        showHint("error");
        return false;
      } finally {
        syncingRef.current = false;
      }
    },
    [bows, remote, unavailable, showHint],
  );

  return {
    bows,
    loaded,
    lastDropped,
    remote,
    unavailable,
    hasSigned,
    visitorId,
    placeBowSync,
    hintTimerRef,
  };
}
