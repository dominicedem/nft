import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuthenticate from "../hooks/useAuthenticate";

function ProtectRoute({ children }) {
  // const storage = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const { storage, revistTime } = useAuthenticate();

  // console.log(storage);

  useEffect(() => {
    // const date = new Date();
    // const revistTime = Math.abs(Number(date.getHours() - storage?.entryTime));
    if (!storage?.isAuthenticated || revistTime > 2) {
      navigate("/signin");
      localStorage?.clear();
    }
  }, [storage?.isAuthenticated, navigate, revistTime]);
  return storage?.isAuthenticated && children;
}

export default ProtectRoute;
