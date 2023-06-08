import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineDarkMode } from 'react-icons/md';
import { HiMenuAlt2, HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import useDark from '../../hook/useDark';
import { useAuthGlobally } from '../../context/AuthProvider';

// import logo from '../../assets/logo.png'

const NavBar = () => {

    const [toggle, setToggle] = useState(false);
    const [isDark, setIsdark] = useState(null)
    useDark(isDark)
    const { user, logOut } = useAuthGlobally();


    return (
        <nav className='flex items-center justify-between w-full px-3 py-5 text-white bg-black/90 md:px-10'>
            <span className='md:hidden'>
                {
                    toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} /> : <HiMenuAlt2 onClick={() => setToggle(!toggle)} />
                }

            </span>
            <div className='flex items-center '>
                {/* <img className='w-40' src={logo} alt="" /> */}
                <Link to='/'><h1 className='text-3xl font-bold'><span className='text-[#4c5696]'>Dream</span>Pic</h1></Link>
            </div>

            <ul className={`font-semibold flex items-center duration-300 flex-col py-5 md:p-0 text-white bg-opacity-90 top-[11.3%] bg-black md:bg-transparent w-36 md:w-auto md:flex-row rounded-md   gap-6 absolute md:static z-50 ${toggle ? "top-0 left-0" : "-left-full duration-300"}`}>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/instructors">Instructors</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/classes">Classes</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/dashboard">Dashboard </NavLink>
                </li>
                <li>
                    {
                        user?.email ? <Link to='/login'><button onClick={logOut}  className='px-5 py-2 bg-[#4c5696] rounded-md'>LogOut</button></Link> : <Link to='/login'><button onClick={logOut} className='px-5 py-2 bg-[#4c5696] rounded-md'>login</button></Link>
                    }
                </li>
            </ul>
            <div className='flex items-center gap-5'>
                {
                    user?.photoURL ? <img className="w-[35px] h-[35px] rounded-full" src={user.photoURL} title={user.displayName} alt="" /> : <></>
                }

                <button>
                    {isDark ? <HiOutlineLightBulb className="cursor-pointer" onClick={() => setIsdark(false)} /> : <MdOutlineDarkMode className="cursor-pointer" onClick={() => setIsdark(true)} />}
                </button>
            </div>
        </nav>
    );
};

export default NavBar;