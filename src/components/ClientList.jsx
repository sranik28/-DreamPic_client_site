import React from 'react';
import Marquee from 'react-fast-marquee';
import brand1 from '../assets/brand/brand1.png'
import brand2 from '../assets/brand/brand2.png'
import brand3 from '../assets/brand/brand3.png'
import brand4 from '../assets/brand/brand4.png'
import brand5 from '../assets/brand/brand5.png'
import brand6 from '../assets/brand/brand6.png'
import brand7 from '../assets/brand/brand7.png'
import brand8 from '../assets/brand/brand8.png'

const ClientList = () => {
    return (
        <div className='px-3 my-20'>
            <div>
                <div className='border-indigo-500 border-x-4 max-w-[1240px] mx-auto'>
                    <h2 className='mb-20 text-4xl font-bold text-center md:text-6xl'>Our <span className='text-[#4c5696]'>sponsor</span> </h2>
                </div>
                <div>
                    <div className='flex items-center gap-5 mx-auto '>
                        <Marquee>
                            <img src={brand1} alt="" />
                            <img src={brand2} alt="" />
                            <img src={brand3} alt="" />
                            <img src={brand4} alt="" />
                            <img src={brand5} alt="" />
                            <img src={brand6} alt="" />
                            <img src={brand7} alt="" />
                            <img src={brand8} alt="" />

                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientList;


