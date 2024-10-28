import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Home from "../Components/Home";
import Profile from "../Components/Profile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/profile',
        element:<Profile></Profile>
    }
])

export default router;