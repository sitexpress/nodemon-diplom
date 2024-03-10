import React, { useState } from "react";
import s from "./App.module.scss";
import { AppBarComponent } from "../common/components/AppBarComponent/AppBarComponent";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import SwipeableTextMobileStepper from "../common/components/SliderComponent/SliderComponent";
import { ResponsiveGrid } from "../common/components/GridComponent/GridComponent";
import { Footer } from "../common/components/Footer/Footer";
import { CustomizedTimeline } from "../common/components/Timeline/Timeline";
import { NestedModal } from "../common/components/Modal/Modal";
import { HorizontalLinearStepper } from "../common/components/HorizontalStepper/HorizontalStepper";
import { FlickingCarousel } from "../common/components/FlickingCarousel/FlickingCarousel";

export type ModeType = "toApplyGrid1" | "toApplyApplication" | "toApplyCall" | "";
function App() {
    const [open, setOpen] = useState<boolean>(false);
    const [mode, setMode] = useState<ModeType>("");
    const [btnData, setBtnData] = useState<string>("");

    return (
        <div className={s.app_container}>
            <NestedModal open={open} setOpen={setOpen} mode={mode} btnData={btnData} />
            <AppBarComponent setOpen={setOpen} setMode={setMode} />
            <SwipeableTextMobileStepper />
            <div className={s.grid1}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <div className={s.heading}>
                            <h2>Наши услуги</h2>
                        </div>
                        <div className={s.grid_content}>
                            <ResponsiveGrid
                                grid={"grid1"}
                                open={open}
                                setOpen={setOpen}
                                setMode={setMode}
                                setBtnData={setBtnData}
                            />
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
                            <ResponsiveGrid
                                grid={"grid3"}
                                open={open}
                                setOpen={setOpen}
                                setMode={setMode}
                                setBtnData={setBtnData}
                            />
                        </div>
                    </Box>
                </Container>
            </div>

            <div className={s.grid4}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <div className={s.heading}>
                            <h2>Примеры успешных проектов</h2>
                            <h4>Обучили с нуля работе с тендерами</h4>
                        </div>

                        <HorizontalLinearStepper />
                    </Box>
                </Container>
            </div>

            <div className={s.grid5}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <div className={s.heading}>
                            <h2>Нам доверяют ведущие компании</h2>
                            <h4>Наши клиенты - наша гордость.</h4>
                        </div>
                        <FlickingCarousel />
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
