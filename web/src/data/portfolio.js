import en from "./locales/en.js";
import es from "./locales/es.js";

export const catalogs = { en, es };

/** @deprecated Prefer useContent() — kept for modules that still import named exports. */
export const PROFILE = en.PROFILE;
export const LANGUAGES = en.LANGUAGES;
export const STACK = en.STACK;
export const EXPERIENCE = en.EXPERIENCE;
export const EDUCATION = en.EDUCATION;
export const PROJECTS = en.PROJECTS;
export const BENTO = en.BENTO;
export const LINKEDIN_SIGNALS = en.LINKEDIN_SIGNALS;
export const BOW_BOARD = en.BOW_BOARD;

export default en;
