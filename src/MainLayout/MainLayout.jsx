import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar/Navbar";
import Footer from "../Componets/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;