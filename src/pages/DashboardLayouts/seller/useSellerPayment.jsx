import { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useSellerPayment = () => {
    const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const {
    data: sellerPayment,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manage-medicine", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/seller/selling-payments-report/${user?.email}`
      );
      return res.data;
    },
  });
  return [sellerPayment, refetch, isLoading];
};

export default useSellerPayment;