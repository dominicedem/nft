import styled from "styled-components";
import Button from "./Button";
import Cards from "./Cards";

const DashCardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  width: 100%;
  overflow: hidden;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 120rem;
`;

const Text = styled.div`
  font-size: 2rem;
  color: var(--black_text);
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
    id: 3,
    sub: "Plutonics",
  },
];
function DashCards() {
  return (
    <DashCardsStyle>
      <Flex style={{ justifyContent: "space-between", width: "100%" }}>
        <Text>NFT</Text>
        <Button padding={"var(--padding_btn_small)"}>See all</Button>
      </Flex>
      <Flex>
        {data.map((val, ind) => (
          <Cards key={ind} data={val} profile="true" />
        ))}
      </Flex>
    </DashCardsStyle>
  );
}

export default DashCards;
