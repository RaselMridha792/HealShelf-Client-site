import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const useProduct = () => {
    const axiosPublic = useAxiosPublic()

    const {data: products, isLoading} = useQuery({
        queryKey : ['products'],
        queryFn : async ()=>{
            const res = await axiosPublic.get(`/products`)
            return res.data
        }
    })
    return [products, isLoading]
};

export default useProduct;