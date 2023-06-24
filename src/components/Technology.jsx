import React from 'react';
import banner from "../assets/banner/banner5.png"
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Technology = () => {
    const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    return (
        <div className='max-w-[1240px] mx-auto px-3'>
            <motion.div
                className='my-20 border-indigo-500 border-x-4' style={{
                    scale
                  }}>
                <h1 className='text-4xl font-bold text-center md:text-6xl'>Facilities & <span className='text-[#4c5696]'>Technology</span></h1>
                <p className='my-3 text-xl text-center'>This is our all facilities and technology</p>
            </motion.div>
            <div className='grid items-center grid-cols-2 gap-4 my-24'>

                
                <div>
                    <p className='text-xl'>The latest in software and equipment is essential to preparing you to enter the work force, which is why our digital photography schools keep up with current advancements in the latest photographic technology and industry practices. Whatever the pros are doing and whatever the pros are using is what you will find in our classrooms and studios.</p>
                    <button className='hover:bg-[#4c5696] border-2 border-[#4c5696]  rounded-md font-semibold py-3 px-5 hover:text-white duration-500 hover:scale-105 transition-all my-5'>View All Facilities</button>
                </div>
                <img className='w-full h-full rounded-md' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Technology;
