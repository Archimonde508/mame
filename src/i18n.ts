import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TranslationKeys } from "./types/i18n/TranslationKeys";

const resources: Record<string, { translation: TranslationKeys }> = {
    pl: {
        translation: {
            homeDescription: 'Aktorka / Modelka Dojrzała',
            homePageName: 'Strona główna',
            actingPageName: 'Aktorstwo',
            orientPageName: 'Uroda Orientalna',
            modelPageName: 'Modelka',
            aboutPageName: 'O mnie',
            aboutText: 'długi tekst',
        },
    },
    en: {
        translation: {
            homeDescription: 'Actress / Mature Model',
            homePageName: 'Home',
            actingPageName: 'Acting',
            orientPageName: 'Oriental Beauty',
            modelPageName: 'Model',
            aboutPageName: 'About Me',
            aboutText: 'long text',
        },
    },
};

i18n.use(initReactI18next).init({
    lng: "pl", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
        escapeValue: false,
    },
    resources: resources
});

export default i18n;
