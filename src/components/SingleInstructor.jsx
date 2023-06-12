import React from 'react';
import { Fade } from 'react-awesome-reveal';

const SingleInstructor = ({ instructor }) => {

    const { name, email, image } = instructor;

    return (
        <div>
            <div className='text-center '>
                <img className='object-cover rounded-md h-96 w-96 ' src={image} alt="" />
                <div className='relative bg-[#4c5696] opacity-95 text-white bottom-12 w-[300px] mx-auto rounded-full p-2 only:'>
                    <Fade>
                        <h2 className='mt-4 text-2xl font-semibold'>{name}</h2>
                        <p className='my-2'>{email}</p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;