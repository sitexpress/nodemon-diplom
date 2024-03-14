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
import { TenderPage } from "./common/components/Pages/TenderPage/TenderPage";
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
            <TenderPage
                heading={"Тендерное сопровождение под ключ без риска или гарантии победы в тендерах"}
                btnText={"КОНСУЛЬТАЦИЯ ПО СОПРОВОЖДЕНИЮ ТЕНДЕРОВ"}
            />
        )
    },
    {
        path: "/courses",
        element: (
            <TenderPage heading={"Обучение тендерам и госзакупкам"} btnText={"ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ ПО ОБУЧЕНИЮ"} />
        )
    },
    {
        path: "/registration-eis",
        element: (
            <TenderPage heading={"Регистрация в ЕИС: пошаговая инструкция"} btnText={"ЗАКАЗАТЬ РЕГИСТРАЦИЮ В ЕИС"} />
        )
    },
    {
        path: "/services",
        element: <TenderPage heading={"Услуги"} btnText={""} />
    },
    {
        path: "/articles",
        element: (
            <TenderPage heading={"Участие в электронном аукционе: пошаговая инструкция"} btnText={"Читать статью"} />
        )
    },
    {
        path: "/about",
        element: <TenderPage heading={"О компании"} btnText={""} />
    },
    {
        path: "/contacts",
        element: <TenderPage heading={"Контакты"} btnText={""} />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
