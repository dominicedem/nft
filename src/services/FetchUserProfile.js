const BASE_URL = import.meta.env.VITE_USER_PROFILE;
export default async function FetchUserProfile(productid) {
  const response = await fetch(`${BASE_URL}${productid}`);
  const data = await response.json();
  console.log(productid, data);
  return data;
}
