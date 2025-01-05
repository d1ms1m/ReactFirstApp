import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./LangSwitcher.module.scss";
import {Button, ButtonStyle} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

export enum Languages {
    RU = "ru",
    EN = "en",
}

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();
    const onClick = () => {
        const lang = i18n.language === Languages.RU ? Languages.EN : Languages.RU;
        i18n.changeLanguage(lang);
    }
    return (
        <Button
            className={classNames(style['lang-switcher'], {}, [className])}
            buttonStyle={ButtonStyle.DEFAULT}
            onClick={onClick}
        >
            {t('Language')}
        </Button>
    );
};