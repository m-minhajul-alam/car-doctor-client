import { Outlet } from "react-router-dom";
import Footer from "../pages/shered/footer/footer";


const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;