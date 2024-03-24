import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import s from "./GridComponent.module.scss";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import { ModeType, setMode, setOpenClose } from "../../../store/tenderDataSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Card from "@mui/material/Card";
import article from "../../../assets/img/article.webp";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
}));

type GridType = {
    grid: "grid1" | "grid2" | "grid3";
    setBtnData: (value: string) => void;
};
export const ResponsiveGrid: React.FC<GridType> = ({ grid, setBtnData, ...other }) => {
    const [grid1Data, setGrid1Data] = useState([
        {
            heading: "Подготовка заявки на тендер",
            btn1: "на аукцион",
            btn2: "на конкурс",
            descrLeft: "Первая и вторая часть заявки на электронный аукцион. Гарантия допуска.",
            descrRight: "В электронной форме или в конвертах. Любые отрасли, заказчики, сложность и скорость.",
            btn3: "Заказать подготовку заявки",
            left: true,
            right: false
        },
        {
            heading: "Тендерное сопровождение",
            btn1: "1 тендер",
            btn2: "10 тендеров",
            descrLeft: "Быстро и качественно подготовим документы, проконсультируем. Без сюрпризов и осечек.",
            descrRight: "Заменим тендерный отдел. Качественнее и дешевле штатного специалиста.",
            btn3: "Заказать сопровождение тендеров",
            left: true,
            right: false
        },
        {
            heading: "Регистрация в ЕИС",
            btn1: "за 5 дней",
            btn2: "за 1 сутки",
            descrLeft: "Аккредитация на 8 федеральных торговых площадках по 44-ФЗ. Без отклонений.",
            descrRight: "Ускоренная аккредитация на федеральных электронных площадках. Быстрее других.",
            btn3: "Заказать регистрацию в ЕИС",
            left: true,
            right: false
        },
        {
            heading: "Банковская гарантия",
            btn1: "по 44-ФЗ",
            btn2: "по 223-ФЗ",
            descrLeft: "Для ООО и ИП, без залога и поручительства с внесением в реестр. Без комиссии.",
            descrRight: "Подберем банк под требования заказчика. Открытие кредитного лимита.",
            btn3: "Получить банковскую гарантию",
            left: true,
            right: false
        },
        {
            heading: "Обучение тендерам с нуля",
            btn1: "индивидуальное",
            btn2: "групповое",
            descrLeft: "Индивидуально, фокусировка на вашей отрасли. Практические занятия.",
            descrRight: "Групповое обучение с последующей поддержкой специалиста.",
            btn3: "Заказать обучение тендерам",
            left: true,
            right: false
        },
        {
            heading: "Кредитование бизнеса",
            btn1: "инвестиционный",
            btn2: "на контракт",
            descrLeft: "Кредиты, гарантии, лизинг и факторинг.",
            descrRight: "Подберем оптимальное решение для задач.",
            btn3: "Оставить заявку на кредит",
            left: true,
            right: false
        }
    ]);
    const [grid2Data, setGrid2Data] = useState([
        {
            heading: "ЭЦП для торгов: что это и как получить?",
            descr: "В 2021 году были приняты значительные изменения в законодательстве, регулирующем проведение торгов. Их целью является оптимизация и цифровизация процедур открытых торгов. Чтобы уменьшить объем бумажного документооборота и ускорить обмен информацией, было принято решение использовать различные электронные системы, которые будут работать по единым правилам, просты в использовании, обеспечат защиту документов и значительно ускоряют проведение торгов."
        },
        {
            heading: "Аккредитация Сбербанк АСТ: пошаговая инструкция как зарегистрироваться",
            descr: "Как пройти аккредитацию на электронной площадке Сбербанк-АСТ по новым требованиям 44-ФЗ. Предлагаем пошаговую инструкцию для самостоятельного прохождения или поможем вам с ускоренной аккредитацией за 1 день."
        },
        {
            heading: "Участие в электронном аукционе: пошаговая инструкция",
            descr: "Если вы решили принять участие в электронном аукционе: выполнить работы, оказать услуги или поставить товар для государственного заказчика, ознакомьтесь с 44-ФЗ. Пошаговая инструкция как участвовать в электронных торгах из 10 шагов: от получения ЭЦП и аккредитации на площадке, до подачи заявки и подписания контракта."
        },
        {
            heading: "Как правильно подать жалобу в ФАС",
            descr: "Как подать жалобу в Федеральную Антимонопольную Службу (ФАС), а главное - сделать это правильно? Поставщики регулярно сталкиваются с нарушениями при проведении электронных торгов. В этом случае нужна «холодная голова» и четкий алгоритм действий. Этим должен обладать каждый тендерный специалист, который работает с госзаказом."
        },
        {
            heading: "Электронные торги: аукцион, конкурс, запрос котировок",
            descr: "Данная статья поможет разобраться в многообразии терминов и формулировок в сфере государственных закупок, узнать об основных формах электронных торгов и их особенностях."
        },
        {
            heading: "Жалоба в ФАС: срок подачи и рассмотрения",
            descr: "В этой статье речь пойдет о нюансах и сроках подачи жалобы в ФАС (fas.gov.ru, Федеральную Антимонопольную Службу) и о сроках рассмотрения подобных жалоб."
        },
        {
            heading: "Закупка у единственного поставщика",
            descr: "В этой статье мы расскажем Вам, как правильно осуществить закупку у единственного поставщика. В целом, если вы работаете по ФЗ-44 или ФЗ-223, сделать подобную закупку очень просто, надо только следовать по шагам определенной инструкции."
        },
        {
            heading: "Изменения 2014-2017 в сфере госзакупок",
            descr: "Информацией об изменениях в сфере госзакупок, которые уже ввелись или введутся в ближайшее время поделился заместитель министра экономического развития Евгений Елин."
        },
        {
            heading: "Запрос котировок",
            descr: "Запрос котировок – одна из форм электронных торгов, обычно используемая для приобретения продукции с примерно одинаковыми характеристикам, например, бытовая химия, мебель, продукты питания, медицинские, канцелярские товары, оргтехника и т.д. При этом главным критерием для определения победителя становится минимальная цена."
        },
        {
            heading: "Что такое обеспечение заявки",
            descr: "Обеспечение заявки - это определенное количество денежных средств участника размещения заказа, блокируемые на его счете на торговой электронной площадке в качестве гарантии его участия и достоверности предоставляемой информации."
        }
    ]);
    const [grid3Data, setGrid3Data] = useState([
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
    ]);
    const isOpen = useAppSelector((state) => state.tenderData.isOpen);
    const mode = useAppSelector((state) => state.tenderData.mode);
    const dispatch = useAppDispatch();

    const onLeftBtnGrid1DataRefresh = (heading: string, active: boolean) => {
        if (active === true) return;
        const newGrid1Data = grid1Data.map((el) =>
            el.heading === heading ? { ...el, left: !active, right: active } : el
        );
        setGrid1Data(newGrid1Data);
    };
    const onRightBtnGrid1DataRefresh = (heading: string, active: boolean) => {
        if (active === true) return;
        const newGrid1Data = grid1Data.map((el) =>
            el.heading === heading ? { ...el, right: !active, left: active } : el
        );
        setGrid1Data(newGrid1Data);
    };

    const onApplyHandler = (btnData: string) => {
        // setOpen(true);
        // setMode("toApplyGrid1");
        setBtnData(btnData);
        dispatch(
            setOpenClose({
                isOpen: !isOpen
            })
        );

        dispatch(
            setMode({
                mode: "toApplyGrid1"
            })
        );
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
                                            variant={card.left === true ? "contained" : "outlined"}
                                            onClick={() => onLeftBtnGrid1DataRefresh(card.heading, card.left)}
                                        >
                                            {card.btn1}
                                        </Button>
                                        <Button
                                            className={s.btn2}
                                            variant={card.right === true ? "contained" : "outlined"}
                                            onClick={() => onRightBtnGrid1DataRefresh(card.heading, card.right)}
                                        >
                                            {card.btn2}
                                        </Button>
                                    </div>
                                    <p className={s.descr}>{card.right === true ? card.descrRight : card.descrLeft}</p>
                                    <Button
                                        className={s.btn3}
                                        variant="outlined"
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
            ) : grid === "grid3" ? (
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
            ) : (
                <Box sx={{ flexGrow: 1 }} className={s.box}>
                    <div className={s.sidebar}>
                        <h3 className={s.main_heading}>Популярное:</h3>

                        {grid2Data.map((card, index) => (
                            <div key={index}>
                                <Divider />
                                <Grid item>
                                    <Item className={s.services_grid2} elevation={0}>
                                        <Card sx={{ maxWidth: 400 }} elevation={0} className={s.card_wrapper}>
                                            <h3 className={s.heading}>{card.heading}</h3>

                                            <CardContent className={s.content_wrapper}>
                                                <Typography variant="body2" color="text.secondary">
                                                    {card.descr}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Item>
                                </Grid>
                            </div>
                        ))}
                    </div>
                    <Grid
                        container
                        // spacing={{ xs: 0, md: 0 }}
                        // columns={{ xs: 1, sm: 6, md: 6, lg: 8 }}
                        // style={{ justifyContent: "flex-start" }}
                        className={s.grid2_wrapper}
                    >
                        {grid2Data.map((card, index) => (
                            <Grid item key={index}>
                                <Item className={s.services_grid2} elevation={0}>
                                    <Card className={s.card_wrapper} elevation={3}>
                                        <div className={s.img_wrapper}>
                                            <img src={article} alt="article image" />
                                        </div>
                                        <h3 className={s.heading}>{card.heading}</h3>
                                        <Divider />

                                        <CardContent className={s.content_wrapper}>
                                            <Typography variant="body2" color="text.secondary">
                                                {card.descr}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </>
    );
};
