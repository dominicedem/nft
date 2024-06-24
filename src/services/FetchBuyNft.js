const BASE_URL = import.meta.env.VITE_BUYNFT;
export default async function FetchBuyNft(id) {
  const response = await fetch(`${BASE_URL}${id}`);
  const data = await response.json();
  return data;
}
