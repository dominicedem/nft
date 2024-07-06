import { useMutation, useQuery } from "@tanstack/react-query";
import FetchBuyNft from "../services/FetchBuyNft";
import { useSearchParams } from "react-router-dom";
import FetchBuyProduct from "../services/FetchBuyProduct";
import toast from "react-hot-toast";
import { useState } from "react";

function useFetchBuyNft() {
  const [isBlur, setIsBlur] = useState(false);
  const [searchParams, _] = useSearchParams();
  let nftId = searchParams?.get("productId");
  const { data, isLoading } = useQuery({
    queryKey: ["buynft", nftId],
    queryFn: () => FetchBuyNft(nftId),
  });

  const { data: BuyResponse, mutate } = useMutation({
    mutationFn: FetchBuyProduct,
    onSuccess: (data) => {
      setIsBlur(false);
      data.status === "fail" && toast.error(data.message);
      data.status === "success" && toast.success(data.message);
    },
    onError: (error) => {
      setIsBlur(false);
      toast.error(error.message);
    },
  });

  return {
    data,
    isBlur,
    setIsBlur,
    isLoading,
    mutate,
    BuyResponse,
    nftId,
  };
}

export default useFetchBuyNft;
