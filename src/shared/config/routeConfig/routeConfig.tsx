import {RouteProps} from "react-router-dom";
import {HomePage} from "pages/HomePage";
import {AboutPage} from "pages/AboutPage";

enum AppRoute {
    HOME = "home",
    ABOUT = "about",
}

const RoutePath: Record<AppRoute, string> = {
    [AppRoute.HOME]: "/",
    [AppRoute.ABOUT]: "/about",
}

export const RouteConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.HOME]: {
        path: RoutePath[AppRoute.HOME],
        element: <HomePage/>,
    },
    [AppRoute.ABOUT]: {
        path: RoutePath[AppRoute.ABOUT],
        element: <AboutPage/>,
    },
}