import i18n from "i18next"

import XHR from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
  .use(XHR)
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .use(LanguageDetector)

  .init({
    debug: true,
    lng: "en",
    nsSeparator: false,
    keySeparator: false,
    fallbackLng: false,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}.json",
      addPath: "locales/add/{{lng}}/{{ns}}",
    },
  })

export default i18n
