import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import en from "@/data/locales/en.js";
import es from "@/data/locales/es.js";
import { UI } from "./ui.js";

const catalogs = { en, es };
const STORAGE_KEY = "ik_lang";

const LocaleContext = createContext(null);

const detectLang = () => {
  if (typeof window === "undefined") return "en";
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("lang");
  if (fromUrl === "en" || fromUrl === "es") return fromUrl;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch {
    /* ignore */
  }
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("es") ? "es" : "en";
};

export const LocaleProvider = ({ children }) => {
  const [lang, setLangState] = useState(detectLang);

  const setLang = useCallback((next) => {
    const value = next === "es" ? "es" : "en";
    setLangState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    const url = new URL(window.location.href);
    if (value === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", value);
    window.history.replaceState(
      {},
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const content = catalogs[lang] ?? catalogs.en;
    const ui = UI[lang] ?? UI.en;
    return { lang, setLang, content, ui, catalogs };
  }, [lang, setLang]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
};

/** Portfolio catalog for the active language. */
export const useContent = () => useLocale().content;

/** Chrome / UI strings for the active language. */
export const useUi = () => useLocale().ui;

export default LocaleProvider;
