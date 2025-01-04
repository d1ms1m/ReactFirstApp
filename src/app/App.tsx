import React from 'react';
import 'app/styles/index.scss'
import {Link} from 'react-router-dom'
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/ClassNames/classNames";
import AppRouter from "app/providers/router/ui/AppRouter";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [`${theme}--theme`])}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter/>
        </div>
    );
};

export default App;