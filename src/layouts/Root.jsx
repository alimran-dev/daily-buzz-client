import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedComponents/Navbar";
import Footer from "../pages/SharedComponents/Footer/Footer";

const Root = () => {
    return (
        <div className="container mx-auto min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;