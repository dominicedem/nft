import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchEmailName from "../services/FetchEmailName";
import { useForm } from "react-hook-form";
import FetchSignup from "../services/FetchSignup";
import { setUserEmail } from "../Slices/AllEmailNameSlice";
import { useDispatch } from "react-redux";
import FetchLogin from "../services/FetchLogin";

export default function useSignUp() {
  const [reveal, setReveal] = useState(false);
  const [revealConfirmPasswor, setRevealConfirmPasswor] = useState(false);
  const [revealLoginPassword, setRevealLoginPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState("");
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
    const result = await FetchSignup(formData);
    result.status === "success" && reset();
    result.status === "success" && navigate("/verifyemail", { replace: true });
    result.status === "success" && dispatch(setUserEmail(formData.email));
  }
  async function handleLoginSubmit(formData) {
    const result = await FetchLogin(formData);
    result.status === "success" && reset();
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
    handleLoginSubmit,
  };
}
