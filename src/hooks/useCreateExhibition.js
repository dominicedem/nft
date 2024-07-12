import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
import FetchCreateExhibition from "../services/FetchCreateExhibition";
import { useForm } from "react-hook-form";

export default function useCreateExhibition() {
  const [isBlur, setIsBlur] = useState(false);
  let nftList = [];

  const {
    formState: { errors },
    register,
    handleSubmit,
    getValues,
    reset,
    watch,
  } = useForm();
  const watchFields = watch(["file"]);

  function handleNftList(id) {
    nftList.includes(id)
      ? nftList.splice(nftList.indexOf(id), 1)
      : nftList.push(id);
  }

  async function handleCreateExhibitionSubmit(formdata) {
    if (nftList?.length < 5) {
      setIsBlur(true);
      setTimeout(() => {
        toast.error("Minimum of five arts is required");
        setIsBlur(false);
        nftList = [];
      }, [500]);
      return;
    }

    const formData = new FormData();
    formData.append("photo", formdata.file[0]);
    formData.append("description", formdata.description);
    formData.append("name", formdata.name);
    formData.append("joinFee", formdata.joinFee);
    formData.append("exhibitionNft", JSON.stringify(nftList));

    setIsBlur(true);
    let blur = true;
    setTimeout(() => {
      blur && toast.error("Check your network connection");
      blur && setIsBlur(false);
      reset();
      nftList = [];
    }, [20000]);
    try {
      const result = await FetchCreateExhibition(formData);
      console.log(result);
      reset();

      if (result.status === "fail") {
        reset();
        setIsBlur(false);
        blur = false;
        // setOverlay(true);
        toast.error(result.message);
        nftList = [];
      } else if (result.status === "success") {
        reset();
        setIsBlur(false);
        blur = false;
        nftList = [];
      }
    } catch (error) {
      setTimeout(() => {
        setIsBlur(false);
        blur = false;
        error.message && toast.error(error.message);
        nftList = [];
      }, [5000]);
    }
  }

  function handleError(errors) {
    // console.log(errors);
  }

  useEffect(() => {}, [watchFields, watch]);

  return {
    register,
    handleSubmit,
    handleError,
    errors,
    handleCreateExhibitionSubmit,
    isBlur,
    getValues,
    handleNftList,
  };
}
