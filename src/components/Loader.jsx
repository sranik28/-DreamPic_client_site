import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
            <RotatingLines
                strokeColor="#4c5696"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    );
};

export default Loader;