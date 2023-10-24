import { Outlet } from "react-router-dom";
import Footer from "../pages/shered/footer/footer";
import Navbar from "../pages/shered/navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;