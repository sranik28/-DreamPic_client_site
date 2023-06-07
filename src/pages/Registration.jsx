import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import RegistrationImg from '../assets/registion/high-angle-shot-lens-headphones-gimbal-phone.jpg'

const Registration = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <main className='absolute object-cover w-full md:h-[88.7vh] ' style={{ backgroundImage: `url(${RegistrationImg})` }}>
            <div className='max-w-[1240px] mx-auto   '>
                <h1 className='mt-20 text-5xl font-bold text-center text-white'>Please Registration</h1>
                <form onSubmit={handleSubmit} className='text-center py-5  rounded md:w-[500px]  mx-auto my-5'>
                    <input className='w-[80%] py-2 px-3 my-3 rounded' type="text" name='name' placeholder='Enter user  name' required /> <br />
                    <input className='w-[80%] px-3 py-2 my-3 rounded' type="email" name='email' placeholder='Enter your email' required /> <br />
                    <input className='w-[80%] px-3 py-2 my-3 rounded' type="password" name='password' placeholder='Enter your password' required /> <br />
                    <input className='w-[80%] px-3 py-2 my-3 rounded' type="password" name='password' placeholder='confirm your password' required /> <br />
                    <input className='w-[80%] px-3 py-2 my-3 rounded' type="text" name='photo' placeholder='Enter user photoURL' required /> <br />

                    {/* <p className='text-lg text-red-600'>{error}</p>
                    <p className='text-lg text-green-600'>{success}</p> */}

                    <button className='w-[80%] bg-[#4c5696] mx-auto rounded py-2 my-5 text-white font-semibold' >Register</button>
                    <div>
                        Already have a account?
                        <Link to="/login" className="px-2 py-1 ml-2 text-[#B2A4FF] underline    rounded">Login</Link>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Registration;