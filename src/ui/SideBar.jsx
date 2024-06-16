import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const SideBarStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: inherit;
`;
const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10vh;
  width: 100%;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2.5rem;
  padding: 2rem 0 0 2rem;
  background-clip: text;
  background: -webkit-linear-gradient(60deg, #0ff, #ea56ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Img = styled.img`
  width: 3rem;
`;
const List = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.9rem;
  padding: 1rem 0 1rem 2rem;
  width: 100%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  &:hover {
    color: #29292948;
  }
`;
const linkStyle = {
  color: "inherit",
  textDecoration: "none",
  width: "100%",
};
const iconStyle = {
  width: "2rem",
  height: "2rem",
  color: "var(--black_text)",
};
function SideBar() {
  return (
    <SideBarStyle>
      <ListBox>
        <Link style={linkStyle} to="/">
          <Logo>
            <Img src="/logo.png" alt="Logo" />
            SigmaNft
          </Logo>
        </Link>
        <ListBox style={{ gap: "1.5rem" }}>
          <List>
            <RiVerifiedBadgeFill style={iconStyle} />
            <Link style={linkStyle}>Account overview</Link>
          </List>
          <List>
            <RiVerifiedBadgeFill style={iconStyle} />
            <Link style={linkStyle}>Mint Nft</Link>
          </List>
          <List>
            <RiVerifiedBadgeFill style={iconStyle} />
            <Link style={linkStyle}>My Nft profile</Link>
          </List>
          <List>
            <RiVerifiedBadgeFill style={iconStyle} />
            <Link style={linkStyle}>Transaction</Link>
          </List>
          <List>
            <RiVerifiedBadgeFill style={iconStyle} />
            <Link style={linkStyle}>Nft transactions</Link>
          </List>
          <List>
            <RiVerifiedBadgeFill style={iconStyle} />
            <Link style={linkStyle} to="all">
              Market-place
            </Link>
          </List>
          <List>
            <RiVerifiedBadgeFill style={iconStyle} />
            <Link style={linkStyle}>Exhibition</Link>
          </List>
        </ListBox>
      </ListBox>
    </SideBarStyle>
  );
}

export default SideBar;
