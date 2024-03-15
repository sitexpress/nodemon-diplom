import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import s from "../Page/Page.module.scss";

export const CoursesPage = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }} className={s.box}>
                <div className={s.heading}>
                    <h3>Courses</h3>
                </div>
                <div className={s.subtitle}>
                    <p>Courses Courses Courses</p>
                </div>
            </Box>
        </Container>
    );
};
