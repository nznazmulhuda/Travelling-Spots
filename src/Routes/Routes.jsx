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
import SingleSpot from "../Pages/SingleSpot/SingleSpot";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Country from "../Pages/Country/Country";
import EmailVerify from "../Pages/EmailVerify/EmailVerify";
import EmailVerifyRoute from "./EmailVerifyRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: ()=> fetch("https://earth-server-side.vercel.app/category")
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
                path: "/update-tourists-spot/:id",
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
            },
            {
                path: "/details/:id",
                element: <PrivateRoute>
                    <SingleSpot />
                </PrivateRoute>
            },
            {
                path: "/category/:countryName",
                element: <Country />
            },
            {
                path: "/emailVerify",
                element: <EmailVerifyRoute>
                    <EmailVerify />
                </EmailVerifyRoute>
            }
            
        ]
    }
])

export default Router;