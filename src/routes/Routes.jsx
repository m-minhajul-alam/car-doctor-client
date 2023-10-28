import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import SingUp from "../pages/singup/SingUp";
import CheakOut from "../pages/cheakOut/CheakOut";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoute from "./PrivedRouter";
import About from "../pages/home/about/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cheakout/:id',
                element: <PrivateRoute><CheakOut></CheakOut></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: 'bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            }
        ]
    }
])

export default router;