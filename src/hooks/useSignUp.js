import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useSignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [reveal, setReveal] = useState();
  const [error, setError] = useState("");

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      String(password).length < 8 ||
      String(confirmPassword).length < 8 ||
      String(confirmPassword).length !== String(password).length
    ) {
      (String(password).length < 8 || String(confirmPassword).length < 8) &&
        name &&
        email &&
        setError({ message: "Paswords less than eight" });

      String(confirmPassword).length !== String(password).length &&
        String(password).length >= 8 &&
        String(confirmPassword).length >= 8 &&
        name &&
        email &&
        setError({ message: "Passwords do not match" });

      (!password || !confirmPassword || !email || !name) &&
        setError({ message: "Please fill up the fields" });

      setTimeout(() => {
        setError("");
      }, [4000]);
      return;
    } else {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setReveal("");
      setError("");
    }
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
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    reveal,
    setReveal,
    error,
    setError,
    navigate,
    handleSubmit,
  };
}
