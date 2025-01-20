import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

const useSellerMedicine = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const {
    data: sellerMedicine,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manage-medicine", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/seller/payments-report/${user?.email}`
      );
      return res.data;
    },
  });
  return [sellerMedicine, refetch, isLoading];
};

export default useSellerMedicine;
