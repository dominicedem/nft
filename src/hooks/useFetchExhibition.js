import { useQuery } from "@tanstack/react-query";
import FetchExhibition from "../services/FetchExhibition";

export default function useFetchExhibition() {
  const { data, isLoading } = useQuery({
    queryKey: ["exhibition"],
    queryFn: () => FetchExhibition(),
  });

  return { data, isLoading };
}
