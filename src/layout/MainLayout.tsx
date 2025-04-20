import Header from "@/components/layouts/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="mt-28 container">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
