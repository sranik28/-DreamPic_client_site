import React from 'react';
import Banner from '../pages/header/Banner';

const BannerHeading = () => {
    return (
        <div className='relative'>
            <div>
                <Banner />
            </div>
            <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                <h1>Elevate Your Skills Quickly with our Range of Popular Online Photography Courses for Beginners and Amateurs</h1>
            </div>
        </div>
    );
};

export default BannerHeading;