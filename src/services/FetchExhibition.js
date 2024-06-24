const BASE_URL = import.meta.env.VITE_EXHIBITION;
export default async function FetchExhibition() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}
