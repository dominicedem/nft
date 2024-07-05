const BASE_URL = import.meta.env.VITE_MYDETAILS;
export default async function FetchNewUserData(token) {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
}
