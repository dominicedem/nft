import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FetchForgotPassword from "../services/FetchForgotPassword";

export default function useForgotPassword() {
  const [isBlur, setIsBlur] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  async function handleForgotPassword(formdata) {
    if (success) {
      toast.error("Reset link already sent to this email");
      return;
    }
    setIsBlur(true);
    let blur = true;
    setTimeout(() => {
      blur && toast.error("Check your network connection");
      blur && setIsBlur(false);
    }, [40000]);

    try {
      const result = await FetchForgotPassword(formdata);

      if (result.status === "fail") {
        setIsBlur(false);
        blur = false;
        toast.error(result.message);
      } else if (result.status === "success") {
        setIsBlur(false);
        setSuccess(true);
        blur = false;
        toast.success("Password reset link has been sent to your email");
      }
    } catch (error) {
      setTimeout(() => {
        setIsBlur(false);
        blur = false;
        console.log(error);
        // error.message && toast.error(error.message);
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
    handleForgotPassword,
    isBlur,
    success,
  };
}
