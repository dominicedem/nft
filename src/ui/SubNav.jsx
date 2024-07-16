import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const SubNavStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
  overflow-x: hidden;
  @media (max-width: 900px) {
    &:hover {
      overflow-x: scroll;
    }
  }
  @media (max-width: 340px) {
    overflow-x: scroll;
  }
`;
const List = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
  border-radius: 0.7rem;
  color: var(--white_text);
  font-size: 1.7rem;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: var(--subnav_background);
  }
`;
const linkStyle = {
  textDecoration: "none",
  // color:""
};
function SubNav() {
  const params = useParams();
  return (
    <SubNavStyle>
      <Link style={linkStyle} to="/">
        <List className={!params?.type && "activeSubNav"}>All</List>
      </Link>
      <Link style={linkStyle} to="/category/arts">
        <List className={params?.type === "arts" && "activeSubNav"}>Arts</List>
      </Link>
      <Link style={linkStyle} to="/category/gaming">
        <List className={params?.type === "gaming" && "activeSubNav"}>
          Gaming
        </List>
      </Link>
      <Link style={linkStyle} to="/category/membership">
        <List className={params?.type === "membership" && "activeSubNav"}>
          Membership
        </List>
      </Link>
      <Link style={linkStyle} to="/category/pfps">
        <List className={params?.type === "pfps" && "activeSubNav"}>PFPs</List>
      </Link>
      <Link style={linkStyle} to="/category/photography">
        <List className={params?.type === "photography" && "activeSubNav"}>
          Photography
        </List>
      </Link>
      <Link style={linkStyle} to="/category/exhibition">
        <List className={params?.type === "exhibition" && "activeSubNav"}>
          Exhibition
        </List>
      </Link>
    </SubNavStyle>
  );
}

export default SubNav;
