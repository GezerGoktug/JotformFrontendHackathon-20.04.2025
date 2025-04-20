import { clearCart } from "@/store/cart/actions";
import { Button } from "../ui/button";
import { useTotalPrice, useTotalQuantity } from "@/store/cart/hooks";
import CheckoutForm from "./CheckoutForm";

const Cash = () => {
  const totalItemCount = useTotalQuantity();
  const totalPrice = useTotalPrice();
  return (
    <div className="w-[600px]">
      <div className="flex-between mb-4">
        <div className="space-y-1">
          <p className="text-lg font-medium">Toplam Ürün: {totalItemCount}</p>
          <p className="text-xl font-bold">Ara Toplam: {totalPrice} ₺</p>
        </div>
        <Button variant="outline" onClick={() => clearCart()}>
          Sepeti Temizle
        </Button>
      </div>

      <CheckoutForm />
    </div>
  );
};

export default Cash;
