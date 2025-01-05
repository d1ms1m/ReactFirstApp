import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./Button.module.scss";
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonStyle {
    CLEAR = "clear",
    DEFAULT = "default",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    buttonStyle?: ButtonStyle,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        buttonStyle = ButtonStyle.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(style['button'], {}, [className, style[buttonStyle]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};