import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import s from "../Page/Page.module.scss";
import { ScrollToTop } from "../../../../utils/ScrollToTop";

export const ArticlesPage = () => {
    React.useEffect(() => {
        ScrollToTop.instant();
        return () => ScrollToTop.instant();
    }, []);
    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }} className={s.box}>
                <div className={s.heading}>
                    <h3>ArticlesPage</h3>
                </div>
                <div className={s.subtitle}>
                    <p>ArticlesPage ArticlesPage ArticlesPage</p>
                </div>
            </Box>
        </Container>
    );
};
