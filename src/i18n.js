import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
const fallbackLng = ["en"]
const availableLanguages = ["en", "fr"]

const options = {
  // order and from where user language should be detected
  order: ["navigator", "htmlTag", "path", "subdomain"],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,
}

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "en",
    nsSeparator: false,
    keySeparator: false,
    fallbackLng: false,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  })

export default i18n
