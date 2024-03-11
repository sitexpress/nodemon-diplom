import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import s from "./BurgerMenu.module.scss";
import logo from "../../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

type CartAddedType = {
    openBurgerMenu: boolean;
    setOpenBurgerMenu: (value: boolean) => void;
};

export const BurgerMenu: React.FC<CartAddedType> = ({ openBurgerMenu, setOpenBurgerMenu, ...other }) => {
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
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    <IconButton edge="start" color="inherit" aria-label="menu">
                                        <HomeIcon />
                                    </IconButton>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/tender-support"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    Тендерное сопровождение
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/courses"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    Обучение тендерам
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/registration-eis"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    Регистрация в ЕИС
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    Услуги
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/articles"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    База знаний
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    Компания
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contacts"
                                    className={s.appBar_burger_menu}
                                    onClick={() => setOpenBurgerMenu(false)}
                                >
                                    Контакты
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
