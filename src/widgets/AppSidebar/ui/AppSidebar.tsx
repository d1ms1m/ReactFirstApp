import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./AppSidebar.module.scss";
import {FC, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";
import Icon from "@mdi/react";
import {mdiChevronLeft, mdiChevronRight} from "@mdi/js";
import {Button, ButtonStyle} from "shared/ui/Button/Button";

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
            data-testid="app-sidebar"
            className={classNames(style['app-sidebar'], {[style.collapsed]: collapsed}, [className])}
        >
            <Button
                data-testid="app-sidebar__toggle-button"
                buttonStyle={ButtonStyle.DEFAULT}
                onClick={onToggle}
            >
                {collapsed ? <Icon path={mdiChevronRight} size={1}/> : <Icon path={mdiChevronLeft} size={1}/>}
            </Button>
            <div className={style.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </nav>
    );
};