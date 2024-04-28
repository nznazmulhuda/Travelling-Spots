import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoute from './PrivateRoute'
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/add-tourists-spot",
                element: <PrivateRoute>
                    <AddTouristsSpot />
                </PrivateRoute>
            }
        ]
    }
])

export default Router;