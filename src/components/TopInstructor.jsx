import SingleInstructor from './SingleInstructor';
import useAxiosSecure from '../hook/useAxiosSecure';
import { useQuery } from 'react-query';


const TopInstructor = () => {



    const { axiosSecure } = useAxiosSecure()
    const { data: instructors = [] } = useQuery({
        queryKey: ["popular-instructor"],
        queryFn: async () => {
            const res = await axiosSecure.get("/popular-instructors")
            return res.data
        }
    })



    return (
        <div className='max-w-[1240px] mx-auto my-10 px-3'>
            <div className='my-20 border-indigo-500 border-x-4' >
                <h2 className='text-4xl font-bold text-center md:text-6xl'>Our Most Valuable <span className='text-[#4c5696]'>Top Instructor</span></h2>
                <p className='my-3 text-xl text-center'>The most important and respected people of our institute are the instructors</p>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                {
                    instructors.map((instructor, i) => <SingleInstructor key={i} instructor={instructor} />)
                }
            </div>
        </div>
    );
};

export default TopInstructor;