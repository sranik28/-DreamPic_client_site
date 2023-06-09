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
// import Table from "../Dashboard.jsx/Table";
import MyClass from "../Dashboard.jsx/Instructors/shared/MyClass";
import ManageClass from "../Dashboard.jsx/admin/shared/ManageClass";
import ManageUser from "../Dashboard.jsx/admin/shared/ManageUser";
import MyEnrollClass from "../Dashboard.jsx/student/shared/MyEnrollClass";
import MySelectClass from "../Dashboard.jsx/student/shared/MySelectClass";
import Payment from "../Dashboard.jsx/student/shared/Payment";
import PaymentHistory from "../Dashboard.jsx/student/shared/PaymentHistory";
import Edit from "../Dashboard.jsx/Instructors/components/Edit";



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
                path: '/dashboard/add-class',
                element: <AddClass />
            },
            {
                path: '/dashboard/my-class',
                element: <MyClass />
            },
            {
                path: '/dashboard/edit',
                element: <Edit />
            },
            {
                path: '/dashboard/manage-class',
                element: <ManageClass />
            },
            {
                path: '/dashboard/manage-users',
                element: <ManageUser />
            },
            {
                path: '/dashboard/my-enroll-class',
                element: <MyEnrollClass />
            },
            {
                path: '/dashboard/my-select-class',
                element: <MySelectClass />
            },
            {
                path: '/dashboard/payment',
                element: <Payment />
            },
            {
                path: '/dashboard/payment-history',
                element: <PaymentHistory />
            },
        ]
    }
]);

export default Router;