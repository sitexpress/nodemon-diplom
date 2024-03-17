import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import silliconValleyVideo from "../../../../assets/video/Bitcoin Warning_Silicon Valley.mp4";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import s from "./CoursesPage.module.scss";

export const CoursesPage = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }} className={s.box2}>
                    <div className={s.player_wrapper}>
                        <video src={silliconValleyVideo} controls></video>
                    </div>
                    <h2 className={s.heading}>Почему важно обучаться у специалистов?</h2>
                    <article className={s.article_above_video}>
                        <p>
                            Обучение для будущих специалистов по тендерам и госзакупкам возможно самостоятельно только
                            при наличии систематизированной базы знаний наполненной только проверенными данными и
                            понятными примерами. Найти общую информацию можно на многих платформах, но чаще всего она
                            устаревшая и запутанная. Намного легче обучаться, если рядом опытный наставник, готовый
                            поделиться теми знаниями, которые нужны именно тебе. Специалист может построить эффективный
                            план обучения госзакупкам, который поможет последовательно ознакомиться со всеми нюансами и
                            легко запоминать полученную информацию. Теоретическая часть подкрепляется примерами из
                            живого опыта. Доверившись профессионалам, вы можете:
                        </p>
                        <div className={s.check_list}>
                            <ul className={s.services_grid3_content}>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Быть уверенны, что полученная информация актуальна;</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Избежать ложной или неактуальной информации именно для вас;
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Сэкономить время на поиск обучающих материалов, их сортировку;
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Быть уверенны, что полученные знания были поняты правильно и соотнести их с
                                        реальностью;
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Получить поддержку в виде компетентного учителя.</div>
                                </li>
                            </ul>
                        </div>
                        <p>
                            Если вы пришли с уже имеющимся багажом знаний, наши эксперты проанализируют ваш уровень
                            знаний и подскажут на что вам следует обратить особое внимание.
                        </p>
                    </article>
                    <h2 className={s.heading}>Преимущества обучения тендерам</h2>
                    <article className={s.article_above_video}>
                        <p>
                            Обучение торгам на электронных площадках один из самых эффективных способов получения знаний
                            в данной сфере: вы получите конкретные знания, основанные на опыте специалиста, который сам
                            участвует в тендерах, а не теоретиков. Специалист по тендерам адаптирует обучение под вашу
                            сферу деятельности. Если у вас поставки товаров или оборудования, то вы сконцентрируетесь на
                            аукционах, если услуги – на открытых конкурсах. Во внимание принимаются другие особенности:
                            принадлежность к малым и средним предприятиям, имеющийся опыт и знания, а также желаемый
                            конечный результат.
                        </p>

                        <article className={s.article_video}>
                            <IconButton color="primary" aria-label="tender">
                                <FormatQuoteIcon className={s.icon_group} />
                            </IconButton>
                            <q>После прохождения курса по тендерам можно сразу приступать к работе.</q>
                        </article>

                        <p>
                            Знание законов — это базовый навык, необходимый для участия и управления государственными и
                            муниципальными закупками. Но увы, законы меняются, необходимо под них подстраиваться и
                            находить в этом свою выгоду. Преподаватель научит применять закон на практике и объяснит, с
                            чем вам придётся столкнуться на пути. Расскажет нюансы и тонкости, которые вы сможете
                            использовать и превратить в плюсы для вас и вашей организации. Зная все подводные камни, вам
                            без труда удастся найти оптимальный выход из самых затруднительных ситуаций.
                        </p>

                        <h2 className={s.heading}>Какие результаты вы можете ожидать от обучения?</h2>

                        <p>
                            На первой консультации не забывайте указать, что конкретно вы хотите получить от наших
                            экспертов, какое направление вас интересует больше всего. После обучения по закупкам с нуля
                            вы сможете:
                        </p>

                        <div className={s.check_list}>
                            <ul className={s.services_grid3_content}>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Свободно анализировать настоящую ситуацию на рынке и выбирать подходящие
                                        тендеры;
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Анализировать все риски;</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Понимать тендерную документацию и уметь её составлять;
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Находить выход из трудных и спорных ситуаций;</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Свободно работать на электронных торговых площадках;</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Узнаете о всех правилах, нюансах подготовки и подачи заявки;
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Ознакомитесь с законами, научитесь понимать букву закона и использовать для
                                        своей пользы;
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Получите помощь на старте и базовые инструменты для участия в тендерах.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <p>Если вы уже опытный участник, на курсах повышение квалификации по госзакупкам вы:</p>

                        <div className={s.check_list}>
                            <ul className={s.services_grid3_content}>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Освежите уже имеющиеся знания;</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Ознакомитесь с нововведениями и их особенностями;</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Ознакомитесь с новым направлением (например, как участвовать в другом виде
                                        тендеров);
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Узнаете про новые требования подготовки, подачи заявок и документации, как им
                                        соответствовать.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <h2 className={s.heading}>На кого рассчитано обучение тендерам</h2>
                    <article className={s.article_above_video}>
                        <p>
                            Обучение рассчитано в первую очередь на новичков (обучение тендерам с нуля) и начинающих
                            поставщиков. Курсы тендерного специалиста может пройти каждый желающий найти престижную
                            работу в сфере торгов или расширить свой собственный бизнес. Такой формат обучения также
                            подходит начинающим специалистам, которые только закончили университет, но их практический
                            опыт еще небольшой. Наши курсы станут прекрасным дополнением, а полученный сертификат об
                            окончании наших курсов станет подтверждением вашего диплома и дополнительным преимуществом.
                        </p>
                        <p>
                            Для более продвинутых специалистов предлагаем курсы повышения квалификации по госзакупкам
                            для подкрепления имеющихся знаний, понимания последних изменений и для открытия новых
                            возможностей, которые дают госзакупки.
                        </p>
                        <p>
                            Обучение проходит с наглядными усвояемыми материалами “без воды”, ведётся живая беседа с
                            преподавателем-практиком. При успешном прохождении обучения госзакупкам выдаётся сертификат.
                        </p>
                    </article>
                    <h2 className={s.heading}>Как проходит обучение тендерам</h2>
                    <article className={s.article_above_video}>
                        <p>
                            Обучение тендерам с нуля проводится индивидуально или в составе групп до 8 человек
                            специалистом-практиком, который более 5 лет работает в сфере закупок от лица поставщиков по
                            44-ФЗ и 223-ФЗ, а также сопровождает клиентов компании в торгах по банкротству (127-ФЗ).
                        </p>
                        <p>
                            Курсы тендерного специалиста для групп проходят в виде семинаров, каждое из занятий будет
                            посвящено определённой теме согласно составленному плану. На них каждый участник будет иметь
                            возможность задать вопросы. Ниже приведена приблизительная программа курсов по госзакупкам в
                            Москве для начинающих:
                        </p>
                        <p>
                            <b>Программа обучения тендерам</b>
                        </p>
                        <div className={s.check_list}>
                            <ul className={s.services_grid3_content}>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Начало работы с тендерами, пошаговая инструкция</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Отличия и сходства 44-ФЗ и 223-ФЗ, идеология законодателя
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Последние и будущие изменения 44-ФЗ, переходный период
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Нюансы и тонкости госзакупок, которых нет в законе</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Практические примеры, кейсы, реальные истории успехов и поражений
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Поиск интересующих тендеров, ресурсы и инструменты для поиска торгов
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Виды тендеров (аукционы, конкурсы, запросы котировок, предложений), их
                                        особенности
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Как анализировать документацию, находить ключевую информацию, читать “между
                                        строк”
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Как подготовить документы на аукцион, конкурс, шаблоны, формы, подстраховки,
                                        чек-листы
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Финансовое обеспечение участия в тендерах и исполнения контрактов
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Обжалование действий заказчиков и организаторов торгов
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Психология заказчиков и поставщиков, совпадения и конфликты интересов
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Разбор тендеров по вашей отрасли, персональные рекомендации
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Ответы на вопросы, дальнейшая поддержка</div>
                                </li>
                            </ul>
                        </div>
                        <p>
                            Программа может меняться в зависимости от потребностей каждой группы участников, а также от
                            того, какие изменения вносятся в тендерные процедуры. Большим плюсом небольших групп
                            является возможность уделить время каждому участнику. Другие участники, задавая вопросы,
                            возможно обратят внимание на неочевидные для вас особенности, которые вы сможете применять и
                            для себя.
                        </p>
                        <p>
                            Если вы выбрали индивидуальный способ обучения, оно будет проходить в виде занятий,
                            составленных исключительно для вас. На них вы сможете задать вопросы и подготовиться в
                            направлении, которое интересно именно вам без ничего лишнего.{" "}
                        </p>
                    </article>
                </Box>
            </Container>
        </div>
    );
};
