import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setOverlay } from "../Slices/overLaySlice";

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

function CardProfile() {
  const dispatch = useDispatch();
  return <CardBox onClick={() => dispatch(setOverlay(true))}>Edit</CardBox>;
}

export default CardProfile;
