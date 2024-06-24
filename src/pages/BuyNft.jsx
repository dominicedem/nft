import styled from "styled-components";
import Navigation from "../ui/Navigation";
import NftProfile from "../ui/NftProfile";
import SliderCon from "../ui/SliderCon";
import useFetchBuyNft from "../hooks/useFetchBuyNft";
import useFetchLanding from "../hooks/useFetchLanding";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, _] = useSearchParams();
  let category = searchParams?.get("category");
  const { data } = useFetchBuyNft();
  const { data: landingData, isLoading } = useFetchLanding();
  return (
    <BuyNftStyle id="top">
      <NavStyle className="adapt">
        <Navigation />
      </NavStyle>
      <NftProfile data={data?.data} />
      <More>
        <SliderCon
          data={landingData?.data[`${category}`]}
          title="More from this category"
          right={{ text: "See Entire Category" }}
          font={{ size: "2.2rem", weight: "300" }}
        />
      </More>
    </BuyNftStyle>
  );
}

export default BuyNft;
