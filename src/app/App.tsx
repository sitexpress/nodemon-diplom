import React from "react";
import s from "./App.module.scss";
import { AppBarComponent } from "../common/components/AppBarComponent/AppBarComponent";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import SwipeableTextMobileStepper from "../common/components/SliderComponent/SliderComponent";
import { ResponsiveGrid } from "../common/components/GridComponent/GridComponent";

function App() {
    return (
        <div className={s.app_container}>
            <AppBarComponent />
            <SwipeableTextMobileStepper />
            <Container maxWidth="xl">
                <Box className={s.box}>
                    <div>Наши услуги</div>
                    <ResponsiveGrid />
                </Box>
            </Container>
        </div>
    );
}

export default App;
