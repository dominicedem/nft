import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { PiNotePencilLight } from "react-icons/pi";
import { MdOutlineStore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { GiCardExchange } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";

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
    color: #5555559a;
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
const iconStyleOut = {
  width: "2.5rem",
  height: "2.5rem",
  transform: "rotate(180deg)",
};

function SideBar() {
  const { userData } = useSelector((state) => state.authData);
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }
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
            <Link style={linkStyle} to="/dashboard">
              Account overview
            </Link>
          </List>
          <List>
            <PiNotePencilLight style={iconStyle} />
            <Link style={linkStyle} to="mint">
              Mint Nft
            </Link>
          </List>
          <List>
            <CgProfile style={iconStyle} />
            <Link style={linkStyle} to={`/ownNftProfile/${userData?.id}`}>
              My Nft profile
            </Link>
          </List>
          <List>
            <GiCardExchange style={iconStyle} />
            <HashLink smooth style={linkStyle} to="/dashboard#transaction">
              Transaction
            </HashLink>
          </List>
          <List>
            <MdOutlineStore style={iconStyle} fill="" />
            <Link style={linkStyle} to="/">
              Market-place
            </Link>
          </List>
          <List>
            <GiCardExchange style={iconStyle} fill="" />
            <HashLink smooth style={linkStyle} to="/dashboard#nftTransaction">
              Nft transactions
            </HashLink>
          </List>
          <List
            style={{ color: "var(--error_text)" }}
            onClick={() => handleLogout()}
          >
            <MdLogout style={iconStyleOut} fill="var(--error_text)" />
            Sign Out
          </List>
        </ListBox>
      </ListBox>
    </SideBarStyle>
  );
}

export default SideBar;
