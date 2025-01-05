import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./AppLoader.module.scss";
import {Loader} from "shared/ui/Loader/Loader";
import {useTranslation} from "react-i18next";

interface AppLoaderProps {
    className?: string
}

export const AppLoader = ({className}: AppLoaderProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(style['app-loader'], {}, [className])}>
            <Loader/>
            <div className={"global-loader"}>{t('Loading')}</div>
        </div>
    );
};