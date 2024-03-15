import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import s from "./BurgerMenu.module.scss";
import logo from "../../../assets/icons/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

type CartAddedType = {
    openBurgerMenu: boolean;
    setOpenBurgerMenu: (value: boolean) => void;
};

export const BurgerMenu: React.FC<CartAddedType> = ({ openBurgerMenu, setOpenBurgerMenu, ...other }) => {
    const location = useLocation();
    const pathName = location.pathname;
    const mainMenuBurger = {
        home: () => {
            return pathName === "/" ? (
                <IconButton edge="start" color="inherit" aria-label="menu" className={s.appBar_burger_menu_active}>
                    <HomeIcon />
                </IconButton>
            ) : (
                <IconButton edge="start" color="inherit" aria-label="menu" className={s.appBar_burger_menu}>
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
        <div
            className={openBurgerMenu ? s.cart_opened_container : s.cart_closed_container}
            onClick={() => setOpenBurgerMenu(false)}
        >
            <div
                className={openBurgerMenu ? s.cart_opened_menu_wrapper : s.cart_closed_menu_wrapper}
                onClick={(event: any) => event.stopPropagation()}
            >
                <div className={s.cart_heading}>
                    {/*<h2>Корзина&nbsp;&nbsp;</h2>*/}
                    <CloseIcon onClick={() => setOpenBurgerMenu(false)} className={s.cart_close_btn} />

                    <div className={s.cart_menu_wrapper}>
                        <ul>
                            <li>
                                <img src={logo} alt="Лого" />
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    // className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    {/*<IconButton edge="start" color="inherit" aria-label="menu">*/}
                                    {/*    <HomeIcon />*/}
                                    {/*</IconButton>*/}
                                    {mainMenuBurger.home()}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/tender-support"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    {mainMenuBurger.tenderSupport()}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/courses"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    {mainMenuBurger.courses()}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/registration-eis"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    {mainMenuBurger.registrationEis()}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    {mainMenuBurger.services()}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/articles"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    {mainMenuBurger.articles()}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    {mainMenuBurger.about()}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contacts"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    {mainMenuBurger.contacts()}
                                </NavLink>
                            </li>

                            {/*<li>Тендерное сопровождение</li>*/}
                            {/*<li>Обучение тендерам</li>*/}
                            {/*<li>Регистрация в ЕИС</li>*/}
                            {/*<li>Услуги</li>*/}
                            {/*<li>База знаний</li>*/}
                            {/*<li>Компания</li>*/}
                            {/*<li>Контакты</li>*/}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
