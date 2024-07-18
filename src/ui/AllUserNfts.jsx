import styled from "styled-components";
import Cards from "./Cards";
import { useSelector } from "react-redux";

const AllUserNftsStyle = styled.div`
  width: 100%;
  background: var(--subtle_background);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem 3rem 1rem;
  @media (max-width: 495px) {
    padding: 0 0.5rem 3rem 0.5rem;
  }
`;
const Text = styled.span`
  font-size: 2rem;
  color: var(--black_bacground);
  font-weight: 600;
  text-transform: capitalize;
`;
const Grid = styled.div`
  display: grid;
  row-gap: 2rem;
  column-gap: 3rem;
  padding: 0 1rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1290px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 495px) {
    column-gap: 1rem;
    padding: 0 0.5rem;
  }
  @media (max-width: 340px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function AllUserNfts() {
  const { userData } = useSelector((state) => state.authData);

  return (
    <AllUserNftsStyle>
      <Text>NFTs</Text>
      <Grid>
        {userData
          ? userData?.myNft?.map((val, ind) => (
              <Cards
                defaultCard="true"
                key={ind}
                data={val}
                profile="true"
                Edit="true"
                all="true"
              />
            ))
          : Array.from({ length: 3 }).map((_, ind) => (
              <Cards
                defaultCard="true"
                key={ind}
                profile="true"
                Edit="true"
                all="true"
                // width="30rem"
              />
            ))}
      </Grid>
    </AllUserNftsStyle>
  );
}

export default AllUserNfts;
