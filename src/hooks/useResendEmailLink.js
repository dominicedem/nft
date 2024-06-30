import { useMutation } from "@tanstack/react-query";
import FetchResendLink from "../services/FetchResendLink";

export default function useResendEmailLink() {
  const { data, mutate, isLoading } = useMutation({
    mutationFn: () => FetchResendLink(),
  });

  return { data, isLoading, mutate };
}
