import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loader } = useContext(AuthContext);
  const email = user?.email;
  const {
    data: cart,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart", email],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/cart/${email}`);
      return res.data;
    },
  });
  return [cart, refetch, isLoading];
};

export default useCart;
