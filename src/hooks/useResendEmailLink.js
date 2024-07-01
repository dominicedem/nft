import { useMutation } from "@tanstack/react-query";
import FetchResendLink from "../services/FetchResendLink";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function useResendEmailLink(bearer) {
  const { data, mutate, isLoading } = useMutation({
    mutationKey: ["resenLink"],
    mutationFn: () => FetchResendLink(bearer),
    // onSuccess: () =>
    //   onError: () =>
    //   data.status === "success" &&
    //   toast.success("Link has been sent, please check your mail"),

    //   data.status === "fail" && toast.error("something went wrong"),
  });

  useEffect(() => {
    data?.status === "success" &&
      toast.success("Link has been sent, please check your mail");

    data?.status === "fail" && toast.error("something went wrong");
  }, [data]);

  return { data, isLoading, mutate };
}
