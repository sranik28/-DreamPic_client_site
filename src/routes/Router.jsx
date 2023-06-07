import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Classes from "../pages/Classes";
import Instructors from "../pages/Instructors";
import Login from "../pages/Login";
import Error from "../components/Error";
import Registration from "../pages/Registration";
import Dashboard from "../layouts/Dashboard";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/classes',
                element: <Classes />
            },
            {
                path: '/instructors',
                element: <Instructors />
            },
            // {
            //     path: '/dashboard',
            //     element: <Dashboard />
            // },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Registration />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <Error />,
        children: [
            {

            }
        ]
    }
]);

export default Router