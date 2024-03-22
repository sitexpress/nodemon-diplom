import React from "react";
import s from "./Footer.module.scss";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { ModeType, setMode, setOpenClose } from "../../../store/tenderDataSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

export const Footer = () => {
    const isOpen = useAppSelector((state) => state.tenderData.isOpen);
    const dispatch = useAppDispatch();
    const date = new Date();
    const year = date.getFullYear();

    const onSetBtnHandler = () => {
        dispatch(
            setOpenClose({
                isOpen: !isOpen
            })
        );
        dispatch(
            setMode({
                mode: "toApplyCall"
            })
        );
    };

    return (
        <div className={s.container}>
            <div className={s.footer}>
                <div className={s.footer_wrap}>
                    <div className={s.footer_one}>
                        <div className={s.footer_study}>
                            <h4>ОБУЧЕНИЕ</h4>
                            <ul>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Обучение тендерам с нуля
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Обучение по 44-ФЗ
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Обучение по 223-ФЗ
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Официальный сайт закупок
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Электронные площадки торгов
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Как выиграть тендер
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={s.footer_service}>
                            <h4>УСЛУГИ</h4>
                            <ul>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Регистрация в ЕИС
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Срочная аккредитация за 1 час
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Обучение тендерам и госзакупкам
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Подготовка заявки на аукцион
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Тендерное сопровождение
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Поиск тендеров
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Каталог услуг
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.footer_two}>
                        <div className={s.footer_interesting}>
                            <h4>ИНТЕРЕСНО</h4>
                            <ul>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        44-ФЗ с комментариями
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        223-ФЗ с комментариями
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Электронный аукцион
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Открытый конкурс
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Обеспечение заявки
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={s.footer_link} to="/services">
                                        Заключение контракта
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={s.footer_contacts}>
                            <h4>КОНТАКТЫ</h4>
                            <ul>
                                <li>
                                    <div>тендерная документация:</div>
                                    <div>
                                        <a className={s.footer_link} href="tel:+74956486551">
                                            +7 (495) 648-65-51
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div>банковские гарантии:</div>
                                    <div>
                                        <a className={s.footer_link} href="tel:+74951477151">
                                            +7 (495) 147-71-51
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a className={s.footer_link} href="mailto: info@open-torg.ru">
                                        info@open-torg.ru
                                    </a>
                                </li>
                                <li className={s.footer_link}>123000, Москва, Арбат 555</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.footer_bottom}>
                <div> © {year} центр тендерного сопровождения Тендер. Все права защищены.</div>
                <div>
                    {" "}
                    <Button
                        className={s.btn}
                        variant="outlined"
                        sx={{
                            background: "white",
                            color: "#42a5f5",
                            "&:hover": { background: "#42a5f5", color: "white" }
                        }}
                        onClick={onSetBtnHandler}
                    >
                        Заказать звонок
                    </Button>
                </div>
            </div>
        </div>
    );
};
