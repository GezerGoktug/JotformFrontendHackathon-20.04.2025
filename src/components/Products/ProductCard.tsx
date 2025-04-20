import { CirclePlus, Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { useState } from "react";
import { addCart } from "@/store/cart/actions";
import { IProduct } from "@/types/types";

const ProductCard = ({ product }: { product: IProduct }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card>
      <CardContent>
        <img
          src={product.img}
          className="h-48 mx-auto object-contain my-6"
          alt={product.name}
        />

        <div>
          <h6 className="font-semibold text-xl">{product.name}</h6>
          <p className="text-muted-foreground text-sm mb-2">
            {product.description}
          </p>
          <span className="text-primary  font-bold text-sm">
            $ {product.price.toFixed(2)}
          </span>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="col-start w-full">
          <div className="row-center gap-3">
            Quantity:
            <div className="row-center gap-2 ">
              <Button
                onClick={() =>
                  setQuantity(quantity === 1 ? quantity : quantity - 1)
                }
                variant="success"
                className="size-8"
              >
                <Minus />
              </Button>
              <div className="border shadow-sm size-8 text-sm font-semibold flex-center rounded-md">
                {quantity}
              </div>
              <Button
                onClick={() => setQuantity(quantity + 1)}
                variant="success"
                className="size-8"
              >
                <Plus />
              </Button>
            </div>
          </div>
          <Button
            onClick={() =>
              addCart({
                ...product,
                quantity,
              })
            }
            className="mt-6 ms-auto"
            variant="success"
          >
            <CirclePlus />
            Add to cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
