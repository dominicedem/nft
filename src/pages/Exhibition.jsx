import styled from "styled-components";
import UserProfile from "./UserProfile";

const ExhibtionStyle = styled.div`
  width: 100%;
`;
function Exhibtion() {
  return (
    <ExhibtionStyle>
      <UserProfile exhibition="true" />
    </ExhibtionStyle>
  );
}

export default Exhibtion;
