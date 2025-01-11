import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./ThrowErrorButton.module.scss";
import {mdiAlertCircle} from "@mdi/js";
import Icon from "@mdi/react";
import {useEffect, useState} from "react";
import {Button, ButtonProps, ButtonStyle} from "shared/ui/Button/Button";

interface ThrowErrorButtonProps extends ButtonProps {
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
        <Button
            className={classNames(style['throw-error-button'], {}, [className])}
            buttonStyle={ButtonStyle.ROUNDED}
            onClick={onClick}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Icon path={mdiAlertCircle} size={'24px'}/>
            Get Error!
        </Button>
    );
};