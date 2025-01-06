import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./RuntimeError.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonStyle} from "shared/ui/Button/Button";
import {mdiReload} from "@mdi/js";
import Icon from "@mdi/react";

interface RuntimeErrorProps {
    className?: string
}

export const RuntimeError = ({className}: RuntimeErrorProps) => {
    const {t} = useTranslation();
    const onClick = () => {
        location.reload();
    }
    return (
        <div className={classNames(style['runtime-error'], {}, [className])}>
            <span>{t('RuntimeError')}</span>
            <Button
                buttonStyle={ButtonStyle.DEFAULT}
                onClick={onClick}
            >
                <Icon path={mdiReload} size={'24px'}/>
                {t('ReloadPage')}
            </Button>
        </div>
    );
};