import React from 'react';

const SingleCourse = ({ course }) => {
    
    const { student_enroll,
        class_image,
        class_name,
        instructor_name,
        instructor_email,
        avilable_seats,
        price } = course;

    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className=''>
            <img className='object-cover rounded-md w-96' src={class_image} alt="" />
            <h2 className='my-2 text-xl font-bold'>{class_name}</h2>
            <p className='my-2'><span className='font-bold' >Instructor Name</span> : {instructor_name}</p>
            <p><span className='font-bold' >Instructor Email</span> : {instructor_email}</p>
            <p className='my-2'><span className='font-bold' >Available Seats</span> : {avilable_seats}</p>
            <p className='mb-5'><span className='font-bold' >Price</span> : {price}</p>
            <button className='bg-[#4c5696] w-full mx-auto py-2 rounded-md text-white'>Enroll</button>
        </div>
    );
};

export default SingleCourse;