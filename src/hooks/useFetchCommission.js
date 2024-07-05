import { useMutation, useQuery } from "@tanstack/react-query";
import FetchCommission from "../services/FetchCommission";

export default function useFetchCommission() {
  return async function handlePayCommission() {
    const result = await FetchCommission();
    return result;
  };
  //   return { handlePayCommission };
}
