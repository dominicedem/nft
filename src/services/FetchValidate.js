const BASE_URL = import.meta.env.VITE_VALIDATE;
const storage = JSON.parse(localStorage.getItem("userData"));
export default async function FetchValidate() {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${storage.token}`,
    },
  });
  const result = await response.json();
  console.log(result);
  return result;
}
