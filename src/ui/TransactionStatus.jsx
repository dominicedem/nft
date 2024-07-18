import styled from "styled-components";

const TransactionStatusStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 0.5rem;
  background: var(--btn_hover);
  @media (max-width: 500px) {
    width: ${(props) => props.type === "trans" && "45%"};
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  color: var(--black_text);
  border-radius: 0.5rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.6rem;
`;
function TransactionStatus({
  sold,
  setSold,
  bought,
  setBought,
  width,
  text,
  padding,
  font,
  transDetails,
}) {
  function handleSold() {
    setSold(true);
    setBought(false);
  }
  function handleBought() {
    setBought(true);
    setSold(false);
  }
  return (
    <TransactionStatusStyle type={`${transDetails}`}>
      <Box
        style={
          padding && font && { padding: `${padding}`, fontWeight: `${font}` }
        }
        className={sold && "activeTransaction"}
        onClick={() => handleSold()}
      >
        {text?.first}
      </Box>
      <Box
        style={
          padding && font && { padding: `${padding}`, fontWeight: `${font}` }
        }
        className={bought && "activeTransaction"}
        onClick={() => handleBought()}
      >
        {text?.second}
      </Box>
    </TransactionStatusStyle>
  );
}

export default TransactionStatus;
