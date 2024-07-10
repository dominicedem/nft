import useAuthenticate from "../hooks/useAuthenticate";

const BASE_URL = import.meta.env.VITE_EDIT_PROFILE;
export default async function FetchEditProfile(formData) {
  const {
    storage: { token },
  } = useAuthenticate();
  const response = await fetch(BASE_URL, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const result = await response.json();
  return result;
}
