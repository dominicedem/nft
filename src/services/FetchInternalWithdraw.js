const BASE_URL = import.meta.env.VITE_WITHDRAW_INTERNAL;
const storage = JSON.parse(localStorage.getItem("userData"));
export default async function FetchInternalWithdraw(data) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${storage.token}`,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}
