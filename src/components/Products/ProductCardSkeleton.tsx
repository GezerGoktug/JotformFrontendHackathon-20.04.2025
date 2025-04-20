import { Card, CardContent, CardFooter } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card>
      <CardContent>
        <Skeleton className="h-48 mt-2 w-full bg-gray-300 rounded-md" />
        <div className="mt-6">
          <Skeleton className="h-6 w-3/4 bg-gray-300" />
          <Skeleton className="h-4 mt-2 w-1/2 bg-gray-300" />
          <Skeleton className="h-4 mt-4 w-1/4 bg-gray-300" />
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="col-start w-full">
          <div className="row-center gap-3">
            <Skeleton className="h-8 w-24 bg-gray-300 rounded-md" />
          </div>
          <Skeleton className="mt-6 h-10 w-full bg-gray-300 rounded-md" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
