import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Classes from "../pages/Classes";
import Instructors from "../pages/Instructors";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Error from "../components/Error";


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
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    }
]);

export default Router