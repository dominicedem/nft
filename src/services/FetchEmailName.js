const BASE_URL = import.meta.env.VITE_USER_EMAIL_PASSWORD;
export default async function FetchEmailName() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}
