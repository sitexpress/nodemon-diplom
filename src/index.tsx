import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./app/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./common/components/Pages/ErrorPage/ErrorPage";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.scss";
import { Page } from "./common/components/Pages/Page/Page";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/tender-support",
        element: (
            <Page
                heading={"Тендерное сопровождение под ключ без риска или гарантии победы в тендерах"}
                subtitle={
                    "Как быть уверенным в победе? Опытные специалисты по тендерному сопровождению могут сделать расчеты и определить насколько велика вероятность стать победителем. Наша команда предлагает свой подход, который действительно работает."
                }
                btnText={"КОНСУЛЬТАЦИЯ ПО СОПРОВОЖДЕНИЮ ТЕНДЕРОВ"}
                bottomHeading={"Тендерное сопровождение под ключ"}
            />
        )
    },
    {
        path: "/courses",
        element: (
            <Page
                heading={"Обучение тендерам и госзакупкам"}
                subtitle={
                    "Обучение тендерам и госзакупкам для государственных, коммерческих организаций и предпринимателей, желающих познакомиться поближе с 44-ФЗ и 223-ФЗ, получить эффективные работающие инструменты и начать выигрывать тендеры. Обучение тендерам проходит в Москве или дистанционно по России."
                }
                btnText={"ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ ПО ОБУЧЕНИЮ"}
                bottomHeading={"Обучение тендерам с нуля"}
            />
        )
    },
    {
        path: "/registration-eis",
        element: (
            <Page
                heading={"Регистрация в ЕИС: пошаговая инструкция"}
                subtitle={
                    "Как пройти регистрацию в ЕИС поставщику. Последние изменения и требования, пошаговая инструкция 2022 года."
                }
                btnText={"ЗАКАЗАТЬ РЕГИСТРАЦИЮ В ЕИС"}
                bottomHeading={"Регистрация в ЕИС у нас"}
            />
        )
    },
    {
        path: "/services",
        element: (
            <Page
                heading={"Услуги"}
                subtitle={"Поможем, сделаем, научим"}
                btnText={"ОТПРАВИТЬ ЗАЯВКУ НА УСЛУГИ"}
                bottomHeading={"Поможем, сделаем, научим"}
            />
        )
    },
    {
        path: "/articles",
        element: (
            <Page
                heading={"Участие в электронном аукционе: пошаговая инструкция"}
                subtitle={
                    "Если вы решили принять участие в электронном аукционе: выполнить работы, оказать услуги или поставить товар для государственного заказчика, ознакомьтесь с 44-ФЗ. Публикуем пошаговую инструкцию по участию в электронных торгах из 10 шагов: от получения ЭЦП и аккредитации на площадке, до подачи заявки и подписания контракта."
                }
                btnText={""}
                bottomHeading={"Актуальные статьи на почту"}
            />
        )
    },
    {
        path: "/about",
        element: (
            <Page
                heading={"О компании"}
                subtitle={
                    "“Тендер” – одна из ведущих компаний России, специализирующихся на тендерном сопровождении.\n" +
                    "\n" +
                    "Мы открываем новые возможности для реализации товаров, работ и услуг для российского и международного бизнеса.\n" +
                    "\n" +
                    "К нам обращаются компании, как без опыта участия в тендерах, так и имеющие развитые тендерные отделы.\n" +
                    "\n" +
                    "Помогаем решить конкретные задачи здесь и сейчас, а также сформировать видение на будущее, сэкономить время и ресурсы."
                }
                btnText={"НАШИ КОНТАКТЫ"}
                bottomHeading={""}
            />
        )
    },
    {
        path: "/contacts",
        element: <Page heading={"Контакты"} subtitle={""} btnText={"ОТПРАВИТЬ ЗАЯВКУ НА УСЛУГИ"} bottomHeading={""} />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <div>
            <RouterProvider router={router} />
        </div>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
