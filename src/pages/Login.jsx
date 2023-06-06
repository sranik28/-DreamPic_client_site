import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)


    // const { signIn, signInGoogle } = useAuthGlobally();
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page", location)
    const from = location.state?.from?.pathname || "/"

    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const handelGoogle = () => {
        signInGoogle()
            .then((result) => {
                const google = result.user;
                console.log(google)
                navigate(from)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className='max-w-[1240px] w-full mx-auto mt-10 grid items-center md:grid-cols-2 '>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque, a possimus amet odio repudiandae! Beatae adipisci similique ad mollitia, pariatur odit repellat perspiciatis sit assumenda consequuntur, reiciendis cum quas alias dignissimos aut sapiente. A aperiam alias ab, minima voluptates magnam laudantium reiciendis quas numquam sequi, explicabo harum aliquam suscipit laborum laboriosam libero cupiditate deserunt eum repudiandae rem veritatis neque distinctio blanditiis. Totam debitis voluptates dolores nihil atque, reiciendis distinctio eum incidunt quidem nam, possimus iste tempora? Voluptatibus, iste placeat! Eveniet error corrupti maxime consectetur minima reprehenderit facere nam nesciunt hic ullam excepturi repellat ducimus, pariatur ab blanditiis ratione modi.</h1>
            <div className='border-2 border-red-300'>
                <h1 className='text-5xl font-bold text-center'>Please <span className='text-[#B2A4FF]'>Login</span></h1>
                <div className=' text-center py-5 bg-slate-200 rounded md:w-[500px] mx-auto my-5'>
                    <form className='' onSubmit={handleSubmit}>
                        <input className='w-[80%] py-2 my-5 rounded outline-none px-4 ' type="email" name="email" placeholder='    enter your email' required />

                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"} name="password" id="password" className='border-b-2 w-[80%] rounded py-2 px-4 outline-none text-base ' autoComplete='off' placeholder='   enter your password' />
                            <span className='absolute md:top-3 md:right-14 top-3 right-11'>
                                {
                                    showPassword ? <AiFillEyeInvisible className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <AiFillEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                                }
                            </span>
                        </div>

                        <p className='text-[#B2A4FF] underline mt-5'><Link>Forget Password</Link></p>
                        <button className='w-[80%]  bg-[#B2A4FF] hover:bg-[#AA77FF] mx-auto rounded py-2 my-5 text-white font-semibold flex items-center justify-center'>Login <span><CiLogin className='w-8 h-8 ' /></span> </button>

                        <p className='text-lg text-red-600'>{error}</p>

                        <p className='my-5'> Create a new account?<Link to="/register" className='text-[#B2A4FF] underline'> Registration</Link></p>
                    </form>
                </div>
                <button onClick={handelGoogle} className='p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto mb-10  '><FcGoogle className='text-[32px]' /><span>Continue with Google</span></button>
            </div>
        </div>
    );
};

export default Login;