import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import logo from "../../../assets/icons/logo.svg";
import s from "./AppBarComponent.module.scss";
import { ModeType } from "../../../app/App";

type AppBarComponentType = {
    setOpen: (value: boolean) => void;
    setMode: (value: ModeType) => void;
};
export const AppBarComponent: React.FC<AppBarComponentType> = ({ setOpen, setMode }) => {
    const onSetBtnHandler = (value: ModeType) => {
        setOpen(true);
        setMode(value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar variant="regular" className={s.header_wrapper}>
                        <IconButton
                            className={s.hamburger}
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className={s.icon_logo}>
                            <div className={s.logo_wrapper}>
                                <img src={logo} alt="Лого" />
                                <span>ендер</span>
                            </div>
                            <div className={s.moto}>центр тендорного сопровождения</div>
                        </div>

                        <div className={s.header_info}>
                            <div className={s.contacts}>
                                <div className={s.phone_one}>
                                    <div>Тендерное сопровождение</div>
                                    <img src="" alt="" />
                                    <div>
                                        <a href="tel:+78009998877" className={s.link}>
                                            +7(800)9998877
                                        </a>
                                    </div>
                                </div>

                                <div className={s.phone_two}>
                                    <div>Банковские гарантии</div>
                                    <div>
                                        <a href="tel:+78009998877" className={s.link}>
                                            +7(495)9998877
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className={s.header_btn}>
                                <Button
                                    className={s.btn}
                                    variant="contained"
                                    sx={{
                                        background: "#FF0000",
                                        color: "white",
                                        "&:hover": { background: "#42a5f5", color: "white" }
                                    }}
                                    onClick={() => onSetBtnHandler("toApplyApplication")}
                                >
                                    Отправить заявку
                                </Button>
                                <Button
                                    className={s.btn}
                                    variant="outlined"
                                    sx={{
                                        background: "white",
                                        textAlign: "start",
                                        color: "#42a5f5",
                                        "&:hover": { background: "#42a5f5", color: "white" }
                                    }}
                                    onClick={() => onSetBtnHandler("toApplyCall")}
                                >
                                    Заказать звонок
                                </Button>
                            </div>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};
