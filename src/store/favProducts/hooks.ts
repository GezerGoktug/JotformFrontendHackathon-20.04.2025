import { useAppSelector } from "../store";

export const useFavorites = () =>
  useAppSelector((state) => state.favProducts.favorites);

export const useTotalFavorites = () => {
  const favorites = useAppSelector((state) => state.favProducts.favorites);
  return favorites.length;
};

export const useIsFavorite = (productId: string | number) => {
  const favorites = useAppSelector((state) => state.favProducts.favorites);
  return favorites.some((item) => item.id === productId);
};
