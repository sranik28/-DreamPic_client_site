import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineDarkMode } from 'react-icons/md';
import { HiMenuAlt2, HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import useDark from '../../hook/useDark';

const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    const [isDark, setIsdark] = useState(null)
    useDark(isDark)


    return (
        <nav className='flex items-center justify-between px-3 py-5 text-white bg-black/90 md:px-10'>
            <span className='md:hidden'>
                {
                    toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} /> : <HiMenuAlt2 onClick={() => setToggle(!toggle)} />
                }

            </span>
            <div>
                <Link to='/'><h1>anik</h1></Link>
            </div>

            <ul className={`font-semibold flex items-center duration-300 flex-col py-5 md:p-0 text-white bg-opacity-90 top-20 bg-black md:bg-transparent w-full md:w-auto md:flex-row gap-6 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/instructors">Instructors</NavLink>
                </li>
                <li>
                    <NavLink to="/classes">Classes</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">Dashboard </NavLink>
                </li>
            </ul>
            <div className='flex items-center gap-5'>
                <Link to='/login'><button className=''>Login</button></Link>
                {
                    isDark ? <MdOutlineDarkMode onClick={() => setIsdark(!isDark)} /> : <HiOutlineLightBulb onClick={() => setIsdark(!isDark)} />
                }
            </div>
        </nav>
    );
};

export default NavBar;