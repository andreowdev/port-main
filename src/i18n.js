import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locale/en.json";
import ptTranslation from "./locale/pt.json";

i18n.use(initReactI18next).init({
  resources: {
    "pt-BR": {
      translation: ptTranslation,
    },
    pt: {
      translation: ptTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
  lng: "pt-BR",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
