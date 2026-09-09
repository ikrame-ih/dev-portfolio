/** BCP 47 tags for the document and Intl. Internal catalog keys stay `en` / `es`. */
export const HTML_LANG = {
  en: "en-US",
  es: "es-ES",
};

export const htmlLang = (lang) => HTML_LANG[lang] ?? HTML_LANG.en;
