import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./AppSidebar.module.scss";
import {FC, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";

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
                <LangSwitcher/>
            </div>
        </nav>
    );
};