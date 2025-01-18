import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const email = user?.email
   const {data: role} = useQuery({
    queryKey: [email, 'role'],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/user/role/${email}`);
        return res.data?.role;
    },
    enabled: !!email,
   });

   return [role];
};

export default useRole;