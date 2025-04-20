import Header from "@/components/layouts/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="mt-24">
        <Outlet />
      </main>
      Footer
    </div>
  );
};

export default MainLayout;
