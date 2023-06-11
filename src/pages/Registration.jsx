import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAuthGlobally } from '../context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import useTitle from '../hook/useHook';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hook/useAxiosSecure';


const Registration = () => {
    useTitle('Registration')
    const { createUser, signInGoogle } = useAuthGlobally();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { axiosSecure } = useAxiosSecure();


    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const handleRegister = (data) => {


        setSuccess("");
        setError("");

        const name = data.name;
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;
        const photo = data.photo;

        if (password !== confirmPassword) {
            setError("Your password did not match")
            return
        }

        if (!/(?=.*?[A-Z])/.test(password)) {
            setError("At last one uppercase ")
            return
        }
        else if (password.length < 6) {
            setError("please add at least 6 number");
            return
        }


        createUser(email, password)
            .then(result => {
                const currentUser = result.user;
                reset();
                updateProfile(currentUser, { displayName: name, photoURL: photo })
                setSuccess("User has created successfully");

            })
            .catch(error => {

                setError(error.message)
            })

    }
    const handelGoogle = () => {
        signInGoogle()
            .then((result) => {
                const user = {
                    name: result?.user?.displayName,
                    email: result?.user?.email,
                    photo_url: result?.user?.photoURL
                }


                axiosSecure.put(`/add-user?email=${user?.email}`, user)
                    .then(res => {
                        if (res.data) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Login sucessfull',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                navigate(from)
            })
            .catch((error) => {
            })
    }

    return (
        <main>
            <div className='max-w-[1240px] mx-auto   '>
                <h1 className='mt-20 text-5xl font-bold text-center '>Please Registration</h1>
                <form onSubmit={handleSubmit(handleRegister)} className='text-center py-5  rounded md:w-[500px]  mx-auto my-5'>
                    <input className='w-[80%] py-2 px-3 my-3 rounded' type="text" {...register('name', { required: true })} name='name' placeholder='Enter user  name' required /> <br />
                    <input className='w-[80%] px-3 py-2 my-3 rounded' type="email" {...register('email', { required: true })} name='email' placeholder='Enter your email' required /> <br />
                    <input className='w-[80%] px-3 py-2 my-3 rounded' type="password" {...register('password', { required: true })} name='password' placeholder='Enter your password' required /> <br />
                    <input className='w-[80%] px-3 py-2 my-3 rounded' type="password" {...register('confirmPassword', { required: true })} name='confirmPassword' placeholder='confirm your password' required /> <br />
                    <input className='w-[80%] px-3 py-2 my-3 rounded' type="text" {...register('photo', { required: true })} name='photo' placeholder='Enter user photoURL' required /> <br />

                    <p className='text-lg text-red-600' >{error}</p>
                    <p className='text-lg text-green-600'>{success}</p>

                    <button className='w-[80%] bg-[#4c5696] mx-auto rounded py-2 my-5 text-white font-semibold' >Register</button>
                    <div>
                        Already have a account?
                        <Link to="/login" className="px-2 py-1 ml-2 text-[#B2A4FF] underline    rounded">Login</Link>
                    </div>
                </form>
                <button onClick={handelGoogle} className='p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto   '><FcGoogle className='text-[32px]' /><span className=''>Continue with Google</span></button>
            </div>
        </main>
    );
};

export default Registration;