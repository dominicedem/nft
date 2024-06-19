import styled from "styled-components";

const TransactionStatusStyle = styled.div`
  display: flex;
  align-items: center;
  /* padding: 0.1rem; */
  border-radius: 10rem;
  background: var(--overlay_background);
  width: 20%;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  border-radius: 10rem;
  width: 50%;
  height: 2.5rem;
  cursor: pointer;
  transition: all 0.3s;
  background: var(--blue_btn);
`;
function ToggleBtn({ on, setOn }) {
  return (
    <TransactionStatusStyle>
      <Box
        className={on && "activeToggle"}
        onClick={() => setOn((el) => !el)}
      ></Box>
    </TransactionStatusStyle>
  );
}

export default ToggleBtn;
