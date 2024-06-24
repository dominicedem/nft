const BASE_URL = import.meta.env.VITE_ETH_PRICE;
export default async function FetchEthPrice() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}
