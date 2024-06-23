import styled from "styled-components";
import Navigation from "../ui/Navigation";
import NftProfile from "../ui/NftProfile";
import SliderCon from "../ui/SliderCon";

const BuyNftStyle = styled.div`
  width: 99.5vw;
  height: fit-content;
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
const data = [
  {
    types: "More from this category",
    id: 1,
  },
];
function BuyNft() {
  return (
    <BuyNftStyle>
      <NavStyle className="adapt">
        <Navigation />
      </NavStyle>
      <NftProfile />
      <More>
        <SliderCon
          title={data[0]}
          right={{ text: "See Entire Category" }}
          font={{ size: "2.2rem", weight: "300" }}
        />
      </More>
    </BuyNftStyle>
  );
}

export default BuyNft;
