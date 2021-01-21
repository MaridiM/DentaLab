import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import { translations } from 'utils'

const fallbackLng = ['en']

const languages = {
    en: translations.enAuth, 
    ru: translations.ruAuth
}
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: languages,
    fallbackLng,
    debug: false,

    // have a common namespace used around the full app
    // ns: ["forgot"],
    // defaultNS: "forgot",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
