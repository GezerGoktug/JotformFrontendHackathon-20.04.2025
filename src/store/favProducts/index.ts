import { ICartItem } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

type IFavoriteItem = Omit<ICartItem, "quantity">;

interface IFavoritesState {
  favorites: IFavoriteItem[];
}

const initialState: IFavoritesState = {
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites") as string)
    : [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    __addFavorite(state, action) {
      const existingItem = state.favorites.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.favorites.push(action.payload);
      }
    },

    __removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },

    __clearFavorites(state) {
      state.favorites = [];
    },

    __toggleFavorite(state, action) {
      const existingItemIndex = state.favorites.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        state.favorites.splice(existingItemIndex, 1);
      } else {
        // Değilse ekle
        state.favorites.push(action.payload);
      }
    },
  },
});

export const {
  __addFavorite,
  __removeFavorite,
  __clearFavorites,
  __toggleFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
