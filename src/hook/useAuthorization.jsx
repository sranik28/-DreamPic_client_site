import { useQuery } from "react-query";
import { useAuthGlobally } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAuthorization = () => {
    const {axiosSecure} = useAxiosSecure();
    const {user, loading} = useAuthGlobally();
    const {data : role, isLoading} = useQuery({
        queryKey: ["authorization", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/authorization?email=${user?.email}`)
            return res.data.role
        }
    })
    return {role, isLoading}
};

export default useAuthorization;