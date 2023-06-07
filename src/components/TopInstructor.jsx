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
        <div className='max-w-[1240px] mx-auto my-40'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                {
                    topInstructor.map((instructor, i) => <SingleInstructor key={i} instructor={instructor} />)
                }
            </div>
        </div>
    );
};

export default TopInstructor;