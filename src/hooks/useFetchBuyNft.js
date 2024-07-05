import { useMutation, useQuery } from "@tanstack/react-query";
import FetchBuyNft from "../services/FetchBuyNft";
import { useSearchParams } from "react-router-dom";
import FetchBuyProduct from "../services/FetchBuyProduct";
function useFetchBuyNft() {
  const [searchParams, _] = useSearchParams();
  let nftId = searchParams?.get("productId");
  const { data, isLoading } = useQuery({
    queryKey: ["buynft", nftId],
    queryFn: () => FetchBuyNft(nftId),
  });

  const {
    data: BuyResponse,
    isLoading: NftIsLoading,
    mutate,
  } = useMutation({
    mutationFn: () => FetchBuyProduct(),
  });

  return { data, isLoading, mutate, BuyResponse };
}

export default useFetchBuyNft;
