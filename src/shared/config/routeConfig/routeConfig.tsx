import {RouteProps} from "react-router-dom";
import {HomePage} from "pages/HomePage";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";

export enum AppRoute {
    HOME = "home",
    ABOUT = "about",
    NOT_FOUND = "404"
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.HOME]: "/",
    [AppRoute.ABOUT]: "/about",
    [AppRoute.NOT_FOUND]: "*",
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
    [AppRoute.NOT_FOUND]: {
        path: RoutePath[AppRoute.NOT_FOUND],
        element: <NotFoundPage/>,
    },
}