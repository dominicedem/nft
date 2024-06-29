import { useQuery } from "@tanstack/react-query";
import FetchEmailName from "../services/FetchEmailName";

function useFetchVerification() {
  const { data, isLoading } = useQuery({
    queryKey: ["nameAndEmail"],
    queryFn: () => FetchEmailName(),
  });
  return { data, isLoading };
}

export default useFetchVerification;
