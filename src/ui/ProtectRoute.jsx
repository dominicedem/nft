import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuthenticate from "../hooks/useAuthenticate";

function ProtectRoute({ children }) {
  const navigate = useNavigate();
  const { storage, revistTime } = useAuthenticate();

  useEffect(() => {
    if (!storage?.isAuthenticated || revistTime > 2) {
      navigate("/signin");
      localStorage?.clear();
    }
  }, [storage?.isAuthenticated, navigate, revistTime]);
  return storage?.isAuthenticated && children;
}

export default ProtectRoute;
