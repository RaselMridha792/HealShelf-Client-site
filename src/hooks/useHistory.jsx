import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useHistory = () => {
  const { user, loader } = useContext(AuthContext);
  const email = user?.email;
  const axiosSecure = useAxiosSecure();
  const { data: payments, refetch } = useQuery({
    queryKey: ["payments", email],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${email}`);
      return res.data;
    },
  });
  return [payments, refetch];
};

export default useHistory;
