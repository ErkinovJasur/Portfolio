import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uz from './locales/uz.json';
import en from './locales/en.json';
import ru from './locales/ru.json';

const supported = ['uz', 'en', 'ru'];

const detectLanguage = () => {
  const saved = localStorage.getItem('portfolio_lang');
  if (supported.includes(saved)) return saved;
  const system = navigator.language?.slice(0, 2);
  return supported.includes(system) ? system : 'uz';
};

const initialLanguage = detectLanguage();

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: initialLanguage,
  fallbackLng: 'uz',
  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = initialLanguage;

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('portfolio_lang', lng);
  document.documentElement.lang = lng;
});

export default i18n;
