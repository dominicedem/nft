const BASE_URL = import.meta.env.VITE_PAY_COMMISSION;
const storage = JSON.parse(localStorage.getItem("userData"));
export default async function FetchCommission() {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${storage.token}`,
    },
  });
  const result = await response.json();
  return result;
}
