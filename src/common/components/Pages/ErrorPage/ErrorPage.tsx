import React from "react";
import errorPageIcon from "../../../../assets/icons/page-not-found1.svg";
import s from "./ErrorPage.module.scss";
import { ScrollToTop } from "../../../../utils/ScrollToTop";

export const ErrorPage = () => {
    React.useEffect(() => {
        ScrollToTop.instant();
        return () => ScrollToTop.instant();
    }, []);
    return (
        <div className={s.error_wrapper}>
            <img src={errorPageIcon} alt="404" />
            <div>
                <h3>Что-то пошло не так...</h3>
            </div>
        </div>
    );
};
