import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CardMedia from "@mui/material/CardMedia";
import mainPageSliderImg from "../../../assets/img/mainpage-slider3.jpg";
import { Container } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import s from "./SliderComponent.module.scss";
import { ModeType, setOpenClose, setMode } from "../../../store/tenderDataSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const steps = [
    {
        label: "San Francisco – Oakland Bay Bridge, United States",
        heading: "Побеждайте с нами",
        description:
            "Мы поможем выйти на рынок государственных и коммерческих заказов\n" +
            "Подберем тендер, подготовим документы, проведём торги"
    },
    {
        label: "Bird",
        heading: "Развивайте бизнес – тендер выиграем мы",
        description:
            "Увеличивайте обороты компании за счёт тендерных продаж\n" + "Для этого не нужен сайт, склад или офис"
    },
    {
        label: "Bali, Indonesia",
        heading: "Обучение тендерам с нуля",
        description:
            "Индивидуальное, полностью практическое очное и дистанционное обучение\n" +
            "За 2 дня практики научим участвовать в тендерах"
    }
];

export const SwipeableTextMobileStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const isOpen = useAppSelector((state) => state.tenderData.isOpen);
    const mode = useAppSelector((state) => state.tenderData.mode);
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const onSetBtnHandler = (value: ModeType) => {
        dispatch(
            setOpenClose({
                isOpen: !isOpen
            })
        );

        dispatch(
            setMode({
                mode: value
            })
        );
    };

    return (
        <Box className={s.box}>
            <CardMedia className={s.img} component="img" image={mainPageSliderImg} alt="" />
            <Container maxWidth="xl">
                <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {steps.map((el, i) => (
                        <div key={el.label} className={s.content_wrapper}>
                            <Box className={s.title_wrapper}>
                                <h1 className={s.title}>{steps[activeStep].heading}</h1>
                            </Box>
                            <Box className={s.subtitle_wrapper}>
                                <h2 className={s.subtitle}>{steps[activeStep].description}</h2>
                            </Box>
                            <div className={s.btn_wrapper}>
                                <Button
                                    className={s.content_btn}
                                    variant="outlined"
                                    sx={{
                                        background: "white",
                                        color: "#42a5f5",
                                        "&:hover": { background: "#42a5f5", color: "white" }
                                    }}
                                >
                                    Узнать подробнее
                                </Button>
                                <div className={s.hiddenBtn}>
                                    <Button
                                        className={s.btn}
                                        variant="contained"
                                        sx={{
                                            background: "#FF0000",
                                            color: "white",
                                            "&:hover": { background: "#42a5f5", color: "white" }
                                        }}
                                        onClick={() => onSetBtnHandler("toApplyApplication")}
                                    >
                                        Отправить заявку
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
            </Container>
            <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                className={s.stepper}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        {/*Next*/}
                        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        {/*Back*/}
                    </Button>
                }
            />
        </Box>
    );
};
