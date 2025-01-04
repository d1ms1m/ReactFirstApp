import React, {Suspense} from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";
import {RouteConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div className={"global-loader"}>Loading...</div>}>
            <Routes>
                {Object.values(RouteConfig).map(({element, path}: RouteProps) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;