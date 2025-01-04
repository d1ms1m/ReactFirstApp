import React from 'react';
import 'app/styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/ClassNames/classNames";
import AppRouter from "app/providers/router/ui/AppRouter";
import {AppNavbar} from "widgets/AppNavbar";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [`${theme}--theme`])}>
            <AppNavbar/>
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter/>
        </div>
    );
};

export default App;