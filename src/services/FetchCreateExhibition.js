import useAuthenticate from "../hooks/useAuthenticate";

const BASE_URL = import.meta.env.VITE_CREATE_EXHIBITION;
export default async function FetchCreateExhibition(formData) {
  const {
    storage: { token },
  } = useAuthenticate();
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const result = await response.json();
  return result;
}
