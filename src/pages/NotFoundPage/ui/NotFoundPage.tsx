import {classNames} from "shared/lib/ClassNames/classNames";
import style from "./NotFoundPage.module.scss";
import {useTranslation} from "react-i18next";
import Icon from "@mdi/react";
import {mdiNoteSearchOutline} from "@mdi/js";

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(style['not-found-page'], {}, [className])}>
            <Icon path={mdiNoteSearchOutline} size={'64px'}/>
            {t('PageNotFound')}
        </div>
    );
};