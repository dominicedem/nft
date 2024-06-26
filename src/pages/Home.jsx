import styled from "styled-components";
import Navigation from "../ui/Navigation";
import useScroll from "../hooks/useScroll";
import SliderCon from "../ui/SliderCon";
import Autotype from "../ui/Autotype";
import VerticalSlider from "../ui/VerticalSlider";
import SubNav from "../ui/SubNav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAll } from "../Slices/navSlice";
import useFetchLanding from "../hooks/useFetchLanding";
import SearchBar from "../ui/SearchBar";
import { setSearchModal } from "../Slices/SearchSlice";

const HomeStyle = styled.div`
  width: 99.5vw;
  background: var(--appbackgroundcolor);
`;
const NavStyle = styled.div`
  width: 99.5vw;
  position: fixed;
  z-index: 100;
`;
const Landing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 99.5vw;
  height: 90vh;
  gap: 4rem;
  background: linear-gradient(#0001 50%, #ffff), url("/hero.jpg");
  background-size: cover;
  background-position: 50% 40%;
  padding-top: 7rem;
`;
const SubNavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
  width: 100%;
  padding-left: 2.5%;
`;
const VerticalBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  overflow-y: hidden;
  gap: 0.8rem;
  height: 100%;
  transform: translateY(1.5%);
`;

const AutoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 100%;
`;

const AnimationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
  width: 88%;
  height: 75%;
  background: #ffffff46;
  backdrop-filter: blur(5px);
  padding: 0 1% 1% 5%;
  border: 1px solid var(--inputField_border);
  border-radius: 1rem;
  @media (max-width: 1290px) {
    width: 95%;
  }
`;
const MobileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1290px) {
    display: none;
  }
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

function Home() {
  const { offset } = useScroll();
  const dispatch = useDispatch();
  const { data: landingData, isLoading } = useFetchLanding();
  const { searchModal } = useSelector((state) => state.searchData);

  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") &&
      dispatch(setSearchModal(false));
  }
  useEffect(() => {
    dispatch(setAll(true));
  });
  return (
    <HomeStyle>
      <NavStyle className={offset === 0 ? "default" : "adapt"}>
        <Navigation scroll={offset} home="true" />
      </NavStyle>
      <Landing>
        <SubNavBox>
          <SubNav />
        </SubNavBox>
        <AnimationBox>
          <AutoBox>
            <Autotype />
          </AutoBox>
          <VerticalBox>
            <MobileBox>
              <VerticalSlider type="true" />
            </MobileBox>
            <VerticalSlider type="" />
            <VerticalSlider type="true" />
            <VerticalSlider type="" />
          </VerticalBox>
        </AnimationBox>
      </Landing>
      <SliderCon
        defaultCard="true"
        isLoading={isLoading}
        data={landingData?.data.arts}
        title="arts"
        right={{ text: "view all" }}
      />
      <SliderCon
        defaultCard="true"
        isLoading={isLoading}
        data={landingData?.data.gaming}
        title="gaming"
        right={{ text: "view all" }}
      />
      <SliderCon
        defaultCard="true"
        isLoading={isLoading}
        data={landingData?.data.membership}
        title="membership"
        right={{ text: "view all" }}
      />
      <SliderCon
        defaultCard="true"
        isLoading={isLoading}
        data={landingData?.data.pfps}
        title="pfps"
        right={{ text: "view all" }}
      />
      <SliderCon
        defaultCard="true"
        isLoading={isLoading}
        data={landingData?.data.photography}
        title="photography"
        right={{ text: "view all" }}
      />
      <SliderCon
        Exhibition="true"
        isLoading={isLoading}
        data={landingData?.data.exhibition}
        title="exhibition"
        right={{ text: "view all" }}
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
    </HomeStyle>
  );
}

export default Home;
