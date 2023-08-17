import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import { motion } from "framer-motion"

const Reviews = () => {
    const data = [

        {
            img:"https://i.ibb.co/ZfnRv2g/277256107-993438014599860-2540847913090999650-n.jpg",
            heading: "“This review is going to sound like I’m getting paid. I am not. After completing the Photography and Lightroom course at TSOP my ability to frame, shoot and process my photos took a leap forward. Very good videos with easily digestible lessons and tasks. I wish I had found this course several years ago. I’ve gotten excited about photography again. I would recommend this course to anyone.” – David Hewett – USA",
            ratings: 4.2
        },

        {
            img:"https://i.ibb.co/hZpF5p1/images-1.jpg",
            heading: "The school of photography is great, I’d highly recommend anyone looking to learn and understand photography to sign up. Marc really knows how to simplify and break everything down so its easily absorbed. I signed up for both the photography and the Lightroom course and I’m enjoying every bit of it. - Mark Jenny, Australia",
            ratings: 4.2
        },
        {
            img:"https://i.ibb.co/3Ccr6QB/images-2.jpg",
            heading: "I have tried a number of others in the past, but I find TSOP suits me best. Their lessons are clear and easy to follow with well-made videos backed up with downloadable notes, plus quizzes to ensure the info has been understood correctly.” – Heather Sheldrick – UK",
            ratings: 4.5
        },
        {
            img:"https://i.ibb.co/sjRy4x4/images.jpg",
            heading: "“This review is going to sound like I’m getting paid. I am not. After completing the Photography and Lightroom course at TSOP my ability to frame, shoot and process my photos took a leap forward. Very good videos with easily digestible lessons and tasks. I wish I had found this course several years ago. I’ve gotten excited about photography again. I would recommend this course to anyone.” – Tofael – UK",
            ratings: 4.4
        },
        {
            img:"https://i.ibb.co/ypWk93r/download.jpg",
            heading: "I have tried a number of others in the past, but I find TSOP suits me best. Their lessons are clear and easy to follow with well-made videos backed up with downloadable notes, plus quizzes to ensure the info has been understood correctly.” – Heather Sheldrick – Italy-Florence",
            ratings: 4.5
        },
        {
            img:"https://i.ibb.co/gmszkq3/360-F-298288984-8i0-PB7s9a-WPzi1-Leu-NGGrnj-Xkm-XRpc-Zn.jpg",
            heading: "“This review is going to sound like I’m getting paid. I am not. After completing the Photography and Lightroom course at TSOP my ability to frame, shoot and process my photos took a leap forward. Very good videos with easily digestible lessons and tasks. I wish I had found this course several years ago. I’ve gotten excited about photography again. I would recommend this course to anyone.” – Abtahi – Bangladesh",
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
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"4"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 5,
                  depth: 100,
                  modifier: 1,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    data.map((img, i) => {
                        return (

                            <SwiperSlide key={i}  >
                                <img className="object-cover w-32 h-32 mx-auto mt-5 rounded-full"  src={img.img} alt="" />
                                <div  className="w-full bg   rounded h-[250px]">

                                    {/* <img className="h-[150px] mx-auto" src={img.image} alt="" /> */}
                                    <h2 className="p-4 text-sm font-semibold">{img.heading}</h2>

                                    {/* <div className="w-full p-4">
                                        <Rating style={{ maxWidth: 120 }} value={img.ratings} readOnly />
                                    </div> */}

                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </section>



    );
};

export default Reviews;