import { getCategories } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export function useCategories(options) {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(options),
  });

  const { categories: rowCategories = [] } = data || {};

  console.log("dataaaaa", data);

  const categories = rowCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCatefories = rowCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return {
    categories,
    transformedCatefories,
    isLoading,
  };
}
