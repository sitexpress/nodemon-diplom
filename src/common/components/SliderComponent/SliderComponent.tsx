// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import mainPageSliderImg from "../../../assets/img/mainpage-slider3.jpg";
// import s from "./SliderComponent.module.scss";
// import { Container } from "@mui/material";
//
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
//
// const data = [
//     {
//         label: "San Francisco – Oakland Bay Bridge, United States",
//         imgPath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
//         heading: "Побеждайте с нами",
//         description:
//             "Мы поможем выйти на рынок государственных и коммерческих заказов\n" +
//             "Подберем тендер, подготовим документы, проведём торги"
//     },
//     {
//         label: "Bird",
//         imgPath: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
//         heading: "Развивайте бизнес – тендер выиграем мы",
//         description:
//             "Увеличивайте обороты компании за счёт тендерных продаж\n" + "Для этого не нужен сайт, склад или офис"
//     },
//     {
//         label: "Bali, Indonesia",
//         imgPath: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
//         heading: "Обучение тендерам с нуля",
//         description:
//             "Индивидуальное, полностью практическое очное и дистанционное обучение\n" +
//             "За 2 дня практики научим участвовать в тендерах"
//     }
// ];
//
// function SwipeableTextMobileStepper() {
//     const theme = useTheme();
//     const [activeStep, setActiveStep] = React.useState(0);
//     const maxSteps = data.length;
//
//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };
//
//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };
//
//     const handleStepChange = (step: number) => {
//         setActiveStep(step);
//     };
//
//     return (
//         <Box className={s.box}>
//             {/*<CardMedia className={s.img} component="img" height="500" image={mainPageSliderImg} alt="" />*/}
//
//             <AutoPlaySwipeableViews
//                 axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//                 index={activeStep}
//                 onChangeIndex={handleStepChange}
//                 enableMouseEvents
//             >
//                 <Container maxWidth="xl">
//                     {/*<Typography>{data[activeStep].label}</Typography>*/}
//                     {/*<div className={s.content}>{data[activeStep].heading}</div>*/}
//                     {/*<div className={s.content}>{data[activeStep].description}</div>*/}
//                     {data.map((step, index) => (
//                         <div key={step.label}>
//                             {Math.abs(activeStep - index) <= 2 ? (
//                                 <Box>
//                                     <div className={s.content}>{step.heading}</div>
//                                     <div className={s.content}>{step.description}</div>
//                                     {data[activeStep].label}
//                                 </Box>
//                             ) : null}
//                         </div>
//                     ))}
//                 </Container>
//             </AutoPlaySwipeableViews>
//             <MobileStepper
//                 className={s.stepper}
//                 steps={maxSteps}
//                 position="static"
//                 activeStep={activeStep}
//                 nextButton={
//                     <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
//                         Вперед
//                         {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//                     </Button>
//                 }
//                 backButton={
//                     <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//                         {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//                         Назад
//                     </Button>
//                 }
//             />
//         </Box>
//     );
// }

// export default SwipeableTextMobileStepper;

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

export default function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
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

    return (
        <Box className={s.box}>
            <CardMedia className={s.img} component="img" height="500" image={mainPageSliderImg} alt="" />
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
                            <Button
                                variant="outlined"
                                sx={{
                                    background: "white",
                                    mt: 3,
                                    width: "200px",
                                    height: "50px",
                                    color: "#42a5f5",
                                    "&:hover": { background: "#42a5f5", color: "white" }
                                }}
                            >
                                Узнать подробнее
                            </Button>
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
                        Next
                        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}
