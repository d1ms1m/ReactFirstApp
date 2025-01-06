import {Suspense} from 'react';
import 'app/styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/ClassNames/classNames";
import AppRouter from "app/providers/router/ui/AppRouter";
import {AppNavbar} from "widgets/AppNavbar";
import {AppSidebar} from "widgets/AppSidebar";

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [`${theme}--theme`])}>
            <Suspense fallback={null}>
                <AppNavbar/>
                <div className={'content-container'}>
                    <AppSidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;