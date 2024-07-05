const BASE_URL = import.meta.env.VITE_EMAIL_LINK;
export default async function FetchResendLink(bearer) {
  const response = await fetch(BASE_URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
  });
  const result = await response.json();
  return result;
}
