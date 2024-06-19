import { useState } from "react";
import styled from "styled-components";
import WithdrawStatus from "../ui/WithdrawStatus";

const WithdrawalStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--overlay_background);
  position: fixed;
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
`;
function Withdrawal() {
  const [overlay, setOverlay] = useState(true);
  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") && setOverlay(false);
  }
  return (
    <WithdrawalStyle>
      {overlay && (
        <Overlay className="overlay" onClick={(e) => handleOverlay(e)}>
          <WithdrawStatus status="true" />
        </Overlay>
      )}
    </WithdrawalStyle>
  );
}

export default Withdrawal;
