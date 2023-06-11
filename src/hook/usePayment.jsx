import { useQuery } from 'react-query';
import { useAuthGlobally } from '../context/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const usePayment = () => {
    const {user, loading} = useAuthGlobally()
    const {axiosSecure} = useAxiosSecure()
    const {data: paymentHistory = []} = useQuery({
        queryKey: ["payment-history", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment-history?email=${user?.email}`)
            return res.data
        }
    })
    return {paymentHistory}
};

export default usePayment;