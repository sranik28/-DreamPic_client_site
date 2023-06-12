import React from 'react';

const InstructorCard = ({ instructor }) => {

    const { name, email, image } = instructor

    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-md shadow-md'>
                <img className='w-[200px] h-[200px] object-cover rounded-full' src={image} alt="" />
                <h2 className='text-2xl font-semibold '>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;