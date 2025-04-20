import { ShoppingCart } from "lucide-react";

const Logo = () => {
  return (
    <div className="row-center gap-2">
      <ShoppingCart size={25} className="text-white bg-primary size-8 p-2 rounded-full overflow-visible"/>
      <span className="font-playfair text-gradient-r from-violet-500 to-violet-900 font-bold text-3xl">
        Shopiora
      </span>
    </div>
  );
};

export default Logo;
