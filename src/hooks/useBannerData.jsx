import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useBannerData = () => {
    const axiosPublic = useAxiosPublic();
    const {data, isLoading} = useQuery({
        queryKey: ['banner'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/banner')
            return res.data
        }
    })
    return [data, isLoading]
};

export default useBannerData;