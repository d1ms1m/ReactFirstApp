import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {Languages} from "widgets/LangSwitcher/ui/LangSwitcher";

i18n
    .use(initReactI18next)
    .init({
        lng: Languages.EN,
        fallbackLng: Languages.EN,
        debug: false,
        resources: {[Languages.EN]: {translations: {}}},
    });

export default i18n;