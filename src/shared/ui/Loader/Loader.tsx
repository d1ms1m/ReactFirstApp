import {classNames} from "shared/lib/ClassNames/classNames";
import "./Loader.scss";

interface LoaderProps {
    className?: string
}

export const Loader = ({className}: LoaderProps) => {
    return (
        <div className={classNames("lds-ring", {}, [className])}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};