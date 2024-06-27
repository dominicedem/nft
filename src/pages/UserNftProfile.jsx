import styled from "styled-components";
import UserProfile from "./UserProfile";
import useFetchUserProfile from "../hooks/useFetchUserProfile";
import { useEffect } from "react";
import FetchUserProfile from "../services/FetchUserProfile";
import SearchBar from "../ui/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useFetchExhibition from "../hooks/useFetchExhibition";
import { setSearchModal } from "../Slices/SearchSlice";

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
  const { searchModal } = useSelector((state) => state.searchData);
  const [searchParams, _] = useSearchParams();
  const { exhNfts } = useFetchExhibition(searchParams?.get("productId"));

  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") &&
      dispatch(setSearchModal(false));
  }
  return (
    <UserNftProfile1Style>
      <UserProfile isExhibition="" exhibition="true" displayNft="true" />
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
