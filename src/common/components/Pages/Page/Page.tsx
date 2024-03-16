import React, { useState } from "react";
import { AppBarComponent } from "../../AppBarComponent/AppBarComponent";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import s from "./Page.module.scss";
import Button from "@mui/material/Button";
import { ModeType, setOpenClose } from "../../../../store/tenderDataSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { NestedModal } from "../../Modal/Modal";
import PopUpBtn from "../../PopUpBtn/PopUpBtn";
import { useLocation } from "react-router-dom";
import { TenderPage } from "../TenderPage/TenderPage";
import { CoursesPage } from "../CoursesPage/CoursesPage";
import { RegistrationEisPage } from "../RegistrationEisPage/RegistrationEisPage";
import { ServicesPage } from "../ServicesPage/ServicesPage";
import { ArticlesPage } from "../ArticlesPage/ArticlesPage";
import { AboutPage } from "../AboutPage/AboutPage";
import { ContactPage } from "../ContactsPage/ContactPage";
import { Footer } from "../../Footer/Footer";

type TenderPageType = {
    heading: string;
    btnText: string;
    subtitle: string;
};
export const Page: React.FC<TenderPageType> = ({ heading, btnText, subtitle, ...other }) => {
    const [mode, setMode] = useState<ModeType>("");
    const [btnData, setBtnData] = useState<string>("");

    const isOpen = useAppSelector((state) => state.tenderData.isOpen);
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const currentPage = () =>
        pathname === "/tender-support" ? (
            <TenderPage />
        ) : pathname === "/courses" ? (
            <CoursesPage />
        ) : pathname === "/registration-eis" ? (
            <RegistrationEisPage />
        ) : pathname === "/services" ? (
            <ServicesPage />
        ) : pathname === "/articles" ? (
            <ArticlesPage />
        ) : pathname === "/about" ? (
            <AboutPage />
        ) : (
            pathname === "/contacts" && <ContactPage />
        );

    const onApplyHandler = (btnData: string) => {
        dispatch(
            setOpenClose({
                isOpen: !isOpen
            })
        );
        setMode("toApplyGrid1");
        setBtnData(btnData);
    };

    const handleСlose = () => {
        dispatch(
            setOpenClose({
                isOpen: !isOpen
            })
        );
    };

    return (
        <div className={s.tenderContainer}>
            <NestedModal isOpen={isOpen} mode={mode} btnData={btnData} />
            <AppBarComponent setOpen={handleСlose} setMode={setMode} />
            <section className={s.grid1}>
                <Container maxWidth="xl">
                    <Box sx={{ flexGrow: 1 }} className={s.box}>
                        <div className={s.heading}>
                            <h2>{heading}</h2>
                        </div>
                        <div className={s.subtitle}>
                            <p>{subtitle}</p>
                        </div>
                        {btnText !== "" && (
                            <Button className={s.btn} variant={"contained"} onClick={() => onApplyHandler(btnText)}>
                                {btnText}
                            </Button>
                        )}
                    </Box>
                </Container>
            </section>
            <section className={s.grid2}>{currentPage()}</section>
            <section className={s.footer_wrapper}>
                <Footer />
            </section>
            <PopUpBtn />
        </div>
    );
};
