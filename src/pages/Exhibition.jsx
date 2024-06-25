import styled from "styled-components";
import UserProfile from "./UserProfile";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSearchModal } from "../Slices/SearchSlice";
import SearchBar from "../ui/SearchBar";

const ExhibtionStyle = styled.div`
  width: 100%;
  position: relative;
`;
const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;
const Text = styled.span`
  font-size: 1.4rem;
  color: var(--black_text);
  border-radius: 5rem;
  padding: 0.5rem 2rem;
  background: var(--balance_background);
  backdrop-filter: blur(5px);
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
function Exhibtion() {
  const dispatch = useDispatch();
  const { searchModal } = useSelector((state) => state.searchData);

  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") &&
      dispatch(setSearchModal(false));
  }
  return (
    <ExhibtionStyle>
      <UserProfile exhibition="true" isExhibition="true" />
      <BtnBox>
        <Button
          background="true"
          font="1.8rem"
          color="var(--white_text)"
          width="20%"
          padding="var(--padding_btn_big)"
        >
          Join Exhibition
        </Button>
        <Text>Fee: 0.02 ETH</Text>
      </BtnBox>
      {searchModal && (
        <Overlay
          tabIndex="-1"
          className="overlay"
          onClick={(e) => handleOverlay(e)}
        >
          <SearchBar />
        </Overlay>
      )}
    </ExhibtionStyle>
  );
}

export default Exhibtion;
