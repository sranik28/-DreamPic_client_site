import React, { useState } from 'react';
import experience from '../assets/experience/29265_course-portal-desktop-1x.jpg'
import { AnimatePresence, motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;


const Experience = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);


    return (
        <div className='max-w-[1240px] mx-auto px-3 md:px-0'>
            <div

                className='my-20 border-indigo-500 border-x-4' >
                <h1 className='text-4xl font-bold text-center md:text-6xl'>An experience <span className='text-[#4c5696]'>you'll never forget</span></h1>
                <p className='my-3 text-xl text-center'>Delivered on our beautifully-crafted course portal.</p>
            </div>
            <div className='items-center gap-10 my-20 md:flex'>
                <AnimatePresence>
                    <motion.div
                        initial={{ x: '-100vw' }}
                        animate={{ x: isInView ? 0 : "-100vw" }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        onViewportEnter={() => setScroll(true)}
                    >
                        <h2 className='flex mb-8 text-5xl font-bold md:mb-0'>
                            Simple. <br /> Stunning. <br /> Convenient.
                        </h2>
                    </motion.div>
                </AnimatePresence>
                <div>
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
                    className='w-full h-full rounded-md' src={experience} alt="" onLoad={() => setIsLoaded(true)} />
                </div>
            </div>
        </div >
    );
};

export default Experience;