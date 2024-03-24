import React, { useState } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { ScrollToTop } from "../../../../utils/ScrollToTop";
import { ResponsiveGrid } from "../../GridComponent/GridComponent";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { setOpenClose } from "../../../../store/tenderDataSlice";
import s from "./ArticlePage.module.scss";

export const ArticlesPage = () => {
    const [btnData, setBtnData] = useState<string>("");
    const isOpen = useAppSelector((state) => state.tenderData.isOpen);
    const dispatch = useAppDispatch();

    const handleСlose = () => {
        dispatch(
            setOpenClose({
                isOpen: !isOpen
            })
        );
    };

    React.useEffect(() => {
        ScrollToTop.instant();
        return () => ScrollToTop.instant();
    }, []);
    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }} className={s.box}>
                <div className={s.heading}>
                    <h3>Помощь на электронных площадках</h3>
                </div>
                <div className={s.subtitle}>
                    <ResponsiveGrid grid={"grid2"} setBtnData={setBtnData} />
                </div>
            </Box>
        </Container>
    );
};
