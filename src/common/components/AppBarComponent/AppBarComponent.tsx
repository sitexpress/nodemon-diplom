import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import logo from "../../../assets/icons/logo.svg";
import s from "./AppBarComponent.module.scss";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { ModeType } from "../../../store/tenderDataSlice";

type AppBarComponentType = {
    setOpen: (value: boolean) => void;
    setMode: (value: ModeType) => void;
};
export const AppBarComponent: React.FC<AppBarComponentType> = ({ setOpen, setMode }) => {
    const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);
    const location = useLocation();
    const pathName = location.pathname;

    const onSetBtnHandler = (value: ModeType) => {
        setOpen(true);
        setMode(value);
    };

    const mainMenu = {
        home: () => {
            return pathName === "/" ? (
                <IconButton edge="start" aria-label="menu" className={s.icon}>
                    <HomeIcon />
                </IconButton>
            ) : (
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <HomeIcon />
                </IconButton>
            );
        },
        tenderSupport: () => {
            return pathName === "/tender-support" ? (
                <span className={s.active}>Тендерное сопровождение</span>
            ) : (
                <span>Тендерное сопровождение</span>
            );
        },
        courses: () => {
            return pathName === "/courses" ? (
                <span className={s.active}>Обучение тендерам</span>
            ) : (
                <span>Обучение тендерам</span>
            );
        },
        registrationEis: () => {
            return pathName === "/registration-eis" ? (
                <span className={s.active}>Регистрация в ЕИС</span>
            ) : (
                <span>Регистрация в ЕИС</span>
            );
        },
        services: () => {
            return pathName === "/services" ? <span className={s.active}>Услуги</span> : <span>Услуги</span>;
        },
        articles: () => {
            return pathName === "/articles" ? <span className={s.active}>База знаний</span> : <span>База знаний</span>;
        },
        about: () => {
            return pathName === "/about" ? <span className={s.active}>Компания</span> : <span>Компания</span>;
        },
        contacts: () => {
            return pathName === "/contacts" ? <span className={s.active}>Контакты</span> : <span>Контакты</span>;
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar variant="regular" className={s.header_wrapper}>
                        <div className={s.hamburger_wrapper}>
                            <IconButton
                                className={s.hamburger}
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setOpenBurgerMenu(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <BurgerMenu openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu} />
                        </div>
                        <div className={s.icon_logo}>
                            <div className={s.logo_wrapper}>
                                <img src={logo} alt="Лого" />
                                <span>ендер</span>
                            </div>
                            <div className={s.moto}>центр тендорного сопровождения</div>
                        </div>

                        <div className={s.header_info}>
                            <div className={s.contacts}>
                                <div className={s.phone_one}>
                                    <div>Тендерное сопровождение</div>
                                    <img src="" alt="" />
                                    <div>
                                        <a href="tel:+78009998877" className={s.link}>
                                            +7(800)9998877
                                        </a>
                                    </div>
                                </div>

                                <div className={s.phone_two}>
                                    <div>Банковские гарантии</div>
                                    <div>
                                        <a href="tel:+78009998877" className={s.link}>
                                            +7(495)9998877
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className={s.header_btn}>
                                <Button
                                    className={s.btn}
                                    variant="contained"
                                    sx={{
                                        background: "#FF0000",
                                        color: "white",
                                        "&:hover": { background: "#42a5f5", color: "white" }
                                    }}
                                    onClick={() => onSetBtnHandler("toApplyApplication")}
                                >
                                    Отправить заявку
                                </Button>
                                <Button
                                    className={s.btn}
                                    variant="outlined"
                                    sx={{
                                        background: "white",
                                        textAlign: "start",
                                        color: "#42a5f5",
                                        "&:hover": { background: "#42a5f5", color: "white" }
                                    }}
                                    onClick={() => onSetBtnHandler("toApplyCall")}
                                >
                                    Заказать звонок
                                </Button>
                            </div>
                        </div>
                    </Toolbar>
                    <div className={s.tbar}>
                        <Toolbar variant="regular" className={s.appBar_menu_wrapper}>
                            <NavLink to="/" className={s.appBar_menu}>
                                {mainMenu.home()}
                            </NavLink>
                            <NavLink to="/tender-support" className={s.appBar_menu}>
                                {mainMenu.tenderSupport()}
                            </NavLink>
                            <NavLink to="/courses" className={s.appBar_menu}>
                                {mainMenu.courses()}
                            </NavLink>
                            <NavLink to="/registration-eis" className={s.appBar_menu}>
                                {mainMenu.registrationEis()}
                            </NavLink>
                            <NavLink to="/services" className={s.appBar_menu}>
                                {mainMenu.services()}
                            </NavLink>
                            <NavLink to="/articles" className={s.appBar_menu}>
                                {mainMenu.articles()}
                            </NavLink>
                            <NavLink to="/about" className={s.appBar_menu}>
                                {mainMenu.about()}
                            </NavLink>
                            <NavLink to="/contacts" className={s.appBar_menu}>
                                {mainMenu.contacts()}
                            </NavLink>
                        </Toolbar>
                    </div>
                </Container>
            </AppBar>
        </Box>
    );
};
