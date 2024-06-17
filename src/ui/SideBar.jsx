import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { PiNotePencilLight } from "react-icons/pi";
import { MdOutlineStore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsCollection } from "react-icons/bs";
import { GiCardExchange } from "react-icons/gi";

const SideBarStyle = styled.div`
  width: 100%;
  height: 100vh;
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
  padding: 2rem 0 0 3rem;
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
  gap: 3rem;
  font-size: 1.9rem;
  padding: 1rem 0 1rem 3rem;
  width: 100%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: var(--sideBar_text);
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
  width: "2.5rem",
  height: "2.5rem",
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
            <MdOutlineAccountBalanceWallet style={iconStyle} />
            <Link style={linkStyle}>Account overview</Link>
          </List>
          <List>
            <PiNotePencilLight style={iconStyle} />
            <Link style={linkStyle}>Mint Nft</Link>
          </List>
          <List>
            <CgProfile style={iconStyle} />
            <Link style={linkStyle}>My Nft profile</Link>
          </List>
          <List>
            <GiCardExchange style={iconStyle} />
            <Link style={linkStyle}>Transaction</Link>
          </List>
          <List>
            <MdOutlineStore style={iconStyle} fill="" />
            <Link style={linkStyle} to="all">
              Market-place
            </Link>
          </List>
          <List>
            <GiCardExchange style={iconStyle} fill="" />
            <Link style={linkStyle}>Nft transactions</Link>
          </List>
          <List>
            <BsCollection style={iconStyle} />
            <Link style={linkStyle}>Exhibition</Link>
          </List>
        </ListBox>
      </ListBox>
    </SideBarStyle>
  );
}

export default SideBar;
