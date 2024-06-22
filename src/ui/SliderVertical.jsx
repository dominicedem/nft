import styled from "styled-components";
import Cards from "./Cards";

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
    image_url: `/hero.jpg`,
    id: 7,
    sub: "facebook",
  },
];

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.5rem;
  @media (min-width: 980px) {
    width: 90%;
  }
`;
const Img = styled.img`
  /* width: 18rem;
  height: 25rem; */
  object-fit: cover;
  aspect-ratio: 1/2;
  border-radius: 1rem;
`;

function SliderVertical({ type }) {
  return (
    <InnerBox className={type ? "vertical" : "vertical1"}>
      {data.map((val, _) => (
        <Img
          src={val.image_url}
          alt="logo"
          height={type ? "150" : "300"}
          width={type ? "110" : "200"}
        />
      ))}
    </InnerBox>
  );
}

export default SliderVertical;
