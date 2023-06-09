import React from 'react';
import { Helmet } from 'react-helmet';
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MyClass = () => {
    return (
        <div>
            <Helmet>
                <title>DreamPic | AddClass</title>
            </Helmet>
            <div className='my-20 '>
                <h1 className='my-10 text-2xl font-bold '>My Classes</h1>
                <section className='bg-white  h-[500px] mt-2 overflow-x-auto relative'>
                    <table className='w-full text-white'>
                        <thead >
                            <tr className='bg-[#1b1e34]  sticky top-0 px-10'>
                                <th className='py-3'></th>
                                <th className='py-3'>Class IMAGE</th>
                                <th className='py-3'>Total enrolled</th>
                                <th className='py-3'>Class Name</th>
                                <th className='py-3'>Feedback</th>
                                <th className='py-3'>Status</th>
                                <th className='py-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="border-b-2 text-[#737373]">
                                <td className="py-2 text-center text-[#151515] font-bold">1</td>
                                <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src='https://i.ibb.co/zSf4QdG/licensed-image-3.jpg' alt="" /></td>
                                <td className="py-2 text-center">item_name</td>
                                <td className="py-2 text-center">photo editing</td>
                                <td className="py-2 text-center">no feedback</td>
                                <td className="py-2 text-center">approved</td>
                                <td className="py-2 text-center"><Link to='/dashboard/edit'><button className="bg-[#B91C1C] p-3 rounded text-white block mx-auto"><AiFillEdit /></button></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default MyClass;