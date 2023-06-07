import React from 'react';

const SingleInstructor = ({ instructor }) => {

    console.log(instructor)
    const { name, email, image } = instructor;

    return (
        <div>
            <div className='text-center'>
                <img className='object-cover rounded-md h-96 w-96' src={image} alt="" />
                <h2 className='mt-4 text-2xl font-semibold'>{name}</h2>
                <p className='my-2'>{email}</p>
            </div>
        </div>
    );
};

export default SingleInstructor;