import React, { useState } from "react";
import { AppBarComponent } from "../../AppBarComponent/AppBarComponent";
import { ModeType } from "../../../../app/App";

import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import s from "./TenderPage.module.scss";

type TenderPageType = {
    heading: string;
};
export const TenderPage: React.FC<TenderPageType> = ({ heading }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [mode, setMode] = useState<ModeType>("");
    const [btnData, setBtnData] = useState<string>("");
    return (
        <div>
            {/*<NestedModal open={open} setOpen={setOpen} mode={mode} btnData={btnData} />*/}
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
                    </Box>
                </Container>
            </div>
        </div>
    );
};
