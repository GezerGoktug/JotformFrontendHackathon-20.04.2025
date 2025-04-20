import { Button } from "@/components/ui/button";
import { MoveRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-[calc(100vh-84.8px)] -mt-8 flex-center ">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 leading-tight">
            Fresh & Organic <br /> Groceries Delivered
          </h1>
          <p className="text-gray-700 text-lg">
            Shopiora makes it easier to shop your favorite fruits and veggies,
            right from your home.
          </p>
          <Link to="/products">
            <Button className="bg-purple-700 hover:bg-purple-800 text-white text-lg px-6 py-3 rounded-xl">
              Shop Now <MoveRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="flex justify-center ">
          <ShoppingBag className="size-96 " />
        </div>
      </div>
    </section>
  );
};

export default Home;
