import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import s from "../Page/Page.module.scss";

export const RegistrationEisPage = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }} className={s.box}>
                <div className={s.heading}>
                    <h3>RegistrationEisPage</h3>
                </div>
                <div className={s.subtitle}>
                    <p>RegistrationEisPage RegistrationEisPage RegistrationEisPage</p>
                </div>
            </Box>
        </Container>
    );
};
