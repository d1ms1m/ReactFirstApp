import {Suspense} from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";
import {RouteConfig} from "shared/config/routeConfig/routeConfig";
import {AppLoader} from "widgets/AppLoader";

const AppRouter = () => {
    return (
        <Suspense fallback={<AppLoader/>}>
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