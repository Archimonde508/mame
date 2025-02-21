import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TranslationKeys } from "./types/i18n/TranslationKeys";

const resources: Record<string, { translation: TranslationKeys }> = {
    pl: {
        translation: {
            homeDescription: 'Aktorka / Modelka Dojrzała',
            homePageName: 'Strona główna',
            actressPageName: 'Aktorstwo',
            orientPageName: 'Uroda Orientalna',
            modelPageName: 'Modelka',
            aboutPageName: 'O mnie',
            aboutText: `Zanim zostałam fotomodelką, spróbowałem swoich sił w wodzie. 10 lat
                pływania zawodowego, praca jako ratownik wodny oraz instruktor
                pływania pozwoliły mi ukształtować charakter. Przez te lata
                zaszczepiła się we mnie sumienność, wytrwałość i punktualność co
                pozwala mi profesjonalnie podchodzić do każdej sesji zdjęciowej,
                pokazu mody, gry w teledyskach, reklamach czy też serialach oraz
                filmach. Fotomodeling łączę ze służbą w Państwowej Straży Pożarnej.
                „Drodzy Państwo, nazywam się Szymon Chrobok i z przyjemnością wezmę
                udział w Waszej reklamie.” Zapraszam do współpracy.`,
            contactText: 'Kontakt email: malgorzata.horyn-olszewska@wp.pl'
        },
    },
    en: {
        translation: {
            homeDescription: 'Actress / Mature Model',
            homePageName: 'Home',
            actressPageName: 'Actress',
            orientPageName: 'Oriental Beauty',
            modelPageName: 'Model',
            aboutPageName: 'About Me',
            aboutText: `ENGLISH ENGLISH ENBGLISHstałam fotomodelką, spróbowałem swoich sił w wodzie. 10 lat
            pływania zawodowego, praca jako ratownik wodny oraz instruktor
            pływania pozwoliły mi ukształtować charakter. Przez te lata
            zaszczepiła się we mnie sumienność, wytrwałość i punktualność co
            pozwala mi profesjonalnie podchodzić do każdej sesji zdjęciowej,
            pokazu mody, gry w teledyskach, reklamach czy też serialach oraz
            filmach. Fotomodeling łączę ze służbą w Państwowej Straży Pożarnej.
            „Drodzy Państwo, nazywam się Szymon Chrobok i z przyjemnością wezmę
            udział w Waszej reklamie.” Zapraszam do współpracy.`,
            contactText: 'Contact emaill: malgorzata.horyn-olszewska@wp.pl'
        },
    },
};

i18n.use(initReactI18next).init({
    lng: "pl", // default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: resources
});

export default i18n;
