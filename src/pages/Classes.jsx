import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ClassesCard from '../components/ClassesCard';
import classesBanner from '../assets/class/classBanner.png'

const Classes = () => {

    const [AllClass, setAllClass] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9999/classes')
            .then(res => res.json())
            .then(data => setAllClass(data))
    }, [])
    return (
        <div className=''>
            <div className='relative'>
                <img className='object-cover h-[450px] w-full' src={classesBanner} alt="" />
                <div className='absolute top-0 left-0 w-full h-full text-white bg-black/50'>
                    <h2 className='text-4xl font-bold md:text-5xl absolute md:left-[5%] md:top-[30%] top-36 left-3'>Our All <span className='text-[#1b1e34]'>Classes</span> </h2>
                    <p className='md:text-xl absolute md:left-[5%] md:top-[45%] top-48 left-3'>Embarking on a photography course can be a transformer journey,<br /> unlocking the secrets of capturing breathtaking images</p>
                </div>
            </div>
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
        </div>
    );
};

export default Classes;