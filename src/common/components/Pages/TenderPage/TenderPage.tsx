import React from "react";
import s from "../Page/Page.module.scss";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const TenderPage = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }} className={s.box}>
                <div className={s.heading}>
                    <h3>TenderPage</h3>
                </div>
                <div className={s.subtitle}>
                    <p>TenderPage TenderPage TenderPage</p>
                </div>
            </Box>
        </Container>
    );
};
