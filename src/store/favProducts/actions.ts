import { IProduct } from "@/types/types";
import {
  __addFavorite,
  __clearFavorites,
  __removeFavorite,
} from ".";
import { store } from "../store";
import toast from "react-hot-toast";

export const addFavorite = (data: IProduct) => {
  store.dispatch(__addFavorite(data));
  toast.success("Ürün favorilere eklendi!");
};

export const clearFavorites = () => {
  store.dispatch(__clearFavorites());
  toast("Favoriler temizlendi", { icon: "🧹" });
};

export const removeFavorite = (id: string) => {
  store.dispatch(__removeFavorite(id));
  toast.success("Ürün favorilerden kaldırıldı.");
};


