import { ScaleLoader } from "react-spinners";
import styled from "styled-components";

const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
  background: #ffffffa6;
`;

function Loading() {
  return (
    <LoadingStyle>
      <ScaleLoader color="var(--blue_btn)" loading="true" />
    </LoadingStyle>
  );
}

export default Loading;
