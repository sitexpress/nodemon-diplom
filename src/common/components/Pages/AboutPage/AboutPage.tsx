import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { ScrollToTop } from "../../../../utils/ScrollToTop";
import IconButton from "@mui/material/IconButton";
import EngineeringIcon from "@mui/icons-material/Engineering";
import s from "./AboutPage.module.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import cover from "../../../../assets/icons/logo-bright.svg";
import { FlickingCarousel } from "../../FlickingCarousel/FlickingCarousel";
export const AboutPage = () => {
    React.useEffect(() => {
        ScrollToTop.instant();
        return () => ScrollToTop.instant();
    }, []);
    return (
        <div>
            <section className={s.grid1}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            flexGrow: 1,
                            backgroundImage: `url(${cover})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "compact",
                            backgroundPosition: "center center",
                            height: "auto"
                        }}
                        className={s.box1}
                    >
                        <article className={s.article_aim_wrapper}>
                            <div className={s.article_aim}>
                                <IconButton size="large" color="primary" aria-label="tender" className={s.icon_group}>
                                    <EngineeringIcon className={s.icon} />
                                </IconButton>
                                <h4>Наша задача</h4>
                                <p>Быть единой точкой входа и обеспечивать полный комплекс услуг высокого качества</p>
                            </div>
                            <div className={s.article_aim}>
                                <IconButton size="large" color="primary" aria-label="tender" className={s.icon_group}>
                                    <EngineeringIcon className={s.icon} />
                                </IconButton>
                                <h4>Наша цель</h4>
                                <p>
                                    Достижение успешных результатов в долгосрочной перспективе для клиентов, сотрудников
                                    и акционеров
                                </p>
                            </div>
                        </article>
                        <h2 className={s.heading}>Несколько интересных фактов о нас</h2>
                        <div className={s.check_list}>
                            <ul className={s.services_grid3_content}>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        8 лет в тендерном сопровождении (дата регистрации сайта – 09.01.2013)
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Разработчики практических программ обучения для поставщиков
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Центр компетенций по тендерам на поставку товаров и оказание услуг
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Побеждаем за счет силы закона, системности и опыта (без серых схем)
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Головной офис в Москве, работаем по всей России</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Объясняемся простыми словами, понятными не специалисту
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Оказание услуг от 1 часа – помогаем, когда другие отказываются
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h2 className={s.heading_center}>Несколько интересных фактов о нас</h2>
                        <article className={s.article_text}>
                            <div className={s.subtitle}>
                                Наши клиенты - наша гордость. С 2013 года более 1200 компаний разных отраслей
                                сотрудничали с центром "Открытые торги". Среди них представители малого, среднего
                                бизнеса, крупнейшие российские и глобальные корпорации..
                            </div>
                            <FlickingCarousel type={"partners"} />
                        </article>
                    </Box>
                </Container>
            </section>

            <section className={s.grid2}>
                <Container maxWidth="xl">
                    <Box className={s.box2}>
                        <h2 className={s.heading_center}>Отзывы о нашей работе</h2>
                        <article className={s.article_text}>
                            <FlickingCarousel type={"reviews"} />
                        </article>
                    </Box>
                </Container>
            </section>
            <section className={s.grid3}>
                <Container maxWidth="xl">
                    <Box className={s.box3}>
                        <h2 className={s.heading_center}>Наши принципы</h2>
                        <article className={s.article_text}>
                            <p>
                                <b>Управляем рисками.</b> Не упускаем возможности, но и не разбрасываемся ресурсами
                            </p>
                            <p>
                                <b>Экономим время.</b> Работа напрямую со специалистом без испорченного телефона
                            </p>
                            <p>
                                <b>Работаем для пользы.</b> Прежде чем предложить решение, проясняем задачи клиента
                            </p>
                            <p>
                                <b>Уменьшаем согласования.</b> Высвобождаем время для действительно важных дел
                            </p>
                            <p>
                                <b>Храним секреты.</b> Полная конфиденциальность, подписание NDA при необходимости
                            </p>
                            <p>
                                <b>Выдерживаем сроки.</b> Просчитываем ситуацию и если беремся, то выкладываемся на 100%
                            </p>
                        </article>
                    </Box>
                </Container>
            </section>
        </div>
    );
};
