import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import GroupsIcon from "@mui/icons-material/Groups";
import s from "./TenderPage.module.scss";
import IconButton from "@mui/material/IconButton";

export const TenderPage = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }} className={s.box}>
                <div className={s.heading}>
                    <h2>Тендерное сопровождение под ключ</h2>
                </div>
                <div className={s.subtitle}>
                    <IconButton color="primary" aria-label="tender">
                        <GroupsIcon className={s.icon_group} />
                    </IconButton>
                    <article className={s.article}>
                        <p>
                            <b>Тендерное сопровождение под ключ</b> – это комплекс услуг по участию во всех видах
                            тендеров (аукционах, конкурсах, электронных торгах), в целях заключения контрактов с
                            заказчиками по 44-ФЗ, 223-ФЗ и коммерческими компаниями.
                        </p>
                        <p>
                            Речь пойдет про тендерный аутсорсинг на длительный срок. Если вас интересует сопровождение в
                            конкретном тендере – не теряйте время и обратитесь за консультацией.
                        </p>
                    </article>
                </div>
            </Box>
        </Container>
    );
};
