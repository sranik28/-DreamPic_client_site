import { useQuery } from "react-query";
import {  useAuthGlobally } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useSelectedClasses = () => {
    const { user, loading } = useAuthGlobally()
    const { axiosSecure } = useAxiosSecure()
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ["selected-class", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selected-classes?email=${user?.email}`)
            return res.data
        }
    })
    return { selectedClasses, refetch }
};


export default useSelectedClasses;