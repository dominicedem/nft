import { useQuery } from "@tanstack/react-query";
import FetchNewUserData from "../services/FetchNewUserData";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/AuthUserSlice";

export default function useReloadPage() {
  const dispatch = useDispatch();
  const storage = JSON.parse(localStorage.getItem("userData"));

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["reloadData"],
    queryFn: () => FetchNewUserData(storage.token),
    enabled: false,
  });

  useEffect(() => {
    data && dispatch(setUser(data.data));
    refetch();
    // function reload(e) {
    //   console.log("Data", data);
    //   e.preventDefault();
    //   e.returnValue = "You are about to reload the page";
    // }

    // window.addEventListener("beforeunload", reload);

    // return () => window.removeEventListener("beforeunload", reload);
    // localStorage.clear();
  }, [dispatch, data, refetch]);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   const storage = JSON.parse(localStorage.getItem("userData"));

  //   const fetchReload = async () => {
  //     const reloadData = await FetchNewUserData(storage.token);
  //     dispatch(setUser(reloadData.data));
  //   };
  //   fetchReload();

  //   return controller.abort();
  // }, [dispatch]);
  return { isLoading };
}
