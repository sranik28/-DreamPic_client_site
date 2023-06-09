import React from 'react';
import experience from '../assets/experience/29265_course-portal-desktop-1x.jpg'

const Experience = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-3 md:px-0'>
            <div data-aos="zoom-in-up"
                data-aos-duration="2000"
                className='my-20 border-indigo-500 border-x-4'>
                <h1 className='text-4xl font-bold text-center md:text-6xl'>An experience <span className='text-[#4c5696]'>you'll never forget</span></h1>
                <p className='my-3 text-xl text-center'>Delivered on our beautifully-crafted course portal.</p>
            </div>
            <div className='items-center gap-10 my-20 md:flex'>
                <div data-aos="fade-right">
                    <h2 className='flex mb-8 text-5xl font-bold md:mb-0'>Simple. <br /> Stunning. <br /> Convenient.</h2>
                </div>
                <div data-aos="fade-left">
                    <img className='rounded-md' src={experience} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Experience;