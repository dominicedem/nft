import styled from "styled-components";
import Cards from "./Cards";
import { IoMdAdd } from "react-icons/io";

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
  {
    image_url: `/degods.webp`,
    id: 5,
    sub: "Plutonics",
  },
  {
    image_url: `/light.webp`,
    id: 6,
    sub: "Plutonics",
  },
  {
    image_url: `/degods.webp`,
    id: 6,
    sub: "Plutonics",
  },
  {
    image_url: `/fly.webp`,
    id: 7,
    sub: "Plutonics",
  },
  {
    image_url: `/hero.jpg`,
    id: 8,
    sub: "Plutonics",
  },
  {
    image_url: `/light.webp`,
    id: 9,
    sub: "Plutonics",
  },
  {
    image_url: `/degods.webp`,
    id: 10,
    sub: "Plutonics",
  },
];

const AllUserExhibitionStyle = styled.div`
  width: 100%;
  background: var(--subtle_background);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem 2rem 1rem;
`;
const Text = styled.span`
  font-size: 2rem;
  color: var(--black_bacground);
  font-weight: 600;
  text-transform: capitalize;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 1rem;
  @media (max-width: 1420px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1270px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Add = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 1.4rem;
  border-radius: 1rem;
  cursor: pointer;
  background-color: var(--black_bacground);
  &:hover {
    background: var(--black_bacground_hover);
  }
`;
const iconStyle = {
  width: "3rem",
  height: "3rem",
  color: "var(--white_text)",
};
function AllUserExhibition() {
  return (
    <AllUserExhibitionStyle>
      <Text>Exhibition</Text>
      <Grid>
        {data.map((val, ind) => (
          <Cards
            key={ind}
            data={val}
            profile="true"
            Exhibition="true"
            all="true"
          />
        ))}
      </Grid>
      <Add>
        <IoMdAdd style={iconStyle} />
      </Add>
      <Text
        style={{ fontSize: "1.6rem", alignSelf: "center", marginTop: "-1rem" }}
      >
        Add more
      </Text>
    </AllUserExhibitionStyle>
  );
}

export default AllUserExhibition;
