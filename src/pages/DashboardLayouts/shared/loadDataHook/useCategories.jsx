import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const useCategories = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: categories,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/categories");
      return res.data;
    },
  });
  return [categories, isLoading, refetch];
};

export default useCategories;
