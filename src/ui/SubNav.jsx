import styled from "styled-components";

const SubNavStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
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
  &:hover {
    background: var(--subnav_background);
  }
`;
function SubNav() {
  return (
    <SubNavStyle>
      <List>All</List>
      <List>Art</List>
      <List>Gaming</List>
      <List>Membership</List>
      <List>PFPs</List>
      <List>Photography</List>
      <List>Others</List>
    </SubNavStyle>
  );
}

export default SubNav;
