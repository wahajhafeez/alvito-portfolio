import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '@/locales/en.json';
import de from '@/locales/de.json';
import fr from '@/locales/fr.json';
import it from '@/locales/it.json';
import es from '@/locales/es.json';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'it', label: 'IT', name: 'Italiano' },
  { code: 'es', label: 'ES', name: 'Español' },
];

i18n
  // Detect language from localStorage → browser
  .use(LanguageDetector)
  // Bind i18next to React
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      fr: { translation: fr },
      it: { translation: it },
      es: { translation: es },
    },
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    // Resources are bundled, so no Suspense / loading state is needed
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'portfolio-lang',
      caches: ['localStorage'],
    },
  });

// Keep <html lang="…"> in sync for accessibility & SEO
const applyHtmlLang = (lng) => {
  document.documentElement.lang = lng;
};
applyHtmlLang(i18n.resolvedLanguage || i18n.language);
i18n.on('languageChanged', applyHtmlLang);

export default i18n;
