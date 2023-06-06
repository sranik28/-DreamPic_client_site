import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Banner = () => {

    return (
        <div>
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
                        <img className='w-full h-[80vh] object-cover ' src="https://img.freepik.com/free-photo/reflection-lights-mountain-lake-captured-parco-ciani-lugano-switzerland_181624-24209.jpg?w=1060&t=st=1686082491~exp=1686083091~hmac=296ed77b7ab281ca0a1310f32cbf45581af27d4e26618c79e447839761a0192a" alt="" />
                        <div className='absolute top-0 left-0 w-full h-full text-white bg-black/60'>
                            <div className='absolute md:top-40 top-60 left-10 md:left-1/3'>
                                <h1 className='my-5 text-2xl font-bold md:text-5xl'>PHOTOGRAPHY COURSES</h1>
                                <p className='text-center'>By MyPhotography</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-[80vh] object-cover' src="https://img.freepik.com/free-photo/sunset-twilight-time_1388-111.jpg?w=1060&t=st=1686082569~exp=1686083169~hmac=889b37aa0e5a7448723565ef88802375830643c074cc24c19915f3ade1784531" alt="" />
                        <div className='absolute top-0 left-0 w-full h-full text-white bg-black/60'>
                            <div className='absolute md:top-40 top-60 left-10 md:left-1/3'>
                                <h1 className='my-5 text-2xl font-bold md:text-5xl'>PHOTOGRAPHY COURSES</h1>
                                <p className='text-center'>By MyPhotography</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-[80vh] object-cover' src="https://as2.ftcdn.net/v2/jpg/01/14/82/31/1000_F_114823177_H6RRW8yhrIMhr1ZexPMFTJIIL2aIqXey.jpg" alt="" />
                        <div className='absolute top-0 left-0 w-full h-full text-white bg-black/60'>
                            <div className='absolute md:top-40 top-60 left-10 md:left-1/3'>
                                <h1 className='my-5 text-2xl font-bold md:text-5xl'>PHOTOGRAPHY COURSES</h1>
                                <p className='text-center'>By MyPhotography</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-[80vh] object-cover' src="https://t4.ftcdn.net/jpg/02/22/65/13/240_F_222651338_VIQxkvKjwaE6vPE31YlXuoWLR6OOwR9I.jpg" alt="" />
                        <div className='absolute top-0 left-0 w-full h-full text-white bg-black/60'>
                            <div className='absolute md:top-40 top-60 left-10 md:left-1/3'>
                                <h1 className='my-5 text-2xl font-bold md:text-5xl'>PHOTOGRAPHY COURSES</h1>
                                <p className='text-center'>By MyPhotography</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;