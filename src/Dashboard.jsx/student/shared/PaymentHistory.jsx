import useTitle from "../../../hook/useHook";
import usePayment from "../../../hook/usePayment";
import PaymentHistoryTable from "../Components/PaymentHistoryTable";




const PaymentHistory = () => {
    useTitle("Payment History")
    const { paymentHistory } = usePayment()


    return (
        <main className='h-screen overflow-hidden'>
            <section className='h-[650px] mt-2 overflow-x-auto relative'>
                <table className='w-full'>
                    <thead >
                        <tr className='sticky top-0 px-10 bg-main'>
                            <th className='py-3 text-white'></th>
                            <th className='py-3 text-white'>Transaction Id</th>
                            <th className='py-3 text-white'>Price</th>
                            <th className='py-3 text-white'>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            paymentHistory && paymentHistory.map((payment, i) => <PaymentHistoryTable key={payment._id} payment={payment} i={i} />)
                        }

                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default PaymentHistory;