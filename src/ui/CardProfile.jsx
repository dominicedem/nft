import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setOverlay } from "../Slices/overLaySlice";
import { useSearchParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid var(--inputField_border);
  width: 100%;
  cursor: pointer;
  background: var(--btn_hover);
  border-radius: 1rem;
  padding: 0.5rem 0;
  font-size: 1.8rem;
  color: var(--black_text);
  &:hover {
    background-color: var(--tertiary_text_faint);
  }
`;

function CardProfile({ id }) {
  const dispatch = useDispatch();
  return (
    <HashLink style={{ textDecoration: "none" }} to={`/dashboard?nftId=${id}`}>
      <CardBox onClick={() => dispatch(setOverlay(true))}>Edit</CardBox>
    </HashLink>
  );
}

export default CardProfile;
