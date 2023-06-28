import React from 'react';
import gallery1 from "../assets/gallery/gallery1.png"
import gallery2 from "../assets/gallery/gallery2.png"
import gallery3 from "../assets/gallery/gallery3.png"
import gallery4 from "../assets/gallery/gallery4.png"
import gallery5 from "../assets/gallery/gallery5.png"
import gallery6 from "../assets/gallery/gallery6.png"


const Gallery = () => {

    return (
        <div className='max-w-[1240px] mx-auto px-3'>
            <div
                className='my-20 border-indigo-500 border-x-4' >
                <h1 className='text-4xl font-bold text-center md:text-6xl'>Our <span className='text-[#4c5696]'>Gallery</span></h1>
                <p className='my-3 text-xl text-center'>This is our top student picture</p>
            </div>
            <div className='grid gap-10 px-3 md:grid-cols-3'>
                <div className='p-3 transition duration-300 ease-in-out scale-105 border-2 border-gray-700 shadow-lg hover:shadow-inner shadow-black'>
                    <img className='w-full h-full transition duration-300 ease-in-out hover:scale-105' src={gallery4} alt="" />

                </div>
                <div className='p-3 transition duration-300 ease-in-out scale-105 border-2 border-gray-700 shadow-lg hover:shadow-inner shadow-black'>
                    <img className='w-full h-full transition duration-300 ease-in-out hover:scale-105' src={gallery5}alt="" />

                </div>
                <div className='p-3 transition duration-300 ease-in-out scale-105 border-2 border-gray-700 shadow-lg hover:shadow-inner shadow-black'>
                    <img className='w-full h-full transition duration-300 ease-in-out hover:scale-105' src={gallery6} alt="" />

                </div>
                <div className='p-3 transition duration-300 ease-in-out scale-105 border-2 border-gray-700 shadow-lg hover:shadow-inner shadow-black'>
                    <img className='w-full h-full transition duration-300 ease-in-out hover:scale-105' src={gallery1} alt="" />

                </div>
                <div className='p-3 transition duration-300 ease-in-out scale-105 border-2 border-gray-700 shadow-lg hover:shadow-inner shadow-black'>
                    <img className='w-full h-full transition duration-300 ease-in-out hover:scale-105' src={gallery2} alt="" />

                </div>
                <div className='p-3 transition duration-300 ease-in-out scale-105 border-2 border-gray-700 shadow-lg hover:shadow-inner shadow-black'>
                    <img className='w-full h-full transition duration-300 ease-in-out hover:scale-105' src={gallery3} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Gallery;