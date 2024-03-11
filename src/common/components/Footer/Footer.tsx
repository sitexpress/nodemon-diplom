import React from "react";

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return <p>© {year} центр тендерного сопровождения Тендер. Все права защищены. </p>;
};
