const BASE_URL = import.meta.env.VITE_SEARCH;
export default async function FetchSearchNfts() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}
