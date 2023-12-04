import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useIsPremium = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const { data } = useQuery({
        queryKey: ['isPremium'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${user?.email}`);
            return res.data;
        }
    })
    const date = Date.now();
    if (!data?.premiumValid) {
        return false;
    }
    else if (data?.premiumValid > date) {
        return true;
    }
    else {
        return false
    }
};

export default useIsPremium;