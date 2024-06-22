import styled from "styled-components";
import Navigation from "../ui/Navigation";
import SliderVertical from "../ui/SliderVertical";
import useScroll from "../hooks/handleScroll";
import SliderCon from "../ui/SliderCon";
import Autotype from "../ui/Autotype";
import Slider from "../ui/Slider";
import VerticalSlider from "../ui/VerticalSlider";
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
  align-items: center;
  justify-content: center;
  width: 99.5vw;
  height: 80vh;
  background: linear-gradient(#0001 50%, #ffff), url("/hero.jpg");
  background-size: cover;
  background-position: 50% 40%;
  margin-bottom: 7rem;
`;
const VerticalBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  overflow-y: hidden;
  height: 100%;
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
  width: 95%;
  height: 75%;
  background: #ffffff46;
  backdrop-filter: blur(5px);
  padding: 2.5rem 1rem 1rem 7rem;
  border: 1px solid var(--inputField_border);
  border-radius: 1rem;
  transform: translateY(23%);
`;

const data = [
  {
    types: "Art",
    id: 1,
  },
  {
    types: "Gaming",
    id: 2,
  },
  {
    types: "Membership",
    id: 2,
  },
  {
    types: "PFPs",
    id: 2,
  },
  {
    types: "Photography",
    id: 4,
  },
  {
    types: "Others",
    id: 3,
  },
];
function Home() {
  const { offset } = useScroll();
  return (
    <HomeStyle>
      <NavStyle className={offset === 0 ? "default" : "adapt"}>
        <Navigation scroll={offset} home="true" />
      </NavStyle>
      <Landing>
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
        <SliderCon datas={datas} right={{ text: "See all" }} />
      ))}
    </HomeStyle>
  );
}

export default Home;
