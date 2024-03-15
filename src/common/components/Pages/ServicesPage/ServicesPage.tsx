import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import s from "../Page/Page.module.scss";

export const ServicesPage = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }} className={s.box}>
                <div className={s.heading}>
                    <h3>ServicesPage</h3>
                </div>
                <div className={s.subtitle}>
                    <p>ServicesPage ServicesPage ServicesPage</p>
                </div>
            </Box>
        </Container>
    );
};
