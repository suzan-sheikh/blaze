import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav/>   
      </div>

      <div className="min-h-[calc(100vh-116px)]">
        <Outlet/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;