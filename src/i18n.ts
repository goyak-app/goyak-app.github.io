import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fa from './locales/fa.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

const applyLanguageOptions = (lng: string) => {
  const dir = lng === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lng);
};

i18n.on('languageChanged', applyLanguageOptions);
i18n.on('initialized', () => {
  applyLanguageOptions(i18n.resolvedLanguage || i18n.language);
});

// Just in case it's already initialized synchronously
if (i18n.isInitialized) {
  applyLanguageOptions(i18n.resolvedLanguage || i18n.language);
}

export default i18n;
