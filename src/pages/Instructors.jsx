import { useEffect, useState } from 'react';
import InstructorCard from '../components/InstructorCard';
import instructorBanner from '../assets/Instructors/FX30-Desktop_Banner_1600x641_q91iWY6_cleanup.png';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {

    const [instructor, setTopInstructor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/all-instructor')
            .then(res => res.json())
            .then(data => setTopInstructor(data))
    }, [])

    return (
        <div>
            <div className='relative'>
                <img className='w-full h-[500px] object-cover opacity-80' src={instructorBanner} alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-black/50'>
                    <h1 className='absolute p-4 text-5xl font-bold text-white md:text-6xl md:left-24 md:top-32 top-28 '> Our honorable <br /> <span className='text-[#1b1e34]'>Instructors</span> </h1>
                    <p className='absolute my-10 text-white md:text-2xl md:left-28 top-48 left-5 md:top-60'>Photographers are skilled individuals who use their creativity, <br /> technical knowledge, and vision to create compelling visual narratives.</p>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto my-20'>
                <Helmet>
                    <title>DreamPic | Instructors</title>
                </Helmet>

                <div className='grid gap-5 m md:grid-cols-4'>
                    {
                        instructor.map(ins => <InstructorCard key={ins._id} instructor={ins} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;