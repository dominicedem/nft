import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { setOverlay } from "../Slices/overLaySlice";
import FetchEditProfile from "../services/FetchEditProfile";

export default function useEditProfile() {
  const [isBlur, setIsBlur] = useState(false);
  const [on, setOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, _] = useSearchParams();
  const id = searchParams.get("nftId");

  const dispatch = useDispatch();
  const {
    formState: { errors },
    register,
    handleSubmit,
    getValues,
    reset,
    watch,
  } = useForm();

  const watctMan = watch(["file"]);

  async function handleEditProfileSubmit(formdata) {
    console.log(formdata);
    setIsLoading(true);

    const formData = new FormData();
    formdata.file[0] && formData.append("photo", formdata.file[0]);
    formdata.bio && formData.append("bio", formdata.bio);
    formdata.facebook && formData.append("facebook", formdata.facebook);
    formdata.twitter && formData.append("twitter", formdata.twitter);
    formdata.instagram && formData.append("instagram", formdata.instagram);
    formData.append("profileVisible", on);

    setIsBlur(true);
    let blur = true;
    setTimeout(() => {
      blur && toast.error("Check your network connection");
      blur && setIsBlur(false);
      setOn(false);
      reset();
      setIsLoading(false);
    }, [30000]);
    try {
      const result = await FetchEditProfile(formData);
      console.log(result);
      reset();

      if (result.status === "fail") {
        reset();
        setIsBlur(false);
        blur = false;
        setOn(false);
        dispatch(setOverlay(false));
        setIsLoading(false);
        toast.error(result.message);
      } else if (result.status === "success") {
        reset();
        setIsBlur(false);
        setIsLoading(false);
        blur = false;
        toast.success("Successfully edited");
        setOn(false);
        dispatch(setOverlay(false));
      }
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
        setIsBlur(false);
        blur = false;
        error.message && toast.error(error.message);
        setOn(false);
        dispatch(setOverlay(false));
      }, [5000]);
    }
  }

  function handleError(errors) {
    // console.log(errors);
  }

  useEffect(() => {}, [watctMan, watch]);

  return {
    register,
    isLoading,
    handleSubmit,
    handleError,
    errors,
    handleEditProfileSubmit,
    isBlur,
    getValues,
    on,
    setOn,
  };
}
