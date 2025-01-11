import {useTranslation} from "react-i18next";
import {ThrowErrorButton} from "shared/ui/ThrowErrorButton";
import style from "./HomePage.module.scss";
import {classNames} from "shared/lib/ClassNames/classNames";

const HomePage = () => {
    const {t} = useTranslation('home');
    return (
        <div className={classNames(style['home-page'])}>
            <h1>{t('Title')}</h1>
            <ThrowErrorButton/>
        </div>
    );
};

export default HomePage;