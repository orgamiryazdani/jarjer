import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";
import { category } from "../types/Category";

type dataType = {
    menuItems: category[];
};

export default function useCategories(qs: string) {
    const queryResult: UseQueryResult<dataType> = useQuery({
        queryKey: ["categories"],
        queryFn: () => getCategoryApi(qs),
    });

    const { data, isLoading, refetch } = queryResult;

    return { data, isLoading, refetch };
}