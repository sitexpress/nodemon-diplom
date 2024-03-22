import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { ScrollToTop } from "../../../../utils/ScrollToTop";
import mapImg from "../../../../assets/img/map_mock.jpg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TramIcon from "@mui/icons-material/Tram";
import s from "./ContactPage.module.scss";

export const ContactPage = () => {
    React.useEffect(() => {
        ScrollToTop.instant();
        return () => ScrollToTop.instant();
    }, []);
    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }} className={s.box}>
                    <div className={s.address}>
                        <h2>Контакты</h2>
                        <ul>
                            <li className={s.add}>ИП Удовиченко Д</li>
                            <li className={s.add}>ИНН 123456789</li>
                            <li className={s.add}>ОГРНИП 987654321</li>
                            <li className={s.add}>Юридический адрес ул. Арбат, 123</li>
                            <li className={s.phone}>
                                <LocalPhoneIcon />
                                +7 (495) 648-65-51
                            </li>
                            <li className={s.mail}>
                                <MarkunreadIcon />
                                info@open-torg.ru
                            </li>
                            <li className={s.services}>
                                <LocationOnIcon />
                                123001, Москва, ул. Арбат д. 123 Бесплатная парковка 9 минут пешком от метро
                                “Маяковская”
                            </li>{" "}
                            <li className={s.services}>
                                <DirectionsCarIcon />
                                Бесплатная парковка
                            </li>{" "}
                            <li className={s.services}>
                                <TramIcon />9 минут пешком от метро “Маяковская”
                            </li>
                        </ul>
                    </div>
                    <div className={s.map}>
                        <img src={mapImg} alt="карта" />
                    </div>
                </Box>
            </Container>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }} className={s.box1}></Box>
            </Container>
        </div>
    );
};
