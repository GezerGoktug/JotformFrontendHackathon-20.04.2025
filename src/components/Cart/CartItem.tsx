import { ICartItem } from "@/types/types";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  decreaseQuantity,
  increaseQuantity,
  removeCart,
} from "@/store/cart/actions";

const CartItem = ({ item }: { item: ICartItem }) => {
  return (
    <Card key={item.id} className="row-center gap-4 mb-4 p-4">
      <img
        src={item.img}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-sm text-muted-foreground">{item.description}</p>
        <p className="mt-1 text-md font-medium">
          {item.price * item.quantity} ₺
        </p>
      </div>

      <div className="row-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={() => decreaseQuantity(item.id)}
        >
          -
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={() => increaseQuantity(item.id)}
        >
          +
        </Button>
      </div>

      <div>
        <Button variant="destructive" onClick={() => removeCart(item.id)}>
          Sil
        </Button>
      </div>
    </Card>
  );
};

export default CartItem;
