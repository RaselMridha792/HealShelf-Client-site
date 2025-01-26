import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePayments = (sort) => {
    const axiosSecure = useAxiosSecure();
    const { data: payments, isLoading, refetch } = useQuery({
      queryKey: ["admin-stats", sort],
      queryFn: async () => {
        const res = await axiosSecure.get(`/admin-stats?sort=${sort}`);
        return res.data.orders;
      },
    });
    return [payments, isLoading, refetch]
};

export default usePayments;