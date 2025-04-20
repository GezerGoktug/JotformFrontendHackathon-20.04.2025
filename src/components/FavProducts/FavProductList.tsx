import { useFavorites } from "@/store/favProducts/hooks";
import ProductCard from "../Products/ProductCard";

const FavProductList = () => {
  const favProducts = useFavorites();

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {favProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};

export default FavProductList;
