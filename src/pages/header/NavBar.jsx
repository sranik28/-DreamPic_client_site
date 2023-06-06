import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineDarkMode } from 'react-icons/md';
import { HiMenuAlt2, HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {

    const [toggle, setToggle] = useState(false);
    const [modeToggle, setModeToggle] = useState(false);



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
                    <NavLink to="/">Instructors</NavLink>
                </li>
                <li>
                    <NavLink to="/">Classes</NavLink>
                </li>
                <li>
                    <NavLink to="/">Dashboard </NavLink>
                </li>
            </ul>
            <div className='flex items-center gap-5'>
                <button className=''>Login</button>
                {
                    modeToggle ? <MdOutlineDarkMode onClick={() => setModeToggle(!toggle)} /> : <HiOutlineLightBulb onClick={() => setModeToggle(!toggle)} />
                }
                {/* <button><MdOutlineDarkMode /></button> */}
            </div>
        </nav>
    );
};

export default NavBar;