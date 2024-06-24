import { useQuery } from "@tanstack/react-query";
import FetchEthPrice from "../services/FetchEthPrice";

export default function useFetchEthPrice() {
  const { data, isLoading } = useQuery({
    queryKey: ["ethPrice"],
    queryFn: () => FetchEthPrice(),
  });

  return { data, isLoading };
}
