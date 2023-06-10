import React from 'react';
import { Helmet } from 'react-helmet-async';



const PaymentHistory = () => {
    return (
        <div>
            <Helmet>
                <title>DreamPic | Payment History</title>
            </Helmet>
            <div className='max-w-[1240px] mx-auto my-10'>
                <section className='  h-[500px] mt-2 overflow-x-auto relative'>
                    <table className='w-full text-white'>
                        <thead >
                            <tr className='bg-[#1b1e34]  sticky top-0 px-10'>
                                <th className='py-3'></th>
                                <th className='py-3 uppercase'>Transaction Id</th>
                                <th className='py-3 uppercase'>Price</th>
                                <th className='py-3 uppercase'>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody >

                            <tr className="border-b-2 text-[#737373]">
                                <td className="py-2 text-center text-[#151515] font-bold">1</td>
                                <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src='https://i.ibb.co/zSf4QdG/licensed-image-3.jpg' alt="" /></td>
                                <td className="py-2 text-center">item_name</td>
                                <td className="py-2 text-center">Category</td>
                            </tr>

                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default PaymentHistory;