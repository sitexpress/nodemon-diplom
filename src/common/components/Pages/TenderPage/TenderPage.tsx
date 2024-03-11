import React, { useState } from "react";
import { AppBarComponent } from "../../AppBarComponent/AppBarComponent";
import { ModeType } from "../../../../app/App";

import Box from "@mui/material/Box";
import { Container } from "@mui/material";

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
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }} style={{ paddingTop: "200px", height: "100vh" }}>
                    <h1>{heading}</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                </Box>
            </Container>
        </div>
    );
};
