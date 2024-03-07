import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { MediaCard } from "../MediaCardComponent/MediaCardComponent";
import s from "./GridComponent.module.scss";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
}));

const gridData = [
    {
        heading: "Тендерное сопровождение",
        btn1: "на аукцион",
        btn2: "на конкурс",
        descr: "Первая и вторая часть заявки на электронный аукцион. Гарантия допуска.",
        btn3: "Заказать подготовку заявки"
    },
    {
        heading: "Тендерное сопровождение",
        btn1: "на аукцион",
        btn2: "на конкурс",
        descr: "Первая и вторая часть заявки на электронный аукцион. Гарантия допуска.",
        btn3: "Заказать подготовку заявки"
    },
    {
        heading: "Тендерное сопровождение",
        btn1: "на аукцион",
        btn2: "на конкурс",
        descr: "Первая и вторая часть заявки на электронный аукцион. Гарантия допуска.",
        btn3: "Заказать подготовку заявки"
    },
    {
        heading: "Тендерное сопровождение",
        btn1: "на аукцион",
        btn2: "на конкурс",
        descr: "Первая и вторая часть заявки на электронный аукцион. Гарантия допуска.",
        btn3: "Заказать подготовку заявки"
    },
    {
        heading: "Тендерное сопровождение",
        btn1: "на аукцион",
        btn2: "на конкурс",
        descr: "Первая и вторая часть заявки на электронный аукцион. Гарантия допуска.",
        btn3: "Заказать подготовку заявки"
    },
    {
        heading: "Тендерное сопровождение",
        btn1: "на аукцион",
        btn2: "на конкурс",
        descr: "Первая и вторая часть заявки на электронный аукцион. Гарантия допуска.",
        btn3: "Заказать подготовку заявки"
    }
];
export const ResponsiveGrid = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {gridData.map((card, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item className={s.services_grid}>
                            <div>{card.heading}</div>
                            <div className={s.btn_wrapper}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        background: "#FF0000",
                                        width: "170px",
                                        height: "40px",
                                        color: "white",
                                        "&:hover": { background: "#42a5f5", color: "white" }
                                    }}
                                >
                                    {card.btn1}
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        background: "white",
                                        textAlign: "start",
                                        width: "170px",
                                        height: "40px",
                                        color: "#42a5f5",
                                        "&:hover": { background: "#42a5f5", color: "white" }
                                    }}
                                >
                                    {card.btn2}
                                </Button>
                            </div>
                            <div>{card.descr}</div>
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
                                {card.btn3}
                            </Button>
                            <a href="#">Узнать больше</a>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
