import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/Constants";
// PAGE_SIZE;
function usePagination(data) {
  const [searchParams, setSearchParams] = useSearchParams();
  let categoryPage = !searchParams?.get("page") ? 1 : searchParams?.get("page");
  let start = Number(categoryPage) * PAGE_SIZE - PAGE_SIZE;
  let paginatedData = data?.slice(start, start + PAGE_SIZE);
  return { paginatedData };
}
export default usePagination;
