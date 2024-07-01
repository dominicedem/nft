const BASE_URL = import.meta.env.VITE_EMAIL_LINK;
export default async function FetchResendLink(bearer) {
  console.log(bearer);
  const response = await fetch(BASE_URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
    // body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}
