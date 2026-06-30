import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '@/locales/en.json';
import de from '@/locales/de.json';
import fr from '@/locales/fr.json';
import it from '@/locales/it.json';
import es from '@/locales/es.json';
import nl from '@/locales/nl.json';
import ar from '@/locales/ar.json';

// `dir` drives the <html dir="…"> attribute — use 'rtl' for right-to-left languages.
export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English', dir: 'ltr' },
  { code: 'de', label: 'DE', name: 'Deutsch', dir: 'ltr' },
  { code: 'fr', label: 'FR', name: 'Français', dir: 'ltr' },
  { code: 'it', label: 'IT', name: 'Italiano', dir: 'ltr' },
  { code: 'es', label: 'ES', name: 'Español', dir: 'ltr' },
  { code: 'nl', label: 'NL', name: 'Nederlands', dir: 'ltr' },
  { code: 'ar', label: 'AR', name: 'العربية', dir: 'rtl' },
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
      nl: { translation: nl },
      ar: { translation: ar },
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

// Keep <html lang="…" dir="…"> in sync for accessibility, SEO and RTL layout
const applyHtmlAttrs = (lng) => {
  const meta = SUPPORTED_LANGUAGES.find((l) => l.code === lng);
  document.documentElement.lang = lng;
  document.documentElement.dir = meta?.dir ?? 'ltr';
};
applyHtmlAttrs(i18n.resolvedLanguage || i18n.language);
i18n.on('languageChanged', applyHtmlAttrs);

export default i18n;
