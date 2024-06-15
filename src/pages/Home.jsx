import styled from "styled-components";
import Navigation from "../ui/Navigation";
import Slider from "../ui/Slider";
import useScroll from "../hooks/handleScroll";
import SliderCon from "../ui/SliderCon";

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
  align-items: end;
  flex-direction: column;
  gap: 15rem;
  width: 99.5vw;
  background: linear-gradient(#0001 20%, #ffff), url("/degods.webp");
  background-size: cover;
  margin-bottom: 7rem;
`;

const Text = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  color: var(--black_text);
  width: 90%;
  font-weight: 700;
  padding-right: 1rem;
  transform: translateX(6%);
  @media (max-width: 980px) {
    padding-right: 0;
    transform: translateX(4%);
  }
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
        <Text></Text>
        <Slider type="true" />
      </Landing>
      {data.map((datas) => (
        <SliderCon datas={datas} right={{ text: "See all" }} />
      ))}
    </HomeStyle>
  );
}

export default Home;
