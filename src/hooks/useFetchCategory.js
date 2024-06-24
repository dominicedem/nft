import { useQuery } from "@tanstack/react-query";
import FetchCategory from "../services/FetchCategory";
import { useParams } from "react-router-dom";

export default function useFetchCategory() {
  const params = useParams();
  let paramCategory = params.type;
  const { data, isLoading } = useQuery({
    queryKey: ["category", paramCategory],
    queryFn: () => FetchCategory(paramCategory),
  });

  return { data, isLoading };
}
