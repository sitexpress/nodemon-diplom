import React from "react";

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return <p>© {year} Тендер</p>;
};
