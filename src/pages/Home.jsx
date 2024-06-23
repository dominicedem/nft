import styled from "styled-components";
import Navigation from "../ui/Navigation";
import useScroll from "../hooks/useScroll";
import SliderCon from "../ui/SliderCon";
import Autotype from "../ui/Autotype";
import VerticalSlider from "../ui/VerticalSlider";
import SubNav from "../ui/SubNav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAll } from "../Slices/navSlice";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

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
  gap: 5rem;
  background: linear-gradient(#0001 50%, #ffff), url("/hero.jpg");
  background-size: cover;
  background-position: 50% 40%;
  margin-bottom: 7rem;
  padding-top: 8rem;
`;
const SubNavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
  width: 100%;
  padding-left: 2rem;
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
  width: 120rem;
  height: 75%;
  background: #ffffff46;
  backdrop-filter: blur(5px);
  padding: 0 1rem 1rem 7rem;
  border: 1px solid var(--inputField_border);
  border-radius: 1rem;
`;

const data = [
  {
    types: "art",
    category: "art",
    id: 1,
  },
  {
    types: "gaming",
    category: "gaming",
    id: 2,
  },
  {
    types: "membership",
    category: "membership",
    id: 3,
  },
  {
    types: "pfp",
    category: "pfp",
    id: 4,
  },
  {
    types: "photography",
    category: "photography",
    id: 5,
  },
  {
    types: "exhibition",
    category: "exhibition",
    id: 6,
  },
];
function Home() {
  const { offset } = useScroll();
  const dispatch = useDispatch();
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
            <VerticalSlider type="" />
            <VerticalSlider type="true" />
            <VerticalSlider type="" />
          </VerticalBox>
        </AnimationBox>
      </Landing>
      {data.map((datas) => (
        <SliderCon key={datas.id} title={datas} right={{ text: "See all" }} />
      ))}
    </HomeStyle>
  );
}

export default Home;
