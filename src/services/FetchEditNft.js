import useAuthenticate from "../hooks/useAuthenticate";

const BASE_URL = import.meta.env.VITE_EDIT_NFT;
export default async function FetchEditNft(formData, id) {
  const {
    storage: { token },
  } = useAuthenticate();
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  return result;
}
