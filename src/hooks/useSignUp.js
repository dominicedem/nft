import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchEmailName from "../services/FetchEmailName";
import { useForm } from "react-hook-form";

export default function useSignUp() {
  const [reveal, setReveal] = useState(false);
  const [revealConfirmPasswor, setRevealConfirmPasswor] = useState(false);
  const [revealLoginPassword, setRevealLoginPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
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

  console.log(data?.data);

  data?.data?.forEach((val) => filteredName.push(val.username));
  data?.data?.forEach((val) => filteredEmail.push(val.email));

  // useEffect(() => {
  //   filteredName.includes(String(name))
  //     ? setUsernameError(name)
  //     : setUsernameError("");
  // }, [name]);

  // useEffect(() => {
  //   filteredEmail.includes(String(email))
  //     ? setEmailError(name)
  //     : setEmailError("");
  // }, [email]);

  const watchFields = watch(["name", "email"]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(value, name);
      name === "name" && filteredName.includes(value?.name)
        ? setUsernameError(true)
        : setUsernameError(false);
      name === "email" && filteredEmail.includes(value?.email)
        ? setEmailError(true)
        : setEmailError(false);
    });
    return () => subscription.unsubscribe();
  }, [watchFields, watch]);

  function handleSubmits(formData) {
    // console.log(formData);
    reset();
  }
  function handleLoginSubmit(formData) {
    // console.log(formData);
    reset();
  }

  function handleError(errors) {
    // console.log(errors);
  }
  // setData(id, password);
  // if (isFetched) {
  //   setId("");
  //   setPassword("");
  //   setTimeout(() => dispatch(setInitail(false)), [4000]);
  // }

  // useEffect(() => {
  //   data?.status === "success" && dispatch(setIsAuth(true));
  //   data?.status === "success" && dispatch(setToken(data.token));
  // }, [data, dispatch]);

  // useEffect(() => {
  //   isAuth && navigate("/");
  // }, [isAuth, navigate]);
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
