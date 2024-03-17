import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GroupsIcon from "@mui/icons-material/Groups";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import silliconValleyVideo from "../../../../assets/video/Bitcoin Warning_Silicon Valley.mp4";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AccordionExpandIcon } from "../../Accordion/Accordion";
import s from "./RegistrationEisPage.module.scss";

export const RegistrationEisPage = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }} className={s.box1}>
                    <h2 className={s.heading}>Что такое ЕИС</h2>
                    <div className={s.subtitle}>
                        <article className={s.article_text}>
                            <p>
                                Единая Информационная Система в сфере закупок (ЕИС) является ядром для электронных
                                торговых площадок, через которую происходит взаимодействие между заказчиками,
                                поставщиками, электронными площадками и контролирующими органами.
                            </p>
                        </article>
                    </div>
                </Box>
            </Container>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }} className={s.box2}>
                    <article className={s.article_video}>
                        <IconButton color="primary" aria-label="tender">
                            <FormatQuoteIcon className={s.icon_group} />
                        </IconButton>
                        <q>Фактически ЕИС – это официальный сайт, где размещаются госзакупки по 44-ФЗ и 223-ФЗ.</q>
                    </article>
                    <article className={s.article_above_video}>
                        <p>
                            Благодаря ЕИС можно бесплатно узнать основную информацию о заказчике и поставщике,
                            ознакомиться с заявкой, и принять решения относительно участия в ней. На сайте вы сможете
                            найти реестр заключенных контрактов, отчеты заказчиков о проведенных закупках, информацию о
                            жалобах, список недобросовестных поставщиков и многое другое.
                        </p>
                        <p>
                            Регистрация в ЕИС необходима поставщику для того, чтобы стать частью электронного процесса и
                            работать на 8 официальных площадках:
                        </p>
                        <div className={s.check_list}>
                            <ul className={s.services_grid3_content}>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Росэлторг (roseltorg.ru)</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Сбербанк-АСТ (sberbank-ast.ru)</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>РТС-тендер (rts-tender.ru)</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>НЭП (etp-ets.ru)</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Заказ РФ (zakazrf.ru)</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>РАД (lot-online.ru)</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>ГПБ (etpgpb.ru)</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>ТЭК-Торг (tektorg.ru)</div>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <h2 className={s.heading}>Кому необходима регистрация в ЕИС</h2>
                    <article className={s.article_video}>
                        <IconButton color="primary" aria-label="tender">
                            <FormatQuoteIcon className={s.icon_group} />
                        </IconButton>
                        <q>
                            Регистрация в ЕИС обязательна для поставщиков при участии в торгах по 44-ФЗ и участникам
                            закупок у МСП по 223-ФЗ.
                        </q>
                    </article>
                    <article className={s.article_above_video}>
                        <p>
                            До 1 января 2022 года поставщики получали аккредитацию на ограниченное время и регулярно
                            должны были её продлевать. Однако с начала 2022 года аккредитация в ЕИС стала бессрочной.
                            Достаточно один раз зарегистрироваться и можно уже не беспокоиться, что срок действия
                            аккредитации закончится в самый неподходящий момент. Пройти перерегистрацию организации в
                            ЕИС по новой системе нужно до 1 января 2023 года. Пользователи, которые не сделают этого
                            потеряют доступ к ЕИС.
                        </p>

                        <p>
                            Если поставщик получил аккредитацию по старой схеме, рекомендуем пройти регистрацию в ЕИС
                            заранее. Участие в электронных процедурах разрешено, если до окончания срока регистрации в
                            ЕИС у участника осталось не меньше трех месяцев.
                        </p>

                        <p>
                            Минфином предусмотрены различия для регистрации участников закупок в зависимости от
                            категории:
                        </p>

                        <div className={s.check_list}>
                            <ul className={s.services_grid3_content}>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Региональные информационные системы;</div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Организации, из реестра бюджетного процесса и юридические лица (не участвующие в
                                        бюджетном процессе);
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>Организации, не включенные в Сводный реестр.</div>
                                </li>
                            </ul>
                        </div>

                        <p>
                            Правила регистрации прописаны в разделах со второго по четвертый приказ Министерства
                            финансов «Об утверждении порядка регистрации в Единой информационной системе и работы в
                            ЕИС».
                        </p>
                    </article>
                    <h2 className={s.heading}>Нюансы регистрации в ЕИС</h2>
                    <article className={s.article_above_video}>
                        <p>
                            В 2022 году порядок получения аккредитации на электронных торговых площадках для участия в
                            торгах не претерпел значительных изменений. Тем не менее есть несколько нюансов, на которые
                            стоит обратить особое внимание.
                        </p>
                    </article>
                    <article className={s.article_video}>
                        <IconButton color="primary" aria-label="tender">
                            <FormatQuoteIcon className={s.icon_group} />
                        </IconButton>
                        <q>
                            Аккредитация на всех 8 федеральных ЭТП происходит не по отдельности, а централизованно.
                            Однако подвох в таком “упрощении” все равно есть.
                        </q>
                    </article>
                    <article className={s.article_above_video}>
                        <p>
                            С одной стороны, нет нужды готовить единый комплект документов для всех площадок отдельно и
                            тратить время на регистрацию на каждой из них. Но, это не позволяет выйти на конкретные
                            торги на одной площадке.
                        </p>
                        <p>
                            Также регистрация поставщиков в ЕИС позволяет принимать участие в торгах, регулируемых
                            только 44-ФЗ и субъектов малого и среднего предпринимательства (МСП) по 223-ФЗ. Для участия
                            в торгах из других разделов торговых площадок необходимо проходить дополнительную
                            аккредитацию.
                        </p>
                    </article>
                    <h2 className={s.heading}>Три этапа для регистрации в ЕИС</h2>
                    <article className={s.article_above_video}>
                        <div className={s.check_list}>
                            <ul className={s.services_grid3_content}>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Зарегистрироваться и подать документы на госуслугах как физическое лицо, потом
                                        добавить юридическое лицо или ИП;
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Пройти регистрацию в ЕИС через госуслуги (систему ЕСИА), далее загрузить
                                        документы и заполнить формы;
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        После внесения документов в ЕРУЗ дождаться аккредитации на каждой электронной
                                        торговой площадке.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className={s.article_video}>
                        <IconButton color="primary" aria-label="tender">
                            <FormatQuoteIcon className={s.icon_group} />
                        </IconButton>
                        <q>
                            Первые 2 этапа имеют свои особенности и барьеры, преодолеть которые под силу не каждому
                            поставщику.
                        </q>
                    </article>
                    <h2 className={s.heading}>Другие шаги</h2>
                    <article className={s.article_above_video}>
                        <p>
                            Перед тем как приступать к регистрации следует подготовить пакет документов в электронном
                            виде и удостовериться, что все данные на них верны и нет отличий/ошибок. Если прикрепленные
                            документы будут содержать противоречивую или недостоверную информацию, результатом станет
                            отказ в регистрации и, как следствие, потерянное время.
                        </p>
                    </article>
                    <article className={s.article_above_video}>
                        <div className={s.check_list}>
                            <ul className={s.services_grid3_content}>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        До регистрации – получить ЭЦП для участия в торгах. Электронная подпись будет
                                        нужна почти на каждом этапе регистрации для идентификации и подписи документов.
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        После регистрации – открыть в одном из 22 уполномоченных банков спецсчет для
                                        обеспечения заявок.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <h2 className={s.heading}>Сроки регистрации в ЕИС</h2>
                    <article className={s.article_video}>
                        <IconButton color="primary" aria-label="tender">
                            <FormatQuoteIcon className={s.icon_group} />
                        </IconButton>
                        <q>
                            Регистрироваться в ЕИС нужно заблаговременно. Хотя бы за 5, а лучше за 7-10 рабочих дней до
                            даты подачи заявок на площадке.
                        </q>
                    </article>
                    <article className={s.article_above_video}>
                        <div className={s.check_list}>
                            <ul className={s.services_grid3_content}>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Регистрация физлица на gosuslugi.ru занимает от получаса до нескольких дней
                                        (проверка ПФР и МВД);
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Проверка данных организации на Госуслугах через ФНС может занять до 5 рабочих
                                        дней;
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Одобрение заявки самой ЕИС — до 5 рабочих дней с учетом загрузки выписки из
                                        ЕГРЮЛ или ЕГРИП;
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Поступление информации о вас, как о зарегистрированном участнике на площадки — 1
                                        рабочий день;
                                    </div>
                                </li>
                                <li className={s.gc_li}>
                                    <div>
                                        <CheckCircleIcon color="primary" style={{ marginRight: "10px" }} />
                                    </div>
                                    <div className={s.descr}>
                                        Время на настройку компьютера для работы с ЭЦП и порталами: средств
                                        криптографии, плагинов и расширений – от 15 минут до нескольких дней.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </article>
                </Box>
            </Container>
        </div>
    );
};
