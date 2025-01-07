import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./AppNavbar.module.scss";
import {AppRoute, RoutePath} from "shared/config/routeConfig/routeConfig";
import {AppLink, AppLinkFontColor} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface AppNavbarProps {
    className?: string
}

export const AppNavbar = ({className}: AppNavbarProps) => {
    const {t} = useTranslation();
    return (
        <div
            data-testid="app-navbar"
            className={classNames(style['app-navbar'], {}, [className])}
        >
            <div className={style.links}>
                <AppLink
                    to={RoutePath[AppRoute.HOME]}
                    fontColor={AppLinkFontColor.SECONDARY}
                >
                    {t('Home')}
                </AppLink>
                <AppLink
                    to={RoutePath[AppRoute.ABOUT]}
                    fontColor={AppLinkFontColor.SECONDARY}
                >
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};

