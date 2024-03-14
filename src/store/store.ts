import { configureStore, ThunkAction, ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { tenderDataSliceReducer } from "./tenderDataSlice";

export const store = configureStore({
    reducer: {
        tenderData: tenderDataSliceReducer
    }
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
