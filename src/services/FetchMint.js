const BASE_URL = import.meta.env.VITE_MINT;
export default async function FetchMint(data, token) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  const result = await response.json();
  return result;
}
