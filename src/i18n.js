import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locale/en.json';
import ptTranslation from './locale/pt.json';

// Configuração do i18n
i18n
  .use(initReactI18next)  // Conecta i18next com React
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
    },
    lng: 'pt',  // Idioma padrão
    fallbackLng: 'en',  // Idioma de fallback
    interpolation: {
      escapeValue: false,  // React já faz a proteção contra XSS
    },
  });

export default i18n;
