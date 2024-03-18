import React from "react";
import s from "./Footer.module.scss";
import Button from "@mui/material/Button";
export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className={s.container}>
            <div className={s.footer}>
                <div className={s.footer_wrap}>
                    <div className={s.footer_one}>
                        <div className={s.footer_study}>
                            <h4>ОБУЧЕНИЕ</h4>
                            <ul>
                                <li>Обучение тендерам с нуля</li>
                                <li>Обучение по 44-ФЗ</li>
                                <li>Обучение по 223-ФЗ</li>
                                <li>Официальный сайт закупок</li>
                                <li>Электронные площадки торгов</li>
                                <li>Как выиграть тендер</li>
                            </ul>
                        </div>
                        <div className={s.footer_service}>
                            <h4>УСЛУГИ</h4>
                            <ul>
                                <li>Регистрация в ЕИС</li>
                                <li>Срочная аккредитация за 1 час</li>
                                <li>Обучение тендерам и госзакупкам</li>
                                <li>Подготовка заявки на аукцион</li>
                                <li>Тендерное сопровождение</li>
                                <li>Поиск тендеров</li>
                                <li>Каталог услуг</li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.footer_two}>
                        <div className={s.footer_interesting}>
                            <h4>ИНТЕРЕСНО</h4>
                            <ul>
                                <li>44-ФЗ с комментариями</li>
                                <li>223-ФЗ с комментариями</li>
                                <li>Электронный аукцион</li>
                                <li>Открытый конкурс</li>
                                <li>Обеспечение заявки</li>
                                <li>Заключение контракта</li>
                            </ul>
                        </div>
                        <div className={s.footer_contacts}>
                            <h4>КОНТАКТЫ</h4>
                            <ul>
                                <li>
                                    <div>тендерная документация:</div>
                                    <div>+7 (495) 648-65-51</div>
                                </li>
                                <li>
                                    <div>банковские гарантии:</div>
                                    <div>+7 (495) 147-71-51</div>
                                </li>
                                <li>info@open-torg.ru</li>
                                <li>123000, Москва, Арбат 555</li>
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
                            textAlign: "start",
                            color: "#42a5f5",
                            "&:hover": { background: "#42a5f5", color: "white" }
                        }}
                        // onClick={() => onSetBtnHandler("toApplyCall")}
                    >
                        Заказать звонок
                    </Button>
                </div>
            </div>
        </div>
    );
};
