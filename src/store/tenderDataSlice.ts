import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModeType = "toApplyGrid1" | "toApplyApplication" | "toApplyCall" | "";
const initialState = {
    isOpen: false,
    mode: "" as ModeType,
    isChatOpen: false
};

const tenderDataSlice = createSlice({
    name: "tenderData",
    initialState,
    reducers: {
        setOpenClose: (state, action: PayloadAction<{ isOpen: boolean }>) => {
            state.isOpen = action.payload.isOpen;
        },
        setChatOpenClose: (state, action: PayloadAction<{ isChatOpen: boolean }>) => {
            state.isChatOpen = action.payload.isChatOpen;
        },
        setMode: (state, action: PayloadAction<{ mode: ModeType }>) => {
            state.mode = action.payload.mode;
        }
    }
});

export const { setOpenClose, setChatOpenClose, setMode } = tenderDataSlice.actions;
export const tenderDataSliceReducer = tenderDataSlice.reducer;
