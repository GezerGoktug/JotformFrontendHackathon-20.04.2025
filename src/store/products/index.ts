import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actions";
import { IProduct } from "@/types/types";

interface IInitialState {
  error: boolean;
  isLoading: boolean;
  products: IProduct[];
}

const initialState: IInitialState = {
  error: false,
  isLoading: false,
  products: [],
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default productsSlice.reducer;
