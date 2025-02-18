import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../../types/i18n/TranslationKeys";

export const useTypedTranslation = () => {
    const { t, i18n } = useTranslation();
    const typedT = (key: keyof TranslationKeys) => t(key);

    return { t: typedT, i18n };
}