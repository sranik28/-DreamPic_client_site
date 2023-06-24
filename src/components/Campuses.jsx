import React from 'react';
import campuses1 from "../assets/Campuses/Campuses1.png"
import campuses2 from "../assets/Campuses/Campuses2.png"
import campuses3 from "../assets/Campuses/Campuses3.png"

const Campuses = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-3 '>
            <div
                className='my-20 border-indigo-500 border-x-4'>
                <h1 className='text-4xl font-bold text-center md:text-6xl'>Our <span className='text-[#4c5696]'>Campuses</span></h1>
                <p className='my-3 text-xl text-center'>This is our Campuses</p>
            </div>
            <div className='grid gap-10 px-3 md:grid-cols-3'>
                <div className='relative transition-all duration-300 ease-in-out hover:scale-105'>
                    <img className='object-center w-full rounded-md h-72 ' src={campuses1} alt="" />
                    <h2 className='text-2xl p-2 font-semibold absolute top-[50%] left-[50%] bg-gradient-to-r hover:duration-300 rounded-md from-black/50 w-full h-full translate-x-[-50%] translate-y-[-50%] text-white/90 hover:text-[#4c5696]'>United States</h2>
                </div>
                <div className='relative transition-all duration-300 ease-in-out hover:scale-105'>
                    <img className='object-center w-full rounded-md h-72 ' src={campuses2} alt="" />
                    <h2 className='text-2xl font-semibold absolute top-[50%] left-[50%] bg-gradient-to-r hover:duration-300 rounded-md from-black/75 w-full h-full translate-x-[-50%] translate-y-[-50%] text-white/90  hover:text-[#4c5696] p-2'> Italy Florence</h2>
                </div>
                <div className='relative transition-all duration-300 ease-in-out hover:scale-105'>
                    <img className='object-center w-full rounded-md h-72 ' src={campuses3} alt="" />
                    <h2 className='text-2xl p-2 font-semibold absolute top-[50%] left-[50%] bg-gradient-to-r hover:duration-300 rounded-md from-black/75 w-full h-full translate-x-[-50%] translate-y-[-50%] text-white/90  hover:text-[#4c5696]'> Online</h2>
                </div>
            </div>
        </div>
    );
};

export default Campuses;