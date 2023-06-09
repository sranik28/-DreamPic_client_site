import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Sidebar from '../Dashboard.jsx/Sidebar';


const Dashboard = () => {
    return (
        <main className="grid grid-cols-dashboard-md">
            <Helmet>
                <title>DreamPic | Home</title>
            </Helmet>
            <Sidebar />
            <main className="h-full  md:absolute left-dashboard-md md:w-dashboard-body">
                <div className="w-full px-3 mx-auto">
                    <Outlet />
                </div>
            </main>
        </main>
    );
};

export default Dashboard;