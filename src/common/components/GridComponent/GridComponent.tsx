import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { MediaCard } from "../MediaCardComponent/MediaCardComponent";
import s from "./GridComponent.module.scss";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ModeType } from "../../../app/App";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
}));

const grid1Data = [
    {
        heading: "Подготовка заявки на тендер",
        btn1: "на аукцион",
        btn2: "на конкурс",
        descr: "Первая и вторая часть заявки на электронный аукцион. Гарантия допуска.",
        btn3: "Заказать подготовку заявки"
    },
    {
        heading: "Тендерное сопровождение",
        btn1: "1 тендер",
        btn2: "10 тендеров",
        descr: "Быстро и качественно подготовим документы, проконсультируем. Без сюрпризов и осечек.",
        btn3: "Заказать сопровождение тендеров"
    },
    {
        heading: "Регистрация в ЕИС",
        btn1: "за 5 дней",
        btn2: "за 1 сутки",
        descr: "Аккредитация на 8 федеральных торговых площадках по 44-ФЗ. Без отклонений.",
        btn3: "Заказать регистрацию в ЕИС"
    },
    {
        heading: "Банковская гарантия",
        btn1: "по 44-ФЗ",
        btn2: "по 223-ФЗ",
        descr: "Для ООО и ИП, без залога и поручительства с внесением в реестр. Без комиссии.",
        btn3: "Получить банковскую гарантию"
    },
    {
        heading: "Обучение тендерам с нуля",
        btn1: "индивидуальное",
        btn2: "групповое",
        descr: "Индивидуально, фокусировка на вашей отрасли. Практические занятия.",
        btn3: "Заказать обучение тендерам"
    },
    {
        heading: "Кредитование бизнеса",
        btn1: "инвестиционный",
        btn2: "на контракт",
        descr: "Кредиты, гарантии, лизинг и факторинг – подберем оптимальное решение для задач.",
        btn3: "Оставить заявку на кредит"
    }
];

const grid3Data = [
    {
        heading: "Подготовка",
        descr1: "Выпустим электронную подпись",
        descr2: "Аккредитуем на площадках",
        descr3: "Отладим взаимодействие"
    },
    {
        heading: "Участие",
        descr1: "Подберем тендеры",
        descr2: "Подготовим документы",
        descr3: "Поучаствуем в торгах"
    },
    {
        heading: "Поддержка",
        descr1: "Оформим банковскую гарантию",
        descr2: "Обжалуем нарушения",
        descr3: "Проконсультируем"
    }
];

type GridType = {
    grid: "grid1" | "grid3";
    open: boolean;
    setOpen: (value: boolean) => void;
    setMode: (value: ModeType) => void;
    setBtnData: (value: string) => void;
};
export const ResponsiveGrid: React.FC<GridType> = ({ grid, open, setOpen, setMode, setBtnData, ...other }) => {
    const onApplyHandler = (btnData: string) => {
        setOpen(true);
        setMode("toApplyGrid1");
        setBtnData(btnData);
    };
    return (
        <>
            {grid === "grid1" ? (
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 12 }}
                        sx={{ justifyContent: "center" }}
                    >
                        {grid1Data.map((card, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Item className={s.services_grid1} elevation={3}>
                                    <h4>{card.heading}</h4>
                                    <div className={s.btn_wrapper}>
                                        <Button
                                            className={s.btn1}
                                            variant="contained"
                                            sx={{
                                                background: "#FF0000",
                                                color: "white",
                                                "&:hover": { background: "#42a5f5", color: "white" }
                                            }}
                                        >
                                            {card.btn1}
                                        </Button>
                                        <Button
                                            className={s.btn2}
                                            variant="outlined"
                                            sx={{
                                                background: "white",
                                                textAlign: "start",
                                                color: "#42a5f5",
                                                "&:hover": { background: "#42a5f5", color: "white" }
                                            }}
                                        >
                                            {card.btn2}
                                        </Button>
                                    </div>
                                    <p className={s.descr}>{card.descr}</p>
                                    <Button
                                        className={s.btn3}
                                        variant="outlined"
                                        sx={{
                                            background: "white",
                                            mt: 3,
                                            color: "#42a5f5",
                                            "&:hover": { background: "#42a5f5", color: "white" }
                                        }}
                                        onClick={() => onApplyHandler(card.btn3)}
                                    >
                                        {card.btn3}
                                    </Button>
                                    <a href="#">Узнать больше</a>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ) : (
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 1, sm: 8, md: 12, lg: 12 }}
                        style={{ justifyContent: "center" }}
                        className={s.grid3_wrapper}
                    >
                        {grid3Data.map((card, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Item className={s.services_grid3} elevation={3}>
                                    <h3 className={s.heading}>{card.heading}</h3>
                                    <hr />
                                    <div>
                                        <ul className={s.services_grid3_content}>
                                            <li className={s.gc_li}>
                                                <div>
                                                    <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                                </div>
                                                <div className={s.descr}>{card.descr1}</div>
                                            </li>
                                            <li className={s.gc_li}>
                                                <div>
                                                    <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                                </div>
                                                <div className={s.descr}>{card.descr2}</div>
                                            </li>
                                            <li className={s.gc_li}>
                                                <div>
                                                    <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                                </div>
                                                <div className={s.descr}>{card.descr3}</div>
                                            </li>
                                        </ul>
                                    </div>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </>
    );
};
