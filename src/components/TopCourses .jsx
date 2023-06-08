import { useEffect, useState } from 'react';
import SingleCourse from './SingleCourse';

const TopCourses = () => {

    const [topCourses, setTopCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/classes')
            .then(response => response.json())
            .then(json => setTopCourses(json));

    }, [])
    return (
        <div className='max-w-[1240px] mx-auto my-40 px-3'>
            <div data-aos="zoom-in-up" className='my-20 border-indigo-500 border-x-4'>
                <h2 className='text-4xl font-bold text-center md:text-6xl'>Our Top <span className='text-[#4c5696]'>Course</span></h2>
                <p className='my-3 text-xl text-center'>Most student enroll course among all our courses.</p>
            </div>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className='grid gap-5 md:grid-cols-3'>
                {
                    topCourses.map((course, i) => <SingleCourse key={i} course={course} />)
                }
            </div>
        </div>
    );
};

export default TopCourses;