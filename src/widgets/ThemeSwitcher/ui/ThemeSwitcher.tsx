import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./ThemeSwitcher.module.scss";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import LightIcon from "shared/assets/icons/theme-light.svg"
import {Button, ButtonStyle} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button
            onClick={toggleTheme}
            className={classNames(style['theme-switcher'], {}, [className])}
            buttonStyle={ButtonStyle.CLEAR}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};