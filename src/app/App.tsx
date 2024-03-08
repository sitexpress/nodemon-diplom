import React from "react";
import s from "./App.module.scss";
import { AppBarComponent } from "../common/components/AppBarComponent/AppBarComponent";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import SwipeableTextMobileStepper from "../common/components/SliderComponent/SliderComponent";
import { ResponsiveGrid } from "../common/components/GridComponent/GridComponent";
import { Footer } from "../common/components/Footer/Footer";
import { CustomizedTimeline } from "../common/components/Timeline/Timeline";

function App() {
    return (
        <div className={s.app_container}>
            <AppBarComponent />
            <SwipeableTextMobileStepper />
            <div className={s.grid1}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <div className={s.heading}>
                            <h2>Наши услуги</h2>
                        </div>
                        <div className={s.grid_content}>
                            <ResponsiveGrid grid={"grid1"} />
                        </div>
                    </Box>
                </Container>
            </div>

            <div className={s.grid2}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <div className={s.heading}>
                            <h2>Наш подход к работе</h2>
                        </div>
                        <CustomizedTimeline />
                    </Box>
                </Container>
            </div>

            <div className={s.grid3}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <div className={s.heading}>
                            <h2>Тендерное сопровождение без риска</h2>
                        </div>
                        <div className={s.grid_content}>
                            <ResponsiveGrid grid={"grid3"} />
                        </div>
                    </Box>
                </Container>
            </div>

            <div className={s.footer_wrapper}>
                <Footer />
            </div>
        </div>
    );
}

export default App;
