import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
const useRole = () => {
    const {user, loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const email = user?.email
   const {data: role, isLoading} = useQuery({
    queryKey: ['role', email],
    enabled: !loading,
    queryFn: async()=>{
        const res = await axiosSecure.get(`/user/role/${email}`);
        return res.data?.role;
    },
   });

   return [role, isLoading];
};

export default useRole;