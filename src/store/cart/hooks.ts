import { useAppSelector } from "../store";

export const useCart = () => useAppSelector((state) => state.cart.cart);
export const useTotalPrice = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  return cart.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
  }, 0);
};

export const useTotalQuantity = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  return cart.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);
};
