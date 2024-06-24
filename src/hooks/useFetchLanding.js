import { useQuery } from "@tanstack/react-query";
import FetchLanding from "../services/FetchLanding";

export default function useFetchLanding() {
  const { data, isLoading } = useQuery({
    queryKey: ["landing"],
    queryFn: () => FetchLanding(),
  });

  return { data, isLoading };
}
