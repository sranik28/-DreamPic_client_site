import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: "http://localhost:9999"
})

const useAxiosSecure = () => {

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem("access-token")
            if (token) {
                config.headers.authorization =` Bearer ${ token }`;
            }
            return config
        })
    }, [])
    return { axiosSecure }
};

export default useAxiosSecure;