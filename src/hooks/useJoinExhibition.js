import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import FetchJoinExhibition from "../services/FetchJoinExhibition";
import { useSearchParams } from "react-router-dom";
import { setJoinOverLay } from "../Slices/overLaySlice";
import { useDispatch } from "react-redux";

export default function useJoinExhibition() {
  const [isBlur, setIsBlur] = useState(false);
  const [searchParam, _] = useSearchParams();
  const id = searchParam.get("productId");
  const dispatch = useDispatch();

  let nftList = [];

  const {
    formState: { errors },
    register,
    handleSubmit,
    getValues,
    reset,
  } = useForm();

  function handleNftList(id) {
    nftList.includes(id)
      ? nftList.splice(nftList.indexOf(id), 1)
      : nftList.push(id);
  }

  async function handleJoinExhibitionSubmit(formdata) {
    if (nftList?.length < 1) {
      toast.error("Please select atleast one art");
      return;
    }
    const data = { nft: nftList };
    setIsBlur(true);
    let blur = true;
    setTimeout(() => {
      blur && toast.error("Check your network connection");
      blur && setIsBlur(false);
      reset();
      nftList = [];
      dispatch(setJoinOverLay(false));
    }, [40000]);

    try {
      const result = await FetchJoinExhibition(data, id);
      console.log(result);
      reset();

      if (result.status === "fail") {
        reset();
        setIsBlur(false);
        blur = false;
        toast.error(result.message);
        nftList = [];
        dispatch(setJoinOverLay(false));
      } else if (result.status === "success") {
        reset();
        setIsBlur(false);
        blur = false;
        nftList = [];
        toast.success("Joined successfully");
        dispatch(setJoinOverLay(false));
      }
    } catch (error) {
      setTimeout(() => {
        setIsBlur(false);
        blur = false;
        error.message && toast.error(error.message);
        nftList = [];
        dispatch(setJoinOverLay(false));
      }, [5000]);
    }
  }

  function handleError(errors) {
    // console.log(errors);
  }

  return {
    register,
    handleSubmit,
    handleError,
    errors,
    handleJoinExhibitionSubmit,
    isBlur,
    getValues,
    handleNftList,
  };
}
