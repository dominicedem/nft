const BASE_URL = import.meta.env.VITE_SIGNUP;
export default async function FetchSignup(data) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}
