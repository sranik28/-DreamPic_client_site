import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Sidebar from '../Dashboard.jsx/student/Sidebar';

const Dashboard = () => {
    return (
        <main className="grid grid-cols-dashboard-md">
            <Helmet>
                <title>DreamPic | Home</title>
            </Helmet>
        <Sidebar/>
        <main className="md:absolute left-dashboard-md md:w-dashboard-body h-full bg-[#F3F3F3] ">
            <div className="max-w-[992px] mx-auto">
                <Outlet/>
            </div>
        </main>
    </main>
    );
};

export default Dashboard;