import styled from "styled-components";
import { setBought, setSold } from "../Slices/TransactionSlice";
import { useDispatch, useSelector } from "react-redux";

const TransactionStatusStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 0.5rem;
  background: var(--btn_hover);
  width: 20%;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1rem;
  color: var(--black_text);
  border-radius: 0.5rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.6rem;
`;
function TransactionStatus({ sold, setSold, bought, setBought }) {
  function handleSold() {
    setSold(true);
    setBought(false);
  }
  function handleBought() {
    setBought(true);
    setSold(false);
  }
  return (
    <TransactionStatusStyle>
      <Box className={sold && "activeTransaction"} onClick={() => handleSold()}>
        Sold
      </Box>
      <Box
        className={bought && "activeTransaction"}
        onClick={() => handleBought()}
      >
        Bought
      </Box>
    </TransactionStatusStyle>
  );
}

export default TransactionStatus;
