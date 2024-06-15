import styled from "styled-components";

const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99.5vw;
  height: 100vw;
  font-size: 4rem;
`;
function Loading() {
  return <LoadingStyle>Loading</LoadingStyle>;
}

export default Loading;
