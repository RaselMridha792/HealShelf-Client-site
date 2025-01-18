import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const {
    data: cart,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/cart/${email}`);
      return res.data;
    },
    enabled: !!email,
  });
  return [cart, refetch, isLoading];
};

export default useCart;
