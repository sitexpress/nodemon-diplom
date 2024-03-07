import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./app/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./common/components/ErrorPage/ErrorPage";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    }
    // {
    //     path: "/search-result-page",
    //     element: <SearchingResultPage />
    // },
    // {
    //     path: "/book-details-page",
    //     element: <BookDetails />
    // }
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
