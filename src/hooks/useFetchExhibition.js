import { useQuery } from "@tanstack/react-query";
import FetchExhibition, {
  FetchExhibitionNftS,
} from "../services/FetchExhibition";

export default function useFetchExhibition(productId) {
  const { data, isLoading } = useQuery({
    queryKey: ["exhibition"],
    queryFn: () => FetchExhibition(),
  });

  const { data: exhNfts, isLoading: exhNftsIsLoading } = useQuery({
    queryKey: ["exhibitionNfts", productId],
    queryFn: () => FetchExhibitionNftS(productId),
  });

  return { data, isLoading, exhNfts, exhNftsIsLoading };
}
