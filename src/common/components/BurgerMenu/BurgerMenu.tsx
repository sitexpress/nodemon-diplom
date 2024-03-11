import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import s from "./BurgerMenu.module.scss";
import logo from "../../../assets/icons/logo.svg";

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
                            <img src={logo} alt="Лого" />
                            <li>Тендерное сопровождение</li>
                            <li>Обучение тендерам</li>
                            <li>Регистрация в ЕИС</li>
                            <li>Услуги</li>
                            <li>База знаний</li>
                            <li>Компания</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
