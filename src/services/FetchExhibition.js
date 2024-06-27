const BASE_URL = import.meta.env.VITE_EXHIBITION;
const BASE_URL_NFTS = import.meta.env.VITE_EXHIBITION_NFTS;
export default async function FetchExhibition() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}
export async function FetchExhibitionNftS(productId) {
  const response = await fetch(`${BASE_URL_NFTS}/${productId}`);
  const data = await response.json();
  return data;
}
