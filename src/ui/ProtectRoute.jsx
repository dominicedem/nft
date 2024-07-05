import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectRoute({ children }) {
  const storage = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  useEffect(() => {
    const date = new Date();
    const revistTime = Math.abs(Number(date.getHours() - storage?.entryTime));
    console.log("timeDifference", revistTime, "storedTime", storage?.entryTime);
    if (!storage?.isAuthenticated || revistTime > 2) {
      navigate("/signin");
      storage.clear();
    }
  }, [storage?.isAuthenticated, navigate, storage]);
  return storage?.isAuthenticated && children;
}

export default ProtectRoute;
