import { useEffect, useState } from 'react';
import ClassesCard from '../components/ClassesCard';
import classesBanner from '../assets/class/classBanner.png'
import useTitle from '../hook/useHook';
import useClasses from '../hook/useClasses';
import { useAuthGlobally } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hook/useAxiosSecure';
import Swal from 'sweetalert2';

const Classes = () => {
    useTitle('Classes')

    
    const { classes } = useClasses('Approved');
    const {user} = useAuthGlobally()
    const navigate = useNavigate()
    const {axiosSecure} = useAxiosSecure()
    const seletedClass = async (singleClass) => {

        if(user?.email) {
            const addToClass = {
                class_id: singleClass._id,
                class_name : singleClass.class_name,
                class_image : singleClass.class_image,
                instructor_name : singleClass.instructor_name,
                instructor_email : singleClass.instructor_email,
                price : singleClass.price,
                email: user?.email
            }
    

            const res = await axiosSecure.post("/select-class", addToClass)
            if(res.data.insertedId) {                 
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'This class is selectd',
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
        } 
        else {
            Swal.fire({
                title: 'Login In First',
                text: "Without login you are not select any class",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
              })
        }

        
    }

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

                <div className='grid gap-4 md:grid-cols-3'>
                    {
                        classes.map(classes => <ClassesCard key={classes._id} classes={classes} seletedClass={seletedClass} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;