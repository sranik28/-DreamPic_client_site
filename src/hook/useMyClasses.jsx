import { useQuery } from 'react-query';
import { useAuthGlobally } from '../context/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const useMyClasses = () => {
    const {user, loading} = useAuthGlobally()
    const {axiosSecure} = useAxiosSecure()
    const {data: classes = [], refetch} = useQuery({
        queryKey: ["my-classes", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-classes?email=${user?.email}`)
            return res.data
        }
    })
    return {classes, refetch}
};

export default useMyClasses;