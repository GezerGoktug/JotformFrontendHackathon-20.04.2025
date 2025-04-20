import { useCart } from "@/store/cart/hooks";
import { ReactNode, useEffect } from "react";

const CartListenerProvider = ({ children }: { children: ReactNode }) => {
  const cart = useCart();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return <>{children}</>;
};

export default CartListenerProvider;
