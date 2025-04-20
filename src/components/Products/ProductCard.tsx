import { CirclePlus, Heart, Minus, Plus, X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { useState } from "react";
import { addCart } from "@/store/cart/actions";
import { IProduct } from "@/types/types";
import { useIsFavorite } from "@/store/favProducts/hooks";
import { addFavorite, removeFavorite } from "@/store/favProducts/actions";

const ProductCard = ({ product }: { product: IProduct }) => {
  const [quantity, setQuantity] = useState(1);

  const isFavorite = useIsFavorite(product.id);

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
          <div className="flex-between w-full mt-6">
            {isFavorite ? (
              <Button
                onClick={() => removeFavorite(product.id)}
                className="my-auto"
                variant="destructive"
              >
                <X />
              </Button>
            ) : (
              <Button
                onClick={() => addFavorite(product)}
                className="my-auto"
                variant="destructive"
              >
                <Heart />
              </Button>
            )}
            <Button
              onClick={() =>
                addCart({
                  ...product,
                  quantity,
                })
              }
              className=" ms-auto"
              variant="success"
            >
              <CirclePlus />
              Add to cart
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
