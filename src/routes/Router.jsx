import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Classes from "../pages/Classes";
import Instructors from "../pages/Instructors";
import Login from "../pages/Login";
import Error from "../components/Error";
import Registration from "../pages/Registration";
import Dashboard from "../layouts/Dashboard";
import PrivateRouter from "../private/PrivateRoute";
import AddClass from "../Dashboard.jsx/Instructors/shared/AddClass";
import Table from "../Dashboard.jsx/Table";




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
        element: <PrivateRouter><Dashboard /></PrivateRouter>,
        errorElement: <Error />,
        children: [
            {
                path: '/dashboard/table',
                element: <Table />
            },
            {
                path: '/dashboard/addClass',
                element: <AddClass />
            },
        ]
    }
]);

export default Router;