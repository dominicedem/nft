import useAuthenticate from "../hooks/useAuthenticate";

const BASE_URL = import.meta.env.VITE_RESET_PASSWORD;
export default async function FetchResetPassword(data) {
  const {
    storage: { token },
  } = useAuthenticate();
  const response = await fetch(BASE_URL, {
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
