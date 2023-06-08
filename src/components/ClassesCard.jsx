import React from 'react';

const ClassesCard = ({ classes }) => {

    const { student_enroll,
        class_image,
        class_name,
        instructor_name,
        instructor_email,
        avilable_seats,
        price } = classes;

    return (
        <div className='p-3 border-2 border-gray-300 rounded-md'>
            <img className='object-cover rounded-md w-96' src={class_image} alt="" />
            <h2 className='my-2 text-2xl font-bold'>{class_name}</h2>
            <p className='mb-1'><span className='text-lg font-semibold'>Class Instructor</span>: {instructor_name}</p>
            {/* todo kiso classs er email baki ashe  */}
            <p className='mb-1'><span className='text-lg font-semibold'>Instructor Email</span>: {instructor_email}</p>
            <p className='mb-1'><span className='text-lg font-semibold'>Available_seats</span>: {avilable_seats}</p>
            <p className='mb-1'><span className='text-lg font-semibold'>Student Enroll</span>: {student_enroll}</p>
            <p className='mb-1'><span className='text-lg font-semibold'>Class Fee</span>: ${price}</p>
        </div>
    );
};

export default ClassesCard;