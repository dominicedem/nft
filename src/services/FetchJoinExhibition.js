import useAuthenticate from "../hooks/useAuthenticate";

const BASE_URL = import.meta.env.VITE_JOIN_EXHIBITION;
export default async function FetchJoinExhibition(data, id) {
  const {
    storage: { token },
  } = useAuthenticate();
  const response = await fetch(`${BASE_URL}${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}
