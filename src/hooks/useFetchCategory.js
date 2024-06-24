import { useQuery } from "@tanstack/react-query";
import FetchCategory from "../services/FetchCategory";

export default function useFetchCategory() {
  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["category"],
    queryFn: () => FetchCategory(),
  });

  return { data, isLoading, isFetched };
}
