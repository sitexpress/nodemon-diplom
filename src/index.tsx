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

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/tender-support",
        element: <TenderPage heading={"Тендерное сопровождение под ключ без риска или гарантии победы в тендерах"} />
    },
    {
        path: "/courses",
        element: <TenderPage heading={"Обучение тендерам и госзакупкам"} />
    },
    {
        path: "/registration-eis",
        element: <TenderPage heading={"Регистрация в ЕИС: пошаговая инструкция"} />
    },
    {
        path: "/services",
        element: <TenderPage heading={"Услуги"} />
    },
    {
        path: "/articles",
        element: <TenderPage heading={"Участие в электронном аукционе: пошаговая инструкция"} />
    },
    {
        path: "/about",
        element: <TenderPage heading={"О компании"} />
    },
    {
        path: "/contacts",
        element: <TenderPage heading={"Контакты"} />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
