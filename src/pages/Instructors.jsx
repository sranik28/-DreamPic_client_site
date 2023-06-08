import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import InstructorCard from '../components/InstructorCard';

const Instructors = () => {

    const [instructor, setTopInstructor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/instructor')
            .then(res => res.json())
            .then(data => setTopInstructor(data))
    }, [])

    return (
        <div className='max-w-[1240px] mx-auto my-10'>
            <Helmet>
                <title>DreamPic | Instructors</title>
            </Helmet>
            <div className='grid gap-4 md:grid-cols-4'>
                {
                    instructor.map(ins => <InstructorCard key={ins._id} instructor={ins} />)
                }
            </div>
        </div>
    );
};

export default Instructors;