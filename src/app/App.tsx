import React, {Suspense} from 'react';
import 'app/styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {AboutPage} from "pages/AboutPage";
import {HomePage} from "pages/HomePage";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/ClassNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [`${theme}--theme`])}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;