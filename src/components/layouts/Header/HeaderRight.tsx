import Tooltip from "@/components/common/Tooltip";
import { useTotalQuantity } from "@/store/cart/hooks";
import { ShoppingBag, ListCollapse, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  {
    label: "Cart",
    href: "/cart",
    icon: ShoppingBag,
    cart_icons: true,
  },
  {
    label: "Products",
    href: "/products",
    icon: ListCollapse,
  },
  {
    label: "Favourites",
    href: "/fav",
    icon: Heart,
  },
];

const HeaderRight = () => {
  const totalQuantities = useTotalQuantity();
  return (
    <ul className="row-center gap-6">
      {items.map(({ href, icon: Icon, cart_icons, label }, index) => (
        <Tooltip key={"header_right_" + index} message={label}>
          <li className="relative">
            <NavLink
              to={href}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <Icon size={25} />
              {cart_icons && (
                <span className="absolute -top-1 -right-1     size-[15px] text-xs text-center text-foreground flex-center rounded-full    bg-success">
                  {totalQuantities}
                </span>
              )}
            </NavLink>
          </li>
        </Tooltip>
      ))}
    </ul>
  );
};

export default HeaderRight;
