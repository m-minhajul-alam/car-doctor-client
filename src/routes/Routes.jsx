import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import SingUp from "../pages/singup/SingUp";
import CheakOut from "../pages/cheakOut/CheakOut";
import Bookings from "../pages/bookings/Bookings";

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
                element: <CheakOut></CheakOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
              path: 'bookings', 
              element: <Bookings></Bookings>
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