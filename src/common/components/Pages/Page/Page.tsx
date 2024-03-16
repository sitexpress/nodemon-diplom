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
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HandshakeIcon from "@mui/icons-material/Handshake";
import IconButton from "@mui/material/IconButton";
import GroupsIcon from "@mui/icons-material/Groups";

type TenderPageType = {
    heading: string;
    btnText: string;
    subtitle: string;
    bottomHeading: string;
};
export const Page: React.FC<TenderPageType> = ({ heading, btnText, subtitle, bottomHeading, ...other }) => {
    const [mode, setMode] = useState<ModeType>("");
    const [btnData, setBtnData] = useState<string>("");

    const isOpen = useAppSelector((state) => state.tenderData.isOpen);
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const pageData = [
        [
            {
                head: "Работает профессионал",
                subheader: "Работа напрямую со специалистом, который сам готовит заявки и проводит торги"
            },
            {
                head: "Максимально оперативно",
                subheader: "Получение услуг от 1 часа, помогаем, когда другие отказываются"
            },
            {
                head: "Экономия ресурсов",
                subheader: "Фокусируемся на тех тендерах, в которых есть шанс победить и заключить контракт"
            }
        ],
        [
            {
                head: "Индивидуально",
                subheader: "Фокусировка на видах тендеров в вашей отрасли"
            },
            {
                head: "Эксперт-практик",
                subheader: "Реальные работающие кейсы, богатый опыт на вашей стороне"
            },
            {
                head: "Поддержка после обучения",
                subheader: "Проверка заявок, исправление ошибок, консультации"
            }
        ],
        [
            {
                head: "Безошибочное оформление",
                subheader: "Документы подготавливаются строго в соответствии с требованиями ЕИС"
            },
            {
                head: "Без рисков отказа",
                subheader: "Вероятность отказа в аккредитации и пропуска тендера снижается до нуля"
            },
            {
                head: "Срочная регистрация",
                subheader: "Аккредитуем в срок от 1 часа до 1 суток, подавайте заявку уже завтра"
            }
        ],
        [
            {
                head: "Работает профессионал",
                subheader: "Любая помощь: от выпуска ЭЦП и аккредитации до подачи заявки и подписания контракта"
            },
            {
                head: "Все услуги в одном месте",
                subheader: "Работа напрямую со специалистом, который готовит заявки, документы и проводит торги"
            },
            {
                head: "Максимально оперативно",
                subheader: "Получение услуг под ключ от 1 часа - успешно помогаем, когда другие отказываются"
            }
        ]
    ];

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
            <section className={s.grid3}>
                <Container maxWidth="xl">
                    <Box sx={{ flexGrow: 1 }} className={s.box}>
                        <div className={s.heading}>
                            <h2>{bottomHeading}</h2>
                        </div>
                        <div className={s.subtitle}>
                            <p>{subtitle}</p>
                        </div>
                        {pathname === "/tender-support" ? (
                            <div className={s.bottom_moto_list}>
                                <div className={s.moto}>
                                    <IconButton color="primary" aria-label="tender">
                                        <AdminPanelSettingsIcon className={s.icon_group} />
                                    </IconButton>
                                    <h4>{pageData[0][0].head}</h4>
                                    <p>{pageData[0][0].subheader}</p>
                                </div>
                                <div className={s.moto}>
                                    <IconButton color="primary" aria-label="tender">
                                        <FactCheckIcon className={s.icon_group} />
                                    </IconButton>
                                    <h4>{pageData[0][1].head}</h4>
                                    <p>{pageData[0][1].subheader}</p>
                                </div>
                                <div className={s.moto}>
                                    <IconButton color="primary" aria-label="tender">
                                        <HandshakeIcon className={s.icon_group} />
                                    </IconButton>
                                    <h4>{pageData[0][2].head}</h4>
                                    <p>{pageData[0][2].subheader}</p>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}

                        {btnText !== "" && (
                            <Button className={s.btn} variant={"contained"} onClick={() => onApplyHandler(btnText)}>
                                {btnText}
                            </Button>
                        )}
                    </Box>
                </Container>
            </section>
            <section className={s.footer_wrapper}>
                <Footer />
            </section>
            <PopUpBtn />
        </div>
    );
};
