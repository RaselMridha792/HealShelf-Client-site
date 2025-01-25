import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const useProducts = (sort) => {
    const axiosPublic = useAxiosPublic()

    const {data: products, isLoading} = useQuery({
        queryKey : ['products', sort],
        queryFn : async ()=>{
            const res = await axiosPublic.get(`/products?sort=${sort}`)
            return res.data
        }
    })
    return [products, isLoading]
};

export default useProducts;