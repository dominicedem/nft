import styled from "styled-components";
import UserProfile from "../ui/UserProfile";
import useFetchUserProfile from "../hooks/useFetchUserProfile";
import SearchBar from "../ui/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchModal } from "../Slices/SearchSlice";
import { useParams } from "react-router-dom";

const UserNftProfile1Style = styled.div`
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
  z-index: 100;
  width: 100%;
  height: 100%;
`;
function UserNftProfile() {
  const dispatch = useDispatch();
  const params = useParams();
  const { searchModal } = useSelector((state) => state.searchData);
  const { data: userProfileData } = useFetchUserProfile(params?.userId);

  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") &&
      dispatch(setSearchModal(false));
  }
  return (
    <UserNftProfile1Style>
      <UserProfile
        isExhibition=""
        exhibition="true"
        displayNft="true"
        userProfileData={userProfileData}
      />
      {searchModal && (
        <Overlay
          tabIndex="-1"
          className="overlay"
          onClick={(e) => handleOverlay(e)}
        >
          <SearchBar />
        </Overlay>
      )}
    </UserNftProfile1Style>
  );
}

export default UserNftProfile;
