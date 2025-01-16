import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
   const {data: role} = useQuery({
    queryKey: [user?.email, 'role'],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/user/role/${user.email}`);
        return res.data?.role;
    }
   })

   return [role];
};

export default useRole;