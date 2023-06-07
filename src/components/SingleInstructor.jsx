import React from 'react';

const SingleInstructor = ({ instructor }) => {

    console.log(instructor)
    const { name, email, image } = instructor;

    return (
        <div>
            <div>
                <img className='h-full rounded-md w-96' src={image} alt="" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default SingleInstructor;