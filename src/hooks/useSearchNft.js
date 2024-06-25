import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FetchSearchNfts from "../services/FetchSearchNfts";
import { setFilteredNft } from "../Slices/SearchSlice";

const datas = ["mom", "uncle", "sister", "ixy", "dada", "papa", "sister"];
export default function useSearchNft() {
  const [searchedNft, setSearchedNft] = useState();
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery({
    queryKey: ["search"],
    queryFn: () => FetchSearchNfts(),
  });

  function handleSearch(e) {
    setSearchedNft(e.target.value);
  }

  useEffect(() => {
    let newSearchedNft = data?.data?.filter((val) =>
      val?.name.toLowerCase().includes(searchedNft?.toLowerCase())
    );

    newSearchedNft?.length >= 1 && newSearchedNft?.length < data?.data?.length
      ? dispatch(setFilteredNft(newSearchedNft))
      : dispatch(setFilteredNft(""));
  }, [searchedNft, dispatch, data]);
  return { data, searchedNft, handleSearch, isLoading };
}
