import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FetchSearchNfts from "../services/FetchSearchNfts";
import { setFilteredExhibition, setFilteredNft } from "../Slices/SearchSlice";
import FetchExhibition from "../services/FetchExhibition";

export default function useSearchNft() {
  const [searchedNft, setSearchedNft] = useState();
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery({
    queryKey: ["search"],
    queryFn: () => FetchSearchNfts(),
  });

  const { data: exhibitionData, isLoading: ExhibitionIsLoading } = useQuery({
    queryKey: ["exhibition"],
    queryFn: () => FetchExhibition(),
  });

  function handleSearch(e) {
    setSearchedNft(e.target.value);
  }

  useEffect(() => {
    let newSearchedNft = data?.data?.filter((val) =>
      val?.name.toLowerCase().includes(searchedNft?.toLowerCase())
    );

    newSearchedNft?.length >= 1 && newSearchedNft?.length <= data?.data?.length
      ? dispatch(setFilteredNft(newSearchedNft))
      : dispatch(setFilteredNft(""));
  }, [searchedNft, dispatch, data]);

  useEffect(() => {
    let newSearchedExhibition = exhibitionData?.data?.filter((val) =>
      val?.name.toLowerCase().includes(searchedNft?.toLowerCase())
    );

    newSearchedExhibition?.length >= 1 &&
    newSearchedExhibition?.length <= exhibitionData?.data?.length
      ? dispatch(setFilteredExhibition(newSearchedExhibition))
      : dispatch(setFilteredExhibition(""));
  }, [searchedNft, dispatch, exhibitionData]);
  return { data, searchedNft, handleSearch, isLoading };
}
