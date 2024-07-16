import styled from "styled-components";
import Navigation from "../ui/Navigation";
import NftProfile from "../ui/NftProfile";
import SliderCon from "../ui/SliderCon";
import useFetchBuyNft from "../hooks/useFetchBuyNft";
import useFetchLanding from "../hooks/useFetchLanding";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchModal } from "../Slices/SearchSlice";
import SearchBar from "../ui/SearchBar";
import Loading from "../ui/Loading";
import Footer from "../ui/Footer";

const BuyNftStyle = styled.div`
  width: 99.5vw;
  height: fit-content;
  position: relative;
`;
const NavStyle = styled.div`
  width: 99.5vw;
  position: fixed;
  z-index: 100;
`;
const More = styled.div`
  width: 99.5%;
  margin: 3rem auto;
  border-radius: 1.5rem;
  padding: 1rem 0;
  background-color: var(--light_faint);
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
  z-index: 1000;
  width: 100%;
  height: 100%;
`;
const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  background: var(--overlay_background);
  z-index: 100;
`;
function BuyNft() {
  const [searchParams, _] = useSearchParams();
  let category = searchParams?.get("category");
  const { data, nftId, mutate, isBlur, setIsBlur } = useFetchBuyNft();
  const dispatch = useDispatch();
  const { data: landingData } = useFetchLanding();
  const { searchModal } = useSelector((state) => state.searchData);

  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") &&
      dispatch(setSearchModal(false));
  }

  return (
    <BuyNftStyle id="top">
      <NavStyle className="adapt">
        <Navigation />
      </NavStyle>
      <NftProfile
        setIsBlur={setIsBlur}
        id={nftId}
        mutate={mutate}
        data={data?.data}
      />
      <More>
        <SliderCon
          data={landingData?.data[`${category}`]}
          title={`More from ${category}`}
          right={{ text: "view all" }}
          font={{ size: "2.1rem", weight: "300" }}
          defaultCard="true"
          description="buy"
        />
      </More>
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
      {isBlur && (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      )}
    </BuyNftStyle>
  );
}

export default BuyNft;
