import { useQuery } from "react-query";
import { useAuthGlobally } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useClass = (id) => {
    const { user, loading } = useAuthGlobally()
    const { axiosSecure } = useAxiosSecure()
    const { data: singleClass = {} } = useQuery({
        queryKey: ['class', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/class/${id}`)
            return res.data
        }
    })
    return { singleClass }
};

export default useClass;