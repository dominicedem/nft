import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/Constants";
import Button from "./Button";

const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  gap: 1rem;
  width: fit-content;
`;
const PaginationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Page = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  color: var(--black_text);
  padding: 1.2rem 2.1rem;
  font-size: 1.6rem;
  border: none;
`;

const dataSize = 200;
function Pagination() {
  const [searchParam, setSearchParam] = useSearchParams();

  const current_page = !searchParam.get("page")
    ? 1
    : Number(searchParam.get("page"));
  const totalPages = Math.ceil(dataSize / PAGE_SIZE);
  function handleNext() {
    const next = current_page !== totalPages ? current_page + 1 : current_page;
    searchParam.set("page", next);
    setSearchParam(searchParam);
  }
  function handlePrev() {
    const Prev = current_page === 1 ? current_page : current_page - 1;
    searchParam.set("page", Prev);
    setSearchParam(searchParam);
  }
  return (
    <PaginationStyle>
      <PaginationBox>
        <Page
          className={current_page === 1 ? "paginationStop" : "withoutBorder"}
          onClick={handlePrev}
          disabled={current_page === 1}
        >
          Prev
        </Page>
        <Page type="count">{current_page}</Page>
        <Page
          className={
            current_page === totalPages ? "paginationStop" : "withoutBorder"
          }
          onClick={handleNext}
          disabled={current_page === totalPages}
        >
          Next
        </Page>
      </PaginationBox>
    </PaginationStyle>
  );
}

export default Pagination;
