import { useFavorites } from "@/store/favProducts/hooks";
import { ReactNode, useEffect } from "react";

const FavProductListener = ({ children }: { children: ReactNode }) => {
  const favProducts = useFavorites();
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favProducts));
  }, [favProducts]);

  return <>{children}</>;
};

export default FavProductListener;
