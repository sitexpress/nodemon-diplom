import React, { useState } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import s from "./Services.module.scss";
import { ScrollToTop } from "../../../../utils/ScrollToTop";
import { ResponsiveGrid } from "../../GridComponent/GridComponent";

export const ServicesPage = () => {
    const [btnData, setBtnData] = useState<string>("");

    React.useEffect(() => {
        ScrollToTop.instant();
        return () => ScrollToTop.instant();
    }, []);

    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }} className={s.box}>
                <div className={s.heading}>
                    <h4>Услуги</h4>
                </div>
                <div className={s.subtitle}>
                    <ResponsiveGrid grid={"grid1"} setBtnData={setBtnData} />
                </div>
            </Box>
        </Container>
    );
};
