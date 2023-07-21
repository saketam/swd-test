import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en/translate.json'
import th from './th/translate.json'

const resources = {
  en,
  th,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "th",

    keySeparator: '.',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
