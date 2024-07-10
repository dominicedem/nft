import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import FetchEditNft from "../services/FetchEditNft";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { setOverlay } from "../Slices/overLaySlice";

export default function useEditNft() {
  const [isBlur, setIsBlur] = useState(false);
  const [on, setOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, _] = useSearchParams();

  const id = searchParams.get("nftId");
  //   const [overlay, setOverlay] = useState(false);

  //   const { userData } = useSelector((state) => state.authData);

  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    formState: { errors },
    register,
    handleSubmit,
    getValues,
    reset,
  } = useForm();

  async function handleEditNftSubmit(formdata) {
    setIsLoading(true);
    const exhibitionNft = {
      ...formdata,
      nftInMarket: on,
    };

    setIsBlur(true);
    let blur = true;
    setTimeout(() => {
      blur && toast.error("Check your network connection");
      blur && setIsBlur(false);
      setOn(false);
      reset();
      setIsLoading(false);
    }, [20000]);
    try {
      const result = await FetchEditNft(exhibitionNft, id);
      reset();

      if (result.status === "fail") {
        reset();
        setIsBlur(false);
        blur = false;
        // setOverlay(true);
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

  return {
    register,
    isLoading,
    handleSubmit,
    handleError,
    errors,
    handleEditNftSubmit,
    isBlur,
    getValues,
    on,
    setOn,
  };
}
