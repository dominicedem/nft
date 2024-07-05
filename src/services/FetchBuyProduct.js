import { useSearchParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BUYPRODUCT;
export default async function FetchBuyProduct(productId) {
  //   const [searchParams, _] = useSearchParams();
  //   const id = searchParams?.get("productId");
  //   console.log(id);
  const storage = JSON.parse(localStorage.getItem("userData"));
  const response = await fetch(`${BASE_URL}${productId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${storage.token}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
}
