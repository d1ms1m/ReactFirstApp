import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {HomePageAsync} from "./pages/HomePage/HomePage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [`${theme}--theme`])}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePageAsync/>} />
                    <Route path="/about" element={<AboutPageAsync/>} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;