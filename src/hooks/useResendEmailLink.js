import { useMutation, useQuery } from "@tanstack/react-query";
import FetchResendLink from "../services/FetchResendLink";

export default function useResendEmailLink(bearer) {
  const { data, mutate, isLoading } = useMutation({
    mutationKey: ["resenLink"],
    mutationFn: () => FetchResendLink(bearer),
  });

  return { data, isLoading, mutate };
}
