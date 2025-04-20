import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { getProducts } from "@/store/products/actions";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductList = () => {
  const { products, error, isLoading } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-4 mt-12">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <ProductCardSkeleton key={"product_skeleton_" + index} />
          ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        <p>Bir hata oluştu, lütfen daha sonra tekrar deneyin.</p>
      </div>
    );
  }
  return (
    <>
      <div className="my-4 text-violet-900 font-medium">
        {products.length} ürün gösteriliyor
      </div>

      <div className="grid grid-cols-4 gap-2">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
