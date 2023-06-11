import React from 'react';
import useTitle from '../../../hook/useHook';

const Payment = () => {
    useTitle("Payment")
    return (
        <div>
         <h1 className='my-10 text-3xl font-bold'>Payment</h1>
         <div>
            <input className='placeholder:px-5 w-[50%] py-3' type="text" name="" id="" placeholder='Card Number' />
            <input type="date" name="" id="" />
         </div>
        </div>
    );
};

export default Payment;