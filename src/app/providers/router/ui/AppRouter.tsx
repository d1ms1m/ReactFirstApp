import React, {Suspense} from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";
import {RouteConfig} from "shared/config/routeConfig/routeConfig";
import {useTranslation} from "react-i18next";

const AppRouter = () => {
    const {t} = useTranslation();
    return (
        <Suspense fallback={<div className={"global-loader"}>{t('Loading')}...</div>}>
            <div className={"page-wrapper"}>
                <Routes>
                    {Object.values(RouteConfig).map(({element, path}: RouteProps) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};

export default AppRouter;