import styled from "styled-components";

const ErrorRouteStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99.5vw;
  height: 100vh;
  font-size: 3.1rem;
  background-color: var(--appbackgroundcolor);
`;
function ErrorRoute() {
  return <ErrorRouteStyle>Page not found ): 😢</ErrorRouteStyle>;
}

export default ErrorRoute;
