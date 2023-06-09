import React from 'react';
import { Link } from 'react-router-dom';
import { BsTelephoneFill, BsInstagram, BsYoutube, BsTiktok } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';
import MyIcon from './MyIcon';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className='bg-[#5d5599] '>
            <ScrollToTop smooth top={1000} component={<MyIcon />} />
            <div className=' max-w-[1240px] mx-auto py-10'>
                <div className='grid gap-4 p-5 text-white md:grid-cols-5'>
                    <div>
                        <div >
                            <Link to='/'><img className='w-20 h-20 -mb-2 ' src={logo} alt="" /></Link>
                            <h1 className='mt-2 text-2xl italic font-bold'> <span className='text-[#1b2349]'>Dream</span>Pic</h1>
                        </div>
                        <div className='flex items-center justify-center my-5'>
                            <input type="text" name="" id="" placeholder='Search...' className='w-full p-2 bg-[#1b2349] text-white rounded-s-md' />
                            <input className='outline-none px-5 py-2 bg-[#0a0c1a] rounded-e-md' type="submit" value="submit" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-black'>Resources</h1>
                        <p className='my-3'>Course Portal</p>
                        <p className='mb-3'>iPhone Photography Blog</p>
                        <p className='mb-3'>Light Room Mobile</p>
                        <p>Photography Blog</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-black'>About</h1>
                        <p className='my-3 hover:underline'><Link to='/'>Home</Link></p>
                        <p className='my-3 hover:underline'><Link to='/instructors'>Instructors</Link></p>
                        <p className='hover:underline'><Link to='/classes'>Classes</Link></p>
                        <p className='my-3 hover:underline'><Link to='/dashboard'>Dashboard</Link></p>
                        <p className='hover:underline'><Link to='/login'>Login</Link></p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-black'>Contact</h1>
                        <span className='flex items-center gap-2 my-3'><HiLocationMarker className='text-black' /><p>Mohakhali, Dhaka-1215</p></span>
                        <span className='flex items-center gap-2'><BsTelephoneFill className='text-black' /><p>+880 1259876312</p></span>
                        <span className='flex items-center gap-2'><MdEmail className='text-black' /><p className="py-2">info@DreamPic.com</p></span>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-black'>Follow Us</h1>
                        <p className='flex items-center gap-2 my-3 hover:underline'> <span><FaFacebookF className='w-5 h-5 text-blue-800' /> </span> <Link>Facebook</Link></p>
                        <p className='flex items-center gap-2 my-3 hover:underline'> <span><BsInstagram className='w-5 h-5 text-red-800' /> </span> <Link>Instagram</Link></p>
                        <p className='flex items-center gap-2 my-3 hover:underline'> <span><BsYoutube className='w-5 h-5 text-red-800' /> </span> <Link>Youtube</Link></p>
                        <p className='flex items-center gap-2 my-3 hover:underline'> <span><BsTiktok className='w-5 h-5 text-blue-800' /> </span> <Link>TikTok</Link></p>
                        <p className='flex items-center gap-2 my-3 hover:underline'> <span><AiFillLinkedin className='w-5 h-5 text-blue-800' /> </span> <Link>Linkedin</Link></p>
                    </div>
                </div>
            </div>
            <hr className='border-1 border-black max-w-[1240px] mx-auto py-5' />
            <div className="md:flex justify-between items-center text-black max-w-[1240px] mx-auto px-6 pb-8">
                <h1>&copy;2023 DreamPic
                    . All Rights Reserved</h1>
                <h1>Powered by <span className="font-bold">
                    DreamPic
                </span></h1>
            </div>
        </footer>
    );
};

export default Footer;