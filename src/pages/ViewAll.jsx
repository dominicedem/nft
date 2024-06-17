import styled from "styled-components";
import Navigation from "../ui/Navigation";
import SubNav from "../ui/SubNav";
import ViewAllDetails from "../ui/ViewAllDetails";
import Cards from "../ui/Cards";
import Pagination from "../ui/Pagination";

const ViewallStyle = styled.div`
  width: 99.5vw;
  padding-bottom: 5rem;
`;
const NavStyle = styled.div`
  width: 99.5vw;
  position: fixed;
  z-index: 100;
`;
const Header = styled.div`
  width: 100%;
  background-image: url("/degods.webp");
  background-size: cover;
  background-position: 50% 30%;
  height: 51vh;
  padding: 8.7rem 1.3rem;
  position: relative;
`;
const NftProImg = styled.div`
  position: absolute;
  bottom: -15.5%;
  left: 0.7%;
  width: 12.5rem;
  height: 12.6rem;
  border-radius: 1rem;
  padding: 0.4rem;
  background: var(--appbackgroundcolor);
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 0.7rem;
`;
const DetailsBox = styled.div`
  width: 100%;
  margin-top: 7rem;
  margin-bottom: 7rem;
`;
const AllCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 4rem;
  padding: 0 1rem;
  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;
const PagBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  padding-right: 1rem;
`;
const data = [
  {
    image_url: `/degods.webp`,
    id: 1,
    sub: "Space-star",
  },
  {
    image_url: `/light.webp`,
    id: 2,
    sub: "Boom",
  },
  {
    image_url: `/img1.webp`,
    id: 4,
    sub: "Plutonics",
  },
  {
    image_url: `/robot.webp`,
    id: 3,
    sub: "Azra-alpha",
  },
  {
    image_url: `/fly.webp`,
    id: 5,
    sub: "Twitter",
  },
  {
    image_url: `/newNft.webp`,
    id: 6,
    sub: "instagram",
  },
  {
    image_url: `/nft3.png`,
    id: 7,
    sub: "facebook",
  },
  {
    image_url: `/img1.webp`,
    id: 8,
    sub: "facebook",
  },
  {
    image_url: `/light.webp`,
    id: 9,
    sub: "facebook",
  },
  {
    image_url: `/nft2.png`,
    id: 10,
    sub: "facebook",
  },
  {
    image_url: `/degods.webp`,
    id: 11,
    sub: "facebook",
  },
  {
    image_url: `/fly.webp`,
    id: 12,
    sub: "facebook",
  },
];
function viewAll() {
  return (
    <ViewallStyle>
      <NavStyle className="adapt">
        <Navigation />
      </NavStyle>
      <Header>
        <SubNav />
        <NftProImg>
          <Img src="/img1.webp" />
        </NftProImg>
      </Header>
      <DetailsBox>
        <ViewAllDetails />
      </DetailsBox>
      <AllCards>
        {data.map((val, _) => (
          <Cards defaultCard="true" all="true" key={val.id} data={val} />
        ))}
      </AllCards>
      <PagBox>
        <Pagination />
      </PagBox>
    </ViewallStyle>
  );
}

export default viewAll;
