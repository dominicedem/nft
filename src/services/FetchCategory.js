const BASE_URL = import.meta.env.VITE_CATEGORY;
export default async function FetchCategory(paramCategory) {
  const response = await fetch(`${BASE_URL}${paramCategory}`);
  const data = await response.json();
  return data;
}
