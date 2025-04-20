import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import FavProducts from "./pages/FavProducts";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favProducts" element={<FavProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
