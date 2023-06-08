import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ClassesCard from '../components/ClassesCard';

const Classes = () => {

    const [AllClass, setAllClass] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/classes')
            .then(res => res.json())
            .then(data => setAllClass(data))
    }, [])
    return (
        <div className='max-w-[1240px] mx-auto my-20'>
            <Helmet>
                <title>DreamPic | Classes</title>
            </Helmet>

            <div className='grid gap-4 md:grid-cols-3'>
                {
                    AllClass.map(classes => <ClassesCard key={classes._id} classes={classes} />)
                }
            </div>
        </div>
    );
};

export default Classes;