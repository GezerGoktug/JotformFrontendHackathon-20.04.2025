import { ICartItem } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";


interface ICartState {
  cart: ICartItem[];
}

const initialState: ICartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //! Ürün ekleme işlevi
    __addCart(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        //! Ürün zaten sepetteyse miktarı artır
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        //! Sepette yoksa yeni ürün olarak ekle
        const newItem = {
          ...action.payload,
          quantity: action.payload.quantity || 1,
        };
        state.cart.push(newItem);
      }
    },
    //! Ürün silme işlevi
    __removeCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    //! Sepeti temizleme işlevi
    __clearCart(state) {
      state.cart = [];
    },
    //! Ürün miktarını artırma işlevi
    __increaseQuantity(state, action) {
      state.cart.forEach((item) => {
        if (item.id === action.payload) item.quantity++;
      });
    },
    //! Ürün miktarını azaltma işlevi
    __decreaseQuantity(state, action) {
      const product = state.cart.find((item) => item.id == action.payload);
      //! Miktar 1 ise ürünü sepetten çıkarma
      if (product?.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      } else {
        state.cart.forEach((item) => {
          if (item.id === action.payload) item.quantity--;
        });
      }
    },
  },
});
export const {
  __addCart,
  __clearCart,
  __decreaseQuantity,
  __increaseQuantity,
  __removeCart,
} = cartSlice.actions;

export default cartSlice.reducer;
