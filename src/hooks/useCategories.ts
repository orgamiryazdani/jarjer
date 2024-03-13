import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";

export default function useCategories(qs: string) {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["categories"],
        queryFn: () => getCategoryApi(qs)
    });

    return { data, isLoading, refetch };
}