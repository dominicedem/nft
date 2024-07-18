import styled from "styled-components";
import Cards from "./Cards";
import { IoMdAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
const linkStyle = {
  width: "10%",
  alignSelf: "center",
  marginTop: "5rem",
};
function AllUserExhibition() {
  const { userData } = useSelector((state) => state.authData);

  return (
    <AllUserExhibitionStyle>
      <Text>Exhibition</Text>
      <Grid>
        {userData &&
          userData?.myExhibition?.map((val, ind) => (
            <Cards
              key={ind}
              data={val}
              profile="true"
              Exhibition="true"
              all="true"
            />
          ))}
      </Grid>
      <Link style={linkStyle} to="/dashboard/createExhibition">
        <Add>
          <IoMdAdd style={iconStyle} />
        </Add>
      </Link>
      <Text
        style={{ fontSize: "1.6rem", alignSelf: "center", marginTop: "-1rem" }}
      >
        Add more
      </Text>
    </AllUserExhibitionStyle>
  );
}

export default AllUserExhibition;
