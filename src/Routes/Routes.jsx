import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoute from './PrivateRoute'
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import UpdateTouristSpot from "../Pages/UpdateTouristSpot/UpdateTouristSpot";
import MyLists from "../Pages/MyLists/MyLists";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:5000/addSpots")
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
            },
            {
                path: "/update-tourists-spot",
                element: <PrivateRoute>
                    <UpdateTouristSpot />
                </PrivateRoute>
            },
            {
                path: "/my-lists",
                element: <PrivateRoute>
                    <MyLists />
                </PrivateRoute>
            },
            {
                path: "/all-tourists-spot",
                element: <AllTouristsSpot />,
                loader: () => fetch("http://localhost:5000/addSpots")
            }
        ]
    }
])

export default Router;