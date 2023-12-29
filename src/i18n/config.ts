import type { Language } from "./type";

export const fallbackLanguage = "en";
export const defaultNamespace = "default";
export const languages: Language[] = [fallbackLanguage, "de","am"];

export function getI18nOptions(
  lang = fallbackLanguage,
  ns: string | string[] = defaultNamespace
) {
  return {
    supportedLangs: languages,
    fallbackLng: fallbackLanguage,
    lang,
    fallbackNS: defaultNamespace,
    defaultNS: defaultNamespace,
    ns,
  };
}
