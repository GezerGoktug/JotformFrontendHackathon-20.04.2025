import { useAppSelector } from "@/store/store";

import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useAppSelector((state) => state.products);

  const selectedProduct = products.find((item) => item.id === id);

  if (!selectedProduct) {
    return (
      <div className="text-center text-muted-foreground mt-10">
        Ürün bulunamadı.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="flex flex-col md:flex-row gap-6">
        <img
          src={selectedProduct.img}
          alt={selectedProduct.name}
          className="w-full md:w-1/2 object-cover rounded-xl"
        />
        <CardContent className="flex flex-col justify-between gap-4">
          <div>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                {selectedProduct.name}
              </CardTitle>
              <Badge className="mt-2 text-sm w-max " variant="default">
                {selectedProduct.price}₺
              </Badge>
            </CardHeader>
            <p className="text-sm text-muted-foreground mt-4">
              {selectedProduct.description}
            </p>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="default">Sepete Ekle</Button>
            <Button variant="outline">Favorilere Ekle</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
