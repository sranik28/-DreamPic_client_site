import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthGlobally } from '../../../context/AuthProvider';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const Edit = () => {

    const { register, handleSubmit } = useForm();
    const { user } = useAuthGlobally();
    const { axiosSecure } = useAxiosSecure();

    const editClass = () => {

    }

    return (
        <main>
            <hr className="w-full my-3" />
            <form onSubmit={handleSubmit(editClass)} className="px-[100px] py-5" >
                <div className="my-3 text-center">
                    <h2 className="mb-10 text-4xl font-bold"> Update <span className='text-[#4c5696]'>Class</span> </h2>
                </div>

                <section className="w-full gap-3 md:grid md:grid-cols-2">
                    <div className="w-full my-2">
                        <span className="block font-bold">Class Name</span>
                        <input {...register("class_name", { required: true })} type="text" className="w-full px-4 py-3 mt-3 border rounded outline-0" autoComplete="off" placeholder="class Name" />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Instructor Name</span>
                        <input  {...register("instructor_name")} value={user?.displayName && user?.displayName} type="text" className="w-full px-4 py-3 mt-3 border rounded outline-0" autoComplete="off" disabled />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Instructor Email</span>
                        <input {...register("instructor_email")} type="text" value={user?.email && user?.email} className="w-full px-4 py-3 mt-3 border rounded outline-0" autoComplete="off" disabled />
                    </div>

                    <div className="w-full my-2">
                        <span className="block font-bold">Avilable Seats</span>
                        <input {...register("avilable_seats", { required: true })} type="number" className="w-full px-4 py-3 mt-3 border rounded outline-0" autoComplete="off" />
                    </div>
                    <div className="w-full mt-5">
                        <span className="block font-bold">upload a image</span>
                        <input type="file" {...register("image", { required: true })} className="w-full max-w-xs file-input file-input-bordered" />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Price</span>
                        <input {...register("price", { required: true })} type="number" className="w-full px-4 py-3 mt-3 border rounded outline-0" autoComplete="off" />
                    </div>
                </section>

                <div >
                    <button className="block w-full px-4 py-3 mt-10 rounded bg-[#4c5696] text-white font-semibold" type="submit">Update Class</button>
                </div>

            </form>
        </main>
    );
};

export default Edit;