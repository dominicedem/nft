const BASE_URL = import.meta.env.VITE_BUYPRODUCT;
export default async function FetchBuyProduct(productId) {
  const storage = JSON.parse(localStorage.getItem("userData"));
  const response = await fetch(`${BASE_URL}${productId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${storage.token}`,
    },
  });
  const data = await response.json();
  return data;
}
