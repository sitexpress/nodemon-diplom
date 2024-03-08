import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import s from "./Modal.module.css";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useState } from "react";
import { ModeType } from "../../../app/App";
import logo from "../../../assets/icons/logo.svg";

interface ModalType {
    open: boolean;
    setOpen: (value: boolean) => void;
    mode: ModeType;
    activeMenuSection?: string;
    btnData: string;
}

export const NestedModal: React.FC<ModalType> = ({ open, setOpen, mode, btnData, ...other }) => {
    const [newMenuSectionValue, setNewMenuSectionValue] = useState("");
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box className={s.box_wrapper}>
                    {mode === "toApplyAppBar" ? (
                        <>
                            <h2 id="parent-modal-title">Тендер</h2>
                            {/*<p id="parent-modal-description">Укажите название нового раздела меню:</p>*/}
                            <TextField
                                sx={{ marginTop: "15px", width: "100%" }}
                                value={newMenuSectionValue}
                                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                                    setNewMenuSectionValue(e.currentTarget.value)
                                }
                                id="outlined-basic"
                                label="Имя"
                                variant="outlined"
                                multiline
                            />
                            <TextField
                                sx={{ marginTop: "15px", width: "100%" }}
                                value={newMenuSectionValue}
                                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                                    setNewMenuSectionValue(e.currentTarget.value)
                                }
                                id="outlined-basic"
                                label="Телефон"
                                variant="outlined"
                                multiline
                            />
                            <TextField
                                sx={{ marginTop: "15px", width: "100%" }}
                                value={newMenuSectionValue}
                                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                                    setNewMenuSectionValue(e.currentTarget.value)
                                }
                                id="outlined-basic"
                                label="e-mail"
                                variant="outlined"
                                multiline
                            />
                            <div className={s.btn_wrapper}>
                                <Button
                                    className={s.btn}
                                    variant="contained"
                                    color={"primary"}
                                    onClick={() => setOpen(true)}
                                >
                                    Отправить заявку на услуги
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            {/*<h2 id="parent-modal-title">Тендер</h2>*/}
                            <div className={s.logo_wrapper}>
                                <img src={logo} alt="Лого" />
                                <span className={s.logo_name}>ендер</span>
                            </div>
                            {/*<p id="parent-modal-description">Укажите название нового раздела меню:</p>*/}
                            <TextField
                                sx={{ marginTop: "15px", width: "100%" }}
                                value={newMenuSectionValue}
                                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                                    setNewMenuSectionValue(e.currentTarget.value)
                                }
                                id="outlined-basic"
                                label="Имя"
                                variant="outlined"
                                multiline
                            />
                            <TextField
                                sx={{ marginTop: "15px", width: "100%" }}
                                value={newMenuSectionValue}
                                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                                    setNewMenuSectionValue(e.currentTarget.value)
                                }
                                id="outlined-basic"
                                label="Телефон"
                                variant="outlined"
                                multiline
                            />
                            <TextField
                                sx={{ marginTop: "15px", width: "100%" }}
                                value={newMenuSectionValue}
                                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                                    setNewMenuSectionValue(e.currentTarget.value)
                                }
                                id="outlined-basic"
                                label="e-mail"
                                variant="outlined"
                                multiline
                            />
                            <div className={s.btn_wrapper}>
                                <Button
                                    className={s.btn}
                                    variant="contained"
                                    color={"primary"}
                                    onClick={() => setOpen(true)}
                                >
                                    {btnData}
                                </Button>
                            </div>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    );
};
