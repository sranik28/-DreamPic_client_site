import { useQuery } from "react-query";
import { useAuthGlobally } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useUsers = () => {
    const {axiosSecure} = useAxiosSecure()
    const {loading} = useAuthGlobally()
    const {data: users = [], refetch} = useQuery({
        queryKey: ["users"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
    return {users, refetch}
    
};

export default useUsers;