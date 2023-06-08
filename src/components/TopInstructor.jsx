import { useEffect, useState } from 'react';
import SingleInstructor from './SingleInstructor';

const TopInstructor = () => {

    const [topInstructor, setTopInstructor] = useState([]);

    useEffect(() => {
        fetch('/instructor.json')
            .then(res => res.json())
            .then(data => setTopInstructor(data))

    }, [])

    return (
        <div className='max-w-[1240px] mx-auto my-10 px-3'>
            <div data-aos="zoom-in-up" className='my-20 border-indigo-500 border-x-4'>
                <h2 className='text-4xl font-bold text-center md:text-6xl'>Our Most Valuable <span className='text-[#4c5696]'>Top Instructor</span></h2>
                <p className='my-3 text-xl text-center'>The most important and respected people of our institute are the instructors</p>
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-center" className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                {
                    topInstructor.map((instructor, i) => <SingleInstructor key={i} instructor={instructor} />)
                }
            </div>
        </div>
    );
};

export default TopInstructor;