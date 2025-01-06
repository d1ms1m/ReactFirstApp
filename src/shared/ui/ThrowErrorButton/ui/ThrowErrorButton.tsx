import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./ThrowErrorButton.module.scss";
import {mdiAlertCircle} from "@mdi/js";
import Icon from "@mdi/react";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

interface ThrowErrorButtonProps {
    className?: string
}

//use this component for Test proposes !!!
export const ThrowErrorButton = ({className}: ThrowErrorButtonProps) => {
    const [error, setError] = useState(false);

    const onClick = () => {
        setError(true);
    }

    useEffect(() => {
        if (error) {
            throw new Error('Test Runtime Error: ThrowErrorButton clicked!')
        }
    }, [error])

    return (
        <button
            className={classNames(style['throw-error-button'], {}, [className])}
            onClick={onClick}
        >
            <Icon path={mdiAlertCircle} size={'24px'}/>
            Get Error!
        </button>
    );
};