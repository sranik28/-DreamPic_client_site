import { Link, NavLink } from "react-router-dom";
import logo from "/logo.svg"

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import useDark from "../hook/useDark";


const Sidebar = () => {
    const { role } = useAuthorization()
    const [isDark, setIsdark] = useState(null)
    useDark(isDark)

    return (
        <aside className="fixed top-0 bottom-0 h-screen p-10 shadow-2xl w-dashboard-md">
            <div className="flex items-center gap-3">
                <Link to={`/dashboard/${role === "admin" ? "manage-classes" : role === "instructor" ? "add-class" : "selected-classes"}`} className="flex items-center gap-1 -ml-10">
                    <img className="h-[50px]" src={logo} alt="" /> <h3 className="text-2xl font-bold uppercase">{role}</h3>
                </Link>
                <button className="block -mr-10">
                    {isDark ? <BsFillSunFill className="cursor-pointer" onClick={() => setIsdark(false)} /> : <BsFillMoonStarsFill className="cursor-pointer" onClick={() => setIsdark(true)} />}
                </button>
            </div>
            <ul className="mt-[60px]">

                {
                    role === "admin" ? <>
                        <li className="mt-4 font-bold"><NavLink to="/dashboard/manage-classes" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center" : "uppercase flex gap-2 text-[16px] items-center"}><span>Manage Classes</span></NavLink></li>
                        <li className="mt-4 font-bold"><NavLink to="/dashboard/manage-users" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center" : "uppercase flex gap-2 text-[16px] items-center"}><span>Manage Users</span></NavLink></li>
                    </>
                        :
                        role === "instructor" ? <>
                            <li className="mt-4 font-bold"><NavLink to="/dashboard/add-class" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center" : "uppercase flex gap-2 text-[16px] items-center"}><span>Add Class</span></NavLink></li>
                            <li className="mt-4 font-bold"><NavLink to="/dashboard/my-classes" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center" : "uppercase flex gap-2 text-[16px] items-center"}><span>My Classes</span></NavLink></li>
                        </> :
                            <>
                                <li className="mt-4 font-bold"><NavLink to="/dashboard/payment-history" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center" : "uppercase flex gap-2 text-[16px] items-center"}><span>Payment History</span></NavLink></li>
                                <li className="mt-4 font-bold"><NavLink to="/dashboard/selected-classes" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center" : "uppercase flex gap-2 text-[16px] items-center"}><span>Selected Classes</span></NavLink></li>
                                <li className="mt-4 font-bold"><NavLink to="/dashboard/enrolled-classes" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center" : "uppercase flex gap-2 text-[16px] items-center"}><span>Enrolled Classes</span></NavLink></li>
                            </>
                }


            </ul>
        </aside>
    );
};

export default Sidebar