import { Link, NavLink } from "react-router-dom";
// import logo from "/logo.svg"
// import { BsFillMoonStarsFill} from "react-icons/bs";
import { useState } from "react";
import useAuthorization from "../hook/useAuthorization";
import useDark from "../hook/useDark";
import { MdOutlineDarkMode } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";


const Sidebar = () => {
    // const { role } = useAuthorization();
    const [isDark, setIsdark] = useState(null);
    useDark(isDark);
    const [role, setRole] = useState('instructor')
    return (
        <aside className="fixed top-0 bottom-0 h-screen p-10 shadow-2xl w-dashboard-md bg-[#1b1e34]">
            <div className="flex items-center justify-center gap-3 text-white">
                <Link to={`/dashboard/${role === "admin" ? "manage-class" : role === "instructor" ? "add-class" :  "my-select-class"}`} className="flex items-center gap-1 -ml-10">
                    {/* <img className="h-[50px]" src={logo} alt="" />  */}
                    <h3 className="text-2xl font-bold uppercase">{role}</h3>
                </Link>
                <button className="block -mr-10">
                    {isDark ? <HiOutlineLightBulb className="cursor-pointer" onClick={() => setIsdark(false)} /> : <MdOutlineDarkMode className="cursor-pointer" onClick={() => setIsdark(true)} />}
                </button>
            </div>
            <ul className="mt-[60px] text-white">

                {
                    role === "admin" ? <>
                        <li className="mt-4 font-bold"><NavLink to="/dashboard/manage-class" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center text-black uppercase " : " flex gap-2 text-[16px] items-center"}><span>Manage Classes</span></NavLink></li>
                        <li className="mt-4 font-bold"><NavLink to="/dashboard/manage-users" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center text-black uppercase" : " flex gap-2 text-[16px] items-center"}><span>Manage Users</span></NavLink></li>
                    </>
                        :
                        role === "instructor" ? <>
                            <li className="mt-4 font-bold"><NavLink to="/dashboard/add-class" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center text-black uppercase " : " flex gap-2 text-[16px] items-center"}><span>Add Class</span></NavLink></li>
                            <li className="mt-4 font-bold"><NavLink to="/dashboard/my-class" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center text-black uppercase " : " flex gap-2 text-[16px] items-center"}><span>My Classes</span></NavLink></li>
                        </> :
                            <>
                                <li className="mt-4 font-bold"><NavLink to="/dashboard/payment-history" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center text-black uppercase" : " flex gap-2 text-[16px] items-center"}><span>Payment History</span></NavLink></li>
                                <li className="mt-4 font-bold"><NavLink to="/dashboard/my-select-class" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center text-black uppercase " : "flex gap-2 text-[16px] items-center"}><span>Selected Classes</span></NavLink></li>
                                <li className="mt-4 font-bold"><NavLink to="/dashboard/my-enroll-class" className={({ isActive }) => isActive ? "d-active flex gap-2 text-[16px] items-center text-black uppercase" : " flex gap-2 text-[16px] items-center"}><span>Enrolled Classes</span></NavLink></li>
                            </>
                }

            </ul>
            <button className="block px-6 py-3 mx-auto mt-48 text-white uppercase bg-black rounded-md"><Link to='/'>Home</Link></button>
        </aside>
    );
};

export default Sidebar