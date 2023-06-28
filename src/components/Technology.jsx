import React from 'react';
import banner from "../assets/banner/banner5.png"
import { useState } from "react";
import { motion } from "framer-motion";
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Technology = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);


    return (
        <div className='max-w-[1240px] mx-auto px-3'>
            <div
                className='my-20 border-indigo-500 border-x-4' >
                <h1 className='text-4xl font-bold text-center md:text-6xl'>Facilities & <span className='text-[#4c5696]'>Technology</span></h1>
                <p className='my-3 text-xl text-center'>This is our all facilities and technology</p>
            </div>
            <div className='grid items-center gap-4 my-24 md:grid-cols-2'>


                <motion.div
                initial={{x:'-100vw'}}
                animate={{ x: isInView ? 0 : "-100vw", duration:0.5  }}
                transition={{type:'spring',stiffness:120}}
                >
                    <p className='text-xl'>The latest in software and equipment is essential to preparing you to enter the work force, which is why our digital photography schools keep up with current advancements in the latest photographic technology and industry practices. Whatever the pros are doing and whatever the pros are using is what you will find in our classrooms and studios.</p>
                    <motion.button className='hover:bg-[#4c5696] border-2 border-[#4c5696]  rounded-md font-semibold py-3 px-5 hover:text-white duration-500 hover:scale-105 transition-all my-5'
                       initial={{x:'-100vw'}}
                       animate={{ x: isInView ? 0 : "-100vw", duration:0.5  }}
                       transition={{type:'spring',stiffness:120}}
                    >View All Facilities</motion.button>
                </motion.div>
                <motion.img
                    initial={false}
                    animate={
                        isLoaded && isInView
                            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                    }
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setIsInView(true)}
                    className='w-full h-full rounded-md' src={banner} alt="" onLoad={() => setIsLoaded(true)} />
            </div>
        </div>
    );
};

export default Technology;
