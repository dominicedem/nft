import styled from "styled-components";

const TransactionStatusStyle = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  background: var(--overlay_background);
  width: 20%;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  border-radius: 1rem;
  width: 50%;
  height: 2.5rem;
  cursor: pointer;
  transition: all 0.3s;
`;
function ToggleBtn({ on, setOn }) {
  return (
    <TransactionStatusStyle>
      <Box
        className={on ? "activeToggle" : "notToggle"}
        onClick={() => setOn((el) => !el)}
      ></Box>
    </TransactionStatusStyle>
  );
}

export default ToggleBtn;
