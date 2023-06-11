import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthGlobally } from '../context/AuthProvider';
import useTitle from '../hook/useHook';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hook/useAxiosSecure';


const Login = () => {
    useTitle('Login')

    const [showPassword, setShowPassword] = useState(false)
    const { axiosSecure } = useAxiosSecure()

    const { signIn, signInGoogle } = useAuthGlobally();
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page", location)
    const from = location.state?.from?.pathname || "/"

    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const handleLogin = (data) => {

        const email = data.email;
        const password = data.password;
        console.log(email, password);

        if (!email || !password) {
            setError("Cannot leave any field empty")
            return
        }

        signIn(email, password)
            .then(() => {
                navigate(from, { replace: true })
                reset()
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
        <main className='flex items-center justify-center w-full md:h-screen bg-[#1b1e34] px-3 '>

            <div className='max-w-[1240px] w-full mx-auto mt-10 grid  md:grid-cols-2 gap-5 md:gap-0 py-5'>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='flex items-center justify-center bg-[#ffffff]  rounded-s-md p-3 '>
                    <div className='text-center bg-[#ffffff]  rounded-s-md px-3 '>
                        <h1 className='my-5 text-2xl font-bold '>
                            Welcome to the <br /> MyPhotography Learning Portal</h1>
                        <p className='mb-5 text-lg'>If you’re not a registered student, please click the button below to sign up and gain instant access to our range of award-winning photography courses.</p>
                        <Link className='px-10 py-2 font-semibold text-white bg-black rounded-md' to="/">Home</Link>
                    </div>
                </div>
                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500" className='bg-black border-2 border-[#4c5696] rounded-e-md'>
                    <h1 className='my-5 text-5xl font-bold text-center text-white'>Please Login</h1>
                    <div className=' text-center py-5 rounded md:w-[500px] mx-auto my-5'>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <input {...register('email', { required: true })} className='w-[80%] py-2 my-5 rounded outline-none px-4 ' type="email" name="email" placeholder='    enter your email' required />

                            <div className='relative'>
                                <input {...register('password', { required: true })} type={showPassword ? "text" : "password"} name="password" id="password" className='border-b-2 w-[80%] rounded py-2 px-4 outline-none text-base ' autoComplete='off' placeholder='   enter your password' />
                                <span className='absolute md:top-3 md:right-14 top-3 right-11'>
                                    {
                                        showPassword ? <AiFillEyeInvisible className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <AiFillEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                                    }
                                </span>
                            </div>

                            <p className='mt-5 text-white underline'><Link>Forget Password</Link></p>
                            <button className='w-[80%]  bg-[#4c5696]  mx-auto rounded py-2 my-5 text-white font-semibold flex items-center justify-center'>Login <span><CiLogin className='w-8 h-8 ' /></span> </button>

                            <p className='text-lg text-red-600'>{error}</p>

                            <p className='my-5 text-white'> Create a new account?<Link to="/register" className='text-[#4c5696] underline'> Registration</Link></p>
                        </form>
                    </div>
                    <button onClick={handelGoogle} className='p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto mb-10  '><FcGoogle className='text-[32px]' /><span className='text-white'>Continue with Google</span></button>
                </div>
            </div>
        </main>
    );
};

export default Login;