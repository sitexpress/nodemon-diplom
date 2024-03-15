import React, { useState } from "react";
import { AppBarComponent } from "../../AppBarComponent/AppBarComponent";

import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import s from "./TenderPage.module.scss";
import Button from "@mui/material/Button";
import { ModeType, setOpenClose } from "../../../../store/tenderDataSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { NestedModal } from "../../Modal/Modal";
import PopUpBtn from "../../PopUpBtn/PopUpBtn";
import { useLocation } from "react-router-dom";

type TenderPageType = {
    heading: string;
    btnText: string;
};
export const TenderPage: React.FC<TenderPageType> = ({ heading, btnText, ...other }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [mode, setMode] = useState<ModeType>("");
    const [btnData, setBtnData] = useState<string>("");

    const isOpen = useAppSelector((state) => state.tenderData.isOpen);
    const dispatch = useAppDispatch();

    const onApplyHandler = (btnData: string) => {
        setOpen(true);
        dispatch(
            setOpenClose({
                isOpen: !isOpen
            })
        );
        setMode("toApplyGrid1");
        setBtnData(btnData);
    };

    return (
        <div className={s.tenderContainer}>
            <NestedModal isOpen={isOpen} mode={mode} btnData={btnData} />
            <AppBarComponent setOpen={setOpen} setMode={setMode} />
            <div className={s.grid}>
                <Container maxWidth="xl">
                    <Box sx={{ flexGrow: 1 }} className={s.box}>
                        <div className={s.heading}>
                            <h2>{heading}</h2>
                        </div>
                        <div className={s.subtitle}>
                            <p>
                                Как быть уверенным в победе? Опытные специалисты по тендерному сопровождению могут
                                сделать расчеты и определить насколько велика вероятность стать победителем. Наша
                                команда предлагает свой подход, который действительно работает.
                            </p>
                        </div>
                        {btnText !== "" && (
                            <Button className={s.btn} variant={"contained"} onClick={() => onApplyHandler(btnText)}>
                                {btnText}
                            </Button>
                        )}
                    </Box>
                </Container>
            </div>
            <PopUpBtn />
        </div>
    );
};
