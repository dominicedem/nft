import { useQuery } from "@tanstack/react-query";
import FetchBuyNft from "../services/FetchBuyNft";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
function useFetchBuyNft() {
  const [searchParams, _] = useSearchParams();
  let nftId = searchParams?.get("productId");
  const { data, isLoading } = useQuery({
    queryKey: ["buynft", nftId],
    queryFn: () => FetchBuyNft(nftId),
  });
  return { data, isLoading };
}

export default useFetchBuyNft;
