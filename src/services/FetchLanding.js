const BASE_URL = import.meta.env.VITE_LANDING;
export default async function FetchLanding() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}
// export default async function FetchCategory() {
//   const response = await fetch(BASE_URL, {
//     method: "POST",
//     headers: {
//       "content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       userId,
//       password,
//     }),
//   }).then((res) => res.json());
//   return response;
// }
