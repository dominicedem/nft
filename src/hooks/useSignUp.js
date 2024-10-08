import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchEmailName from "../services/FetchEmailName";
import { useForm } from "react-hook-form";
import FetchSignup from "../services/FetchSignup";
import { setUserEmail, setUserToken } from "../Slices/AllEmailNameSlice";
import { useDispatch, useSelector } from "react-redux";
import FetchLogin from "../services/FetchLogin";
import { setIsAuthenticated, setUser } from "../Slices/AuthUserSlice";
import FetchMint from "../services/FetchMint";
import toast from "react-hot-toast";
import FetchNewUserData from "../services/FetchNewUserData";
import FetchWithdraw from "../services/FetchWithdraw";
import FetchInternalWithdraw from "../services/FetchInternalWithdraw";
import FetchValidate from "../services/FetchValidate";

export default function useSignUp() {
  const [reveal, setReveal] = useState(false);
  const [revealConfirmPasswor, setRevealConfirmPasswor] = useState(false);
  const [revealLoginPassword, setRevealLoginPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [feedBackError, setFeedBackError] = useState("");
  const [isBlur, setIsBlur] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [commissionOverlay, setCommissionOverlay] = useState(false);
  const [validateOverlay, setValidateOverlay] = useState(false);
  const [category, setCategory] = useState("weth");
  const [successOverlay, setSuccessOverlay] = useState();
  const [validFailOverlay, setValidFailOverlay] = useState(false);
  const [validSuccessOverlay, setValidSuccessOverlay] = useState(false);
  const { userData } = useSelector((state) => state.authData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.AllEmailNameData);
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const date = new Date();

  const filteredEmail = [];
  const filteredName = [];

  const { data } = useQuery({
    queryKey: ["nameAndEmail"],
    queryFn: () => FetchEmailName(),
  });

  data?.data?.forEach((val) => filteredName.push(val.username));
  data?.data?.forEach((val) => filteredEmail.push(val.email));

  const watchFields = watch(["username", "email"]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      name === "username" && filteredName.includes(value?.username)
        ? setUsernameError(true)
        : setUsernameError(false);
      name === "email" && filteredEmail.includes(value?.email)
        ? setEmailError(true)
        : setEmailError(false);
    });
    return () => subscription.unsubscribe();
  }, [watchFields, watch]);

  async function handleSubmits(formData) {
    setIsBlur(true);
    let blur = true;
    setTimeout(() => {
      blur && toast.error("Check your network connection");
      blur && setIsBlur(false);
      reset();
    }, [60000]);

    try {
      const result = await FetchSignup(formData);
      if (result.status === "success") {
        setIsBlur(false);
        blur = false;
        reset();
        navigate("/verifyemail", { replace: true });
        dispatch(setUserEmail(formData.email));
        dispatch(setUserToken(result.token));
      }
    } catch (error) {
      setTimeout(() => {
        setIsBlur(false);
        blur = false;
        error.message && toast.error("Check your network connection");
      }, [5000]);
    }
  }
  async function handleLoginSubmit(formData) {
    console.log(formData);
    JSON.parse(localStorage.getItem("userData"))?.token && localStorage.clear();
    setIsBlur(true);
    let blur = true;
    setTimeout(() => {
      blur && toast.error("Check your network connection");
      blur && setIsBlur(false);
      reset();
    }, [60000]);
    try {
      const result = await FetchLogin(formData);
      if (
        result.status === "success" &&
        result.message === "email is verified"
      ) {
        let user = {
          token: result.token,
          isAuthenticated: true,
          entryTime: date.getHours(),
        };
        reset();
        setIsBlur(false);
        blur = false;
        dispatch(setIsAuthenticated(true));
        dispatch(setUser(result.data.userDetails));
        dispatch(setUserToken(result.token));
        localStorage.setItem("userData", JSON.stringify(user));
        navigate("/dashboard", { replace: true });
      } else if (
        result.status === "success" &&
        result.message.trim() === "email is not verified" &&
        navigate("/verifyemail", { replace: true })
      ) {
        setIsBlur(false);
        blur = false;
      } else if (result.status === "fail") {
        setIsBlur(false);
        blur = false;
        setFeedBackError("Incorrect email or password");
      }
    } catch (error) {
      setTimeout(() => {
        setIsBlur(false);
        blur = false;
        error.message && toast.error("Check your network connection");
      }, [5000]);
    }
  }

  async function handleMintSubmit(formdata) {
    setIsBlur(true);

    let blur = true;
    setTimeout(() => {
      blur && toast.error("Check your network connection");
      blur && setIsBlur(false);
      reset();
    }, [60000]);

    const mintData = new FormData();
    mintData.append("photo", formdata.file[0]);
    mintData.append("name", formdata.name);
    mintData.append("description", formdata.description);
    mintData.append("category", formdata.category);
    mintData.append("priceInEtherium", formdata.priceInEtherium);

    try {
      const response = await FetchMint(mintData, token);
      if (response.status === "error") {
        toast.error(response.message);
        setIsBlur(false);
      } else if (response.status === "success") {
        toast.success(response.message);
        setIsBlur(false);
        reset();
        let newData = await FetchNewUserData(token);
      }
    } catch (error) {
      setTimeout(() => {
        blur = false;
        setIsBlur(false);
        // error.message && toast.error("faild");
      }, [5000]);
    }
  }

  async function handleWithdrawSubmit(formdata) {
    if (userData?.wallet?.userOnValidation) {
      setIsBlur(true);
      setTimeout(() => {
        setIsBlur(false);
        setValidateOverlay(true);
      }, [2000]);
      reset();
      return;
    } else if (userData?.wallet?.salesCommisionFee > 0) {
      reset();
      setIsBlur(true);
      setTimeout(() => {
        setIsBlur(false);
        setCommissionOverlay(true);
      }, [2000]);
      return;
    }
    setIsBlur(true);
    let blur = true;
    setTimeout(() => {
      blur && toast.error("Check your network connection");
      blur && setIsBlur(false);
      reset();
    }, [60000]);
    try {
      const result = await FetchWithdraw(formdata);
      if (result.status === "error") {
        reset();
        setIsBlur(false);
        blur = false;
        toast.error(result.message);
      } else if (result.status === "success") {
        reset();
        setIsBlur(false);
        blur = false;
        toast.success("Withdraw succefull please wait for 30mins");
      }
    } catch (error) {
      setTimeout(() => {
        reset();
        setIsBlur(false);
        blur = false;
        error.message && toast.error("Check your network connection");
      }, [5000]);
    }
  }

  async function handleInternalWithdrawSubmit(formdata) {
    const newFormData = { ...formdata, address: formdata.internalAddress };
    delete newFormData.internalAddress;
    if (userData?.wallet?.userOnValidation) {
      setIsBlur(true);
      setTimeout(() => {
        setIsBlur(false);
        setValidateOverlay(true);
      }, [2000]);
      reset();
      return;
    } else if (userData?.wallet?.salesCommisionFee > 0) {
      setIsBlur(true);
      setTimeout(() => {
        setIsBlur(false);
        setCommissionOverlay(true);
      }, [2000]);
      reset();
      return;
    }
    setIsBlur(true);
    setCategory("weth");
    let blur = true;
    setTimeout(() => {
      blur && toast.error("Check your network connection");
      blur && setIsBlur(false);
      reset();
    }, [60000]);
    try {
      const result = await FetchInternalWithdraw(newFormData);
      reset();

      if (result.status === "error") {
        reset();
        setIsBlur(false);
        blur = false;
        toast.error(result.message);
      } else if (result.status === "success") {
        reset();
        setIsBlur(false);
        blur = false;
        toast.success("Withdraw succefull please wait for 30mins");
      }
    } catch (error) {
      setTimeout(() => {
        setIsBlur(false);
        blur = false;
        error.message && toast.error("Check your network connection");
      }, [5000]);
    }
  }

  async function handleValidateSubmit(formdata) {
    setIsBlur(true);
    let blur = true;
    setTimeout(() => {
      blur && toast.error("Check your network connection");
      blur && setIsBlur(false);
      reset();
    }, [60000]);
    try {
      const result = await FetchValidate();
      reset();

      if (result.status === "error") {
        reset();
        setIsBlur(false);
        blur = false;
        setTimeout(() => {
          setValidFailOverlay(true);
        }, [2000]);
      } else if (result.status === "success") {
        reset();
        setIsBlur(false);
        blur = false;
        setTimeout(() => {
          setValidSuccessOverlay(true);
        }, [2000]);
      }
    } catch (error) {
      setTimeout(() => {
        setIsBlur(false);
        blur = false;
        error.message && toast.error(error.message);
      }, [5000]);
    }
  }

  function handleError(errors) {}

  return {
    reveal,
    setReveal,
    revealConfirmPasswor,
    setRevealConfirmPasswor,
    revealLoginPassword,
    setRevealLoginPassword,
    filteredEmail,
    filteredName,
    usernameError,
    emailError,
    navigate,
    handleSubmits,
    handleError,
    handleSubmit,
    register,
    getValues,
    errors,
    isBlur,
    feedBackError,
    handleLoginSubmit,
    handleMintSubmit,
    handleWithdrawSubmit,
    overlay,
    setOverlay,
    commissionOverlay,
    category,
    setCategory,
    setCommissionOverlay,
    validateOverlay,
    setValidateOverlay,
    successOverlay,
    setSuccessOverlay,
    handleInternalWithdrawSubmit,
    handleValidateSubmit,
    setValidSuccessOverlay,
    setValidFailOverlay,
    validSuccessOverlay,
    validFailOverlay,
    setValue,
  };
}
