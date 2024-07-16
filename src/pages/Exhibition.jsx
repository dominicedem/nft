import styled from "styled-components";
import UserProfile from "../ui/UserProfile";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSearchModal } from "../Slices/SearchSlice";
import SearchBar from "../ui/SearchBar";
import useFetchExhibition from "../hooks/useFetchExhibition";
import { useNavigate, useSearchParams } from "react-router-dom";
import JoinExhibitionModal from "../ui/JoinExhibitionModal";
import { setJoinOverLay } from "../Slices/overLaySlice";
import useAuthenticate from "../hooks/useAuthenticate";
import Footer from "../ui/Footer";

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
  width: fit-content;
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
  const [searchParams, _] = useSearchParams();
  const { exhNfts } = useFetchExhibition(searchParams?.get("productId"));
  const { joinOverLay } = useSelector((state) => state.overlayData);
  const { storage } = useAuthenticate();
  const navigate = useNavigate();

  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") &&
      dispatch(setSearchModal(false));
    e.target.className.split(" ").includes("joinOverlay") &&
      dispatch(setJoinOverLay(false));
  }

  function handleJoinExhibition() {
    storage?.isAuthenticated
      ? dispatch(setJoinOverLay(true))
      : navigate("/signin", { replace: true });
  }

  return (
    <ExhibtionStyle>
      <UserProfile
        defaultCard="true"
        rawData={exhNfts}
        data={exhNfts?.data?.exhibitionNft}
        isExhibition="true"
        displayNft="true"
      />
      <BtnBox onClick={() => handleJoinExhibition()}>
        <Button
          background="true"
          font="1.8rem"
          color="var(--white_text)"
          width="fit-content"
          padding="var(--padding_btn_big)"
        >
          Join Exhibition
        </Button>
        <Text>Fee: {exhNfts?.data?.joinFee} ETH</Text>
      </BtnBox>
      <Footer />
      {searchModal && (
        <Overlay
          tabIndex="-1"
          className="overlay"
          onClick={(e) => handleOverlay(e)}
        >
          <SearchBar />
        </Overlay>
      )}
      {joinOverLay && (
        <Overlay
          tabIndex="-1"
          className="joinOverlay"
          onClick={(e) => handleOverlay(e)}
        >
          <JoinExhibitionModal />
        </Overlay>
      )}
    </ExhibtionStyle>
  );
}

export default Exhibtion;
