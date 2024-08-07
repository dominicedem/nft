import { useState } from "react";
import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import FetchResetPassword from "../services/FetchResetPassword";
import { useNavigate } from "react-router-dom";

export default function useResetPassword() {
  const [isBlur, setIsBlur] = useState(false);
  const [feedBackError, setFeedBackError] = useState(false);
  const [revealLoginPassword, setRevealLoginPassword] = useState(false);
  const [revealConfirmPassowrd, setRevealConfirmPassowrd] = useState(false);

  const navigate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
    getValues,
    reset,
  } = useForm();

  async function handleResetPasswordSubmit(formdata) {
    console.log(formdata);
    setIsBlur(true);
    let blur = true;
    setTimeout(() => {
      blur && toast.error("Check your network connection");
      blur && setIsBlur(false);
      reset();
    }, [40000]);

    try {
      const result = await FetchResetPassword(formdata);
      console.log(result);
      reset();

      if (result.status === "fail") {
        reset();
        setIsBlur(false);
        blur = false;
        setFeedBackError(true);
      } else if (result.status === "success") {
        reset();
        setIsBlur(false);
        blur = false;
        setFeedBackError(false);
        toast.success("Password Changed Successfully");
        localStorage.clear();
        navigate("/signin", { replace: true });
      } else if (result.status === "error") {
        reset();
        setIsBlur(false);
        blur = false;
        toast.error(result.message);
      }
    } catch (error) {
      setTimeout(() => {
        setIsBlur(false);
        blur = false;
        error.message && toast.error(error.message);
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
    handleResetPasswordSubmit,
    isBlur,
    getValues,
    feedBackError,
    revealLoginPassword,
    setRevealLoginPassword,
    revealConfirmPassowrd,
    setRevealConfirmPassowrd,
  };
}
