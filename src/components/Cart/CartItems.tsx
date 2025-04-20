import { ScrollArea } from "../ui/scroll-area";
import { useCart } from "@/store/cart/hooks";

import CartItem from "./CartItem";

const CartItems = () => {
  const cart = useCart();
  
  return (
    <ScrollArea className="h-[500px] w-full pr-2">
      {cart.map((item) => (
        <CartItem key={"cart_item" + item.id} item={item} />
      ))}
    </ScrollArea>
  );
};

export default CartItems;
