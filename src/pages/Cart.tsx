import { useTotalQuantity } from "@/store/cart/hooks";
import Cash from "@/components/Cart/Cash";
import CartItems from "@/components/Cart/CartItems";

const Cart = () => {
  const totalCount = useTotalQuantity();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Sepetim</h1>

      {totalCount === 0 ? (
        <p className="text-muted-foreground">Sepetiniz şu anda boş.</p>
      ) : (
        <div className="flex gap-12">
          <CartItems />
          <Cash />
        </div>
      )}
    </div>
  );
};

export default Cart;
