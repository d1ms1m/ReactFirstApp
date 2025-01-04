import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./AppLink.module.scss";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkFontColor {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    fontColor?: AppLinkFontColor
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        className,
        fontColor = AppLinkFontColor.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(style['app-link'], {}, [className, style[fontColor]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};