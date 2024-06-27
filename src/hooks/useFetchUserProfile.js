import { useQuery } from "@tanstack/react-query";
import FetchUserProfile from "../services/FetchUserProfile";

export default function useFetchUserProfile(productId) {
  const { data, isLoading } = useQuery({
    queryKey: ["userProfile", productId],
    queryFn: () => FetchUserProfile(productId),
  });

  return { data, isLoading };
}
