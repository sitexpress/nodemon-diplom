import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AccordionExpandIcon = () => {
    return (
        <div>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                    <Typography>Можно ли воспользоваться услугой тендерного сопровождения единоразово?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Да, конечно. Вы можете воспользоваться нашей помощью для участия в одних торгах или в
                        нескольких. Второй вариант имеет большие шансы, что ваши вложения окупятся.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                    <Typography>
                        Входит ли получение электронной подписи, регистрация и аккредитация на торговых площадках в
                        тендерное сопровождение?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Разумеется, если вы новый участник или ваша аккредитация заканчивается мы поможем вам получить
                        аккредитацию по новым правилам, покажем, как работать с электронной подписью и электронными
                        площадками.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel3-header">
                    <Typography>
                        Нужно ли мне, как заказчику принимать участие в торгах, или тендерные специалисты сделают все за
                        меня?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Наши специалисты на время сопровождения в тендерах становятся вашей командой. И чтобы
                        качественно выполнить работу мы вовлекаем участника в процесс. Вашей задачей будет принятие
                        решений, постановка задач.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel4-header">
                    <Typography>На что нужно обратить внимание в договоре по тендерному сопровождению?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        В договоре должно быть прописано какие услуги входят в ваш пакет. Перечень услуг тендерного
                        сопровождения под ключ в каждой компании отличается. Вы можете поинтересоваться у сотрудника
                        компании входит ли тот или иной этап в перечень услуг. При возможности просите добавить или
                        убрать необходимые пункты в договор.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel5-header">
                    <Typography>Сколько стоит тендерное сопровождение?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Цена индивидуальна для каждого в зависимости от того, какая именно помощь в участии в тендерах
                        нужна. На первой встрече вам предоставят перечень услуг, которые наша компания предлагает, и вы
                        выберете, что нужно именно вам. Например, у вас уже есть электронная подпись, и вы не нуждаетесь
                        в ее получении. Зачем платить больше?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel6-header">
                    <Typography>Тендерное сопровождение под ключ в Москве будет стоить дороже?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Цена за стандартные услуги для всех регионов одинаковая. Но исходя из особенностей рынка в том
                        или ином регионе, ваших запросов и трудности выполнения работы цена может отличаться.
                        Качественное тендерное сопровождение не может стоить копейки, так как это большой объем сбора
                        информации и аналитических работ. Если компания предлагает свои услуги по сильно заниженным
                        ценам, стоит проверить ее надежность, не находится ли она в упадке или на грани банкротства.
                        Проверьте все лицензии, разрешения, удостоверьтесь, что это не мошенники.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
