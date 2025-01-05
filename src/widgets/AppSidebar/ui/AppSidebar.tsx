import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./AppSidebar.module.scss";
import React, {FC, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface AppSidebarProps {
    className?: string
}

export const AppSidebar: FC<AppSidebarProps> = (props) => {
    const {className} = props
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <nav
            className={classNames(style['app-sidebar'], {[style.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={style.switchers}>
                <ThemeSwitcher/>
            </div>
        </nav>
    );
};