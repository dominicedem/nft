const BASE_URL = import.meta.env.VITE_FORGOT_PASSWORD;
export default async function FetchForgotPassword(formData) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  return result;
}
