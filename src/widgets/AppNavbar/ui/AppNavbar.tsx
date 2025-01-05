import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./AppNavbar.module.scss";
import {AppRoute, RoutePath} from "shared/config/routeConfig/routeConfig";
import {AppLink, AppLinkFontColor} from "shared/ui/AppLink/AppLink";

interface AppNavbarProps {
    className?: string
}

export const AppNavbar = ({className}: AppNavbarProps) => {
    return (
        <div className={classNames(style['app-navbar'], {}, [className])}>
            <div className={style.links}>
                <AppLink
                    to={RoutePath[AppRoute.HOME]}
                    fontColor={AppLinkFontColor.SECONDARY}
                >
                    Home
                </AppLink>
                <AppLink
                    to={RoutePath[AppRoute.ABOUT]}
                    fontColor={AppLinkFontColor.SECONDARY}
                >
                    About
                </AppLink>
            </div>
        </div>
    );
};

