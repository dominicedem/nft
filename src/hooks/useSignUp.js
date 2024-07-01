import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchEmailName from "../services/FetchEmailName";
import { useForm } from "react-hook-form";
import FetchSignup from "../services/FetchSignup";
import { setUserEmail, setUserToken } from "../Slices/AllEmailNameSlice";
import { useDispatch } from "react-redux";
import FetchLogin from "../services/FetchLogin";
import { setIsAuthenticated, setUser } from "../Slices/AuthUserSlice";

export default function useSignUp() {
  const [reveal, setReveal] = useState(false);
  const [revealConfirmPasswor, setRevealConfirmPasswor] = useState(false);
  const [revealLoginPassword, setRevealLoginPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isBlur, setIsBlur] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm();

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
    const result = await FetchSignup(formData);
    if (result.status === "success") {
      setIsBlur(false);
      reset();
      navigate("/verifyemail", { replace: true });
      dispatch(setUserEmail(formData.email));
      dispatch(setUserToken(result.token));
    }
  }
  async function handleLoginSubmit(formData) {
    setIsBlur(true);
    const result = await FetchLogin(formData);
    if (result.status === "success") {
      reset();
      setIsBlur(false);
      dispatch(setIsAuthenticated(true));
      dispatch(setUser(result.data.userDetails));
      navigate("/dashboard");
    }
  }

  function handleError(errors) {
    // console.log(errors);
  }

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
    register,
    handleSubmit,
    getValues,
    errors,
    isBlur,
    handleLoginSubmit,
  };
}
