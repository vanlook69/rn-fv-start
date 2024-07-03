import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";

export const useTypedSelector = useSelector;
export const useAppDispatch = () => useDispatch();
