import styled from "styled-components";
import UserProfile from "./UserProfile";

const UserNftProfile1Style = styled.div`
  width: 100%;
`;
function UserNftProfile() {
  return (
    <UserNftProfile1Style>
      <UserProfile />
    </UserNftProfile1Style>
  );
}

export default UserNftProfile;
