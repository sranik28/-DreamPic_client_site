import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";


const Reviews = () => {
    const data = [

        {
            heading: "“This review is going to sound like I’m getting paid. I am not. After completing the Photography and Lightroom course at TSOP my ability to frame, shoot and process my photos took a leap forward. Very good videos with easily digestible lessons and tasks. I wish I had found this course several years ago. I’ve gotten excited about photography again. I would recommend this course to anyone.” – David Hewett – USA",
            bg: "#FFD3A3"
        },

        {
            heading: "The school of photography is great, I’d highly recommend anyone looking to learn and understand photography to sign up. Marc really knows how to simplify and break everything down so its easily absorbed. I signed up for both the photography and the Lightroom course and I’m enjoying every bit of it. - Mark Jenny, Australia",
            bg: "#FF55BB",
            ratings: 4.2
        },
        {
            heading: "I have tried a number of others in the past, but I find TSOP suits me best. Their lessons are clear and easy to follow with well-made videos backed up with downloadable notes, plus quizzes to ensure the info has been understood correctly.” – Heather Sheldrick – UK",
            bg: "#B6EAFA",
            ratings: 4.5
        },
        {
            heading: "“This review is going to sound like I’m getting paid. I am not. After completing the Photography and Lightroom course at TSOP my ability to frame, shoot and process my photos took a leap forward. Very good videos with easily digestible lessons and tasks. I wish I had found this course several years ago. I’ve gotten excited about photography again. I would recommend this course to anyone.” – Tofael – UK",
            bg: "#FCFFB2",
            ratings: 4.4
        },
        {
            heading: "I have tried a number of others in the past, but I find TSOP suits me best. Their lessons are clear and easy to follow with well-made videos backed up with downloadable notes, plus quizzes to ensure the info has been understood correctly.” – Heather Sheldrick – Italy-Florence",
            bg: "#19A7CE",
            ratings: 4.5
        },
        {
            heading: "“This review is going to sound like I’m getting paid. I am not. After completing the Photography and Lightroom course at TSOP my ability to frame, shoot and process my photos took a leap forward. Very good videos with easily digestible lessons and tasks. I wish I had found this course several years ago. I’ve gotten excited about photography again. I would recommend this course to anyone.” – Abtahi – Bangladesh",
            bg: "#F45050",
            ratings: 4.5
        }
        
    ]
    return (
        <section className="px-3 my-20 max-w-[1240px] mx-auto">
            <div
                className='my-20 border-indigo-500 border-x-4' >
                <h1 className='text-4xl font-bold text-center md:text-6xl'>Client <span className='text-[#4c5696]'>Reviews</span></h1>
                <p className='my-3 text-xl text-center'></p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mt-10"
            >
                {
                    data.map((img, i) => {
                        return (

                            <SwiperSlide key={i}  >
                                <motion.div whileHover={{ background: "#000000" }} style={{ background: img.bg }} className={`w-full rounded h-[200px] `}>

                                    {/* <img className="h-[150px] mx-auto" src={img.image} alt="" /> */}
                                    <h2 className="p-4 text-[#4c5696] font-semibold text-sm">{img.heading}</h2>

                                    <div className="w-full p-4">
                                        <Rating style={{ maxWidth: 120 }} value={img.ratings} readOnly />
                                    </div>

                                </motion.div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </section>



    );
};

export default Reviews;