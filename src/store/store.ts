import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import favProducts from "./favProducts";
import products from "./products";
import { useDispatch, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    cart,
    products,
    favProducts,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected
) => useSelector(selector);
