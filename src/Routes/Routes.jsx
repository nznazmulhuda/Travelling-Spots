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

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
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
                loader: () => fetch("http://localhost:5000/addSpots")
            },
            {
                path: "/details/:id",
                element: <PrivateRoute>
                    <SingleSpot />
                </PrivateRoute>
            }
        ]
    }
])

export default Router;