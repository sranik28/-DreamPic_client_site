import React from 'react';
import Sidebar from '../Dashboard.jsx/Components/shard/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <main className="grid grid-cols-dashboard-md">
            <Sidebar />
            <main className="md:absolute left-dashboard-md md:w-dashboard-body h-full bg-[#F3F3F3] ">
                <div className="max-w-[992px] mx-auto">
                    <Outlet />
                </div>
            </main>
        </main>
    );
};

export default Dashboard;