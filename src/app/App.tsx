import React, { useState } from "react";
import s from "./App.module.scss";
import { AppBarComponent } from "../common/components/AppBarComponent/AppBarComponent";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { ResponsiveGrid } from "../common/components/GridComponent/GridComponent";
import { Footer } from "../common/components/Footer/Footer";
import { CustomizedTimeline } from "../common/components/Timeline/Timeline";
import { NestedModal } from "../common/components/Modal/Modal";
import { HorizontalLinearStepper } from "../common/components/HorizontalStepper/HorizontalStepper";
import { FlickingCarousel } from "../common/components/FlickingCarousel/FlickingCarousel";
import { ModeType, setChatOpenClose, setOpenClose } from "../store/tenderDataSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import PopUpBtn from "../common/components/PopUpBtn/PopUpBtn";
import { ScrollToTop } from "../utils/ScrollToTop";
import { SwipeableTextMobileStepper } from "../common/components/SliderComponent/SliderComponent";

function App() {
    const [btnData, setBtnData] = useState<string>("");
    const isOpen = useAppSelector((state) => state.tenderData.isOpen);
    const dispatch = useAppDispatch();

    const handleСlose = () => {
        dispatch(
            setOpenClose({
                isOpen: !isOpen
            })
        );
    };

    React.useEffect(() => {
        ScrollToTop.instant();
        return () => ScrollToTop.instant();
    }, []);

    return (
        <div className={s.app_container}>
            <NestedModal btnData={btnData} />
            <AppBarComponent />
            <SwipeableTextMobileStepper />
            <section className={s.grid1}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <div className={s.heading}>
                            <h2>Наши услуги</h2>
                        </div>
                        <div className={s.grid_content}>
                            <ResponsiveGrid grid={"grid1"} setBtnData={setBtnData} />
                        </div>
                    </Box>
                </Container>
            </section>

            <section className={s.grid2}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <div className={s.heading}>
                            <h2>Наш подход к работе</h2>
                        </div>
                        <CustomizedTimeline />
                    </Box>
                </Container>
            </section>

            <section className={s.grid3}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <div className={s.heading}>
                            <h2>Тендерное сопровождение без риска</h2>
                        </div>
                        <div className={s.grid_content}>
                            <ResponsiveGrid grid={"grid3"} setBtnData={setBtnData} />
                        </div>
                    </Box>
                </Container>
            </section>

            <section className={s.grid4}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <div className={s.heading}>
                            <h2>Примеры успешных проектов</h2>
                            <h4>Обучили с нуля работе с тендерами</h4>
                        </div>

                        <HorizontalLinearStepper />
                    </Box>
                </Container>
            </section>

            <section className={s.grid5}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <div className={s.heading}>
                            <h2>Нам доверяют ведущие компании</h2>
                            <h4>Наши клиенты - наша гордость.</h4>
                        </div>
                        <FlickingCarousel type={"partners"} />
                    </Box>
                </Container>
            </section>

            <section className={s.grid6}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <div className={s.heading}>
                            <h2>Отзывы о нашей работе</h2>
                        </div>
                        <FlickingCarousel type={"reviews"} />
                    </Box>
                </Container>
            </section>

            <section className={s.footer_wrapper}>
                <Container maxWidth="xl">
                    <Box className={s.box}>
                        <Footer />
                    </Box>
                </Container>
            </section>
            <PopUpBtn />
        </div>
    );
}

export default App;
