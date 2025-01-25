import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const useProducts = (sort, search) => {
    const axiosPublic = useAxiosPublic()

    const {data: products, isLoading} = useQuery({
        queryKey : ['products', sort, search],
        queryFn : async ()=>{
            const res = await axiosPublic.get(`/products?sort=${sort}&search=${search}`)
            return res.data
        }
    })
    return [products, isLoading]
};

export default useProducts;