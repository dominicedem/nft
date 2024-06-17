import styled from "styled-components";
import Button from "./Button";
import Cards from "./Cards";

const DashCardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 100%;
  overflow: hidden;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 120rem;
  padding-bottom: 1.2rem;
`;

const Text = styled.div`
  font-size: 2rem;
  color: var(--black_text);
  font-weight: 600;
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
  {
    image_url: `/fly.webp`,
    id: 4,
    sub: "Plutonics",
  },
];
function DashCards({ all, header, defaultCard, Exhibition, profile, Edit }) {
  return (
    <DashCardsStyle>
      <Flex style={{ justifyContent: "space-between", width: "100%" }}>
        <Text>{header}</Text>
        <Button padding={"var(--padding_btn_small)"}>See all</Button>
      </Flex>
      <Flex>
        {data.map((val, ind) => (
          <Cards
            all={all}
            defaultCard={defaultCard}
            key={ind}
            data={val}
            profile={profile}
            Exhibition={Exhibition}
            Edit={Edit}
          />
        ))}
      </Flex>
    </DashCardsStyle>
  );
}

export default DashCards;
