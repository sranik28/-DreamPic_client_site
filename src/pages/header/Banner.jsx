import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Typewriter from 'typewriter-effect';


const Banner = () => {

    return (
        <div className='overflow-x-hidden'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-[80vh] object-cover ' src="https://i.ibb.co/VBq5B1s/beautiful-tropical-beach-sea-with-coconut-palm-tree-74190-7463.jpg" alt="" />
                        <div className='absolute top-0 left-0 w-full h-full text-white bg-black/60'>
                            <div className='absolute md:top-40 top-48 left-20 md:left-1/3'>
                                <h1 className='my-5 text-2xl font-bold md:text-5xl'> <Typewriter
                                    options={{
                                        strings: ['Mobile Photo', 'Camera Photo', 'Photo Editing'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /> </h1>
                            </div>
                            {/* <p className='absolute md:left-[15%] left-10 top-64  md:top-[43%]'>Phytography, also known as botanical photography, is a captivating art form  that combines a love for nature and  a passion for photography.  </p> */}
                            <p className='absolute text-xl text-center  md:top-60
                            top-[250px]  left-28 md:left-[40%]'>By DreamPic</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-[80vh] object-cover' src="https://i.ibb.co/QXQLmxr/dark-sunset-ashtamudi-lake-kollam-181624-56891.jpg" alt="" />
                        <div className='absolute top-0 left-0 w-full h-full text-white bg-black/60'>
                            <div className='absolute md:top-40 top-48 left-20 md:left-1/3'>
                                <h1 className='my-5 text-2xl font-bold md:text-5xl'> <Typewriter
                                    options={{
                                        strings: ['Mobile Photo', 'Camera Photo', 'Photo Editing'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /> </h1>
                            </div>
                            {/* <p className='absolute md:left-[15%] left-10 top-64  md:top-[40%]'>Phytography, also known as botanical photography, is a captivating art form  that combines a love for nature and  a passion for photography.  </p> */}
                            <p className='absolute text-xl text-center  md:top-60
                            top-[250px] left-28 md:left-[40%]'>By DreamPic</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-[80vh] object-cover' src="https://i.ibb.co/cXKsrtc/beautiful-tropical-beach-sea-with-coconut-palm-tree-74190-7464.jpg" alt="" />
                        <div className='absolute top-0 left-0 w-full h-full text-white bg-black/60'>
                            <div className='absolute md:top-40 top-48 left-20 md:left-1/3'>
                                <h1 className='my-5 text-2xl font-bold md:text-5xl'> <Typewriter
                                    options={{
                                        strings: ['Mobile Photo', 'Camera Photo', 'Photo Editing'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /> </h1>
                            </div>
                            {/* <p className='absolute md:left-[15%] left-10 top-64  md:top-[40%]'>Phytography, also known as botanical photography, is a captivating art form  that combines a love for nature and  a passion for photography.  </p> */}
                            <p className='absolute text-xl text-center  md:top-60
                           top-[250px]  left-28 md:left-[40%]'>By DreamPic</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-[80vh] object-cover' src="https://i.ibb.co/28YQsCg/caribbean-landscape-1048-1863.jpg" alt="" />
                        <div className='absolute top-0 left-0 w-full h-full text-white bg-black/60'>
                            <div className='absolute md:top-40 top-48 left-20 md:left-1/3'>
                                <h1 className='my-5 text-2xl font-bold md:text-5xl'> <Typewriter
                                    options={{
                                        strings: ['Mobile Photo', 'Camera Photo', 'Photo Editing'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /> </h1>
                            </div>
                            {/* <p className='absolute md:left-[15%] left-10 top-64  md:top-[40%]'>Phytography, also known as botanical photography, is a captivating art form  that combines a love for nature and  a passion for photography.  </p> */}
                            <p className='absolute text-xl text-center  md:top-60
                            top-[250px]  left-28 md:left-[40%]'>By DreamPic</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-[80vh] object-cover' src="https://i.ibb.co/G0n2TQ4/beautiful-sun-shining-across-mountains-181624-59069.jpg" alt="" />
                        <div className='absolute top-0 left-0 w-full h-full text-white bg-black/60'>
                            <div className='absolute md:top-40 top-48 left-20 md:left-1/3'>
                                <h1 className='my-5 text-2xl font-bold md:text-5xl'> <Typewriter
                                    options={{
                                        strings: ['Mobile Photo', 'Camera Photo', 'Photo Editing'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /> </h1>
                            </div>
                            {/* <p className='absolute md:left-[15%] left-10 top-64  md:top-[40%]'>Phytography, also known as botanical photography, is a captivating art form  that combines a love for nature and  a passion for photography.  </p> */}
                            <p className='absolute text-xl text-center  md:top-60
                            top-[250px]  left-28 md:left-[40%]'>By DreamPic</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-[80vh] object-cover' src="https://i.ibb.co/Xxs67Wf/palms-beautiful-garden-reflected-lake-during-daytime-181624-15510.jpg" alt="" />
                        <div className='absolute top-0 left-0 w-full h-full text-white bg-black/60'>
                            <div className='absolute md:top-40 top-48 left-20 md:left-1/3'>
                                <h1 className='my-5 text-2xl font-bold md:text-5xl'> <Typewriter
                                    options={{
                                        strings: ['Mobile Photo', 'Camera Photo', 'Photo Editing'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /> </h1>
                            </div>
                            {/* <p className='absolute md:left-[15%] left-10 top-64  md:top-[40%]'>Phytography, also known as botanical photography, is a captivating art form  that combines a love for nature and  a passion for photography.  </p> */}
                            <p className='absolute text-xl text-center  md:top-60
                           top-[250px]  left-28 md:left-[40%]'>By DreamPic</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;