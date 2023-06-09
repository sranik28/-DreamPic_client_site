import React from 'react';

const SingleCourse = ({ course }) => {

    const { class_name, class_image, } = course;

    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='text-center '>
            <img className='object-cover rounded-md w-96' src={class_image} alt="" />
            <h2 className='my-2 text-xl font-bold'>{class_name}</h2>
        </div>
    );
};

export default SingleCourse;