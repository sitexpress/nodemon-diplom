import React from "react";
import IconButton from "@mui/material/IconButton";
import s from "./PopUpBtn.module.scss";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setChatOpenClose } from "../../../store/tenderDataSlice";
import { ScrollToTop } from "../../../utils/ScrollToTop";

const PopUpBtn = () => {
    const isChatOpen = useAppSelector((state) => state.tenderData.isChatOpen);
    const dispatch = useAppDispatch();
    const handlerScrollUp = () => {
        ScrollToTop.smooth();
    };

    const handlerChatOpenCloseUp = () => {
        dispatch(
            setChatOpenClose({
                isChatOpen: !isChatOpen
            })
        );
    };

    return (
        <div>
            <div className={s.btn_up}>
                <IconButton size="large" onClick={handlerScrollUp}>
                    <ArrowCircleUpIcon fontSize="large" color={"primary"} />
                </IconButton>
            </div>

            {isChatOpen ? (
                <div className={s.btn_chat_opened}>
                    <IconButton size="large">
                        <WhatsAppIcon fontSize="large" color={"primary"} />
                    </IconButton>
                    <IconButton size="large">
                        <TelegramIcon fontSize="large" color={"primary"} />
                    </IconButton>
                    <IconButton size="large" onClick={handlerChatOpenCloseUp}>
                        <MapsUgcIcon fontSize="large" color={"primary"} className={s.message_icon_opened} />
                    </IconButton>
                </div>
            ) : (
                <div className={s.btn_chat_closed}>
                    <IconButton size="large" onClick={handlerChatOpenCloseUp}>
                        <MapsUgcIcon fontSize="large" color={"primary"} className={s.message_icon_closed} />
                    </IconButton>
                </div>
            )}
        </div>
    );
};

export default PopUpBtn;
