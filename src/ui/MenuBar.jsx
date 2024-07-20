import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { PiNotePencilLight } from "react-icons/pi";
import { MdOutlineStore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { GiCardExchange } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenMenu } from "../Slices/MenuBar";
import { MdLogout } from "react-icons/md";

const MenuBarStyle = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--appbackgroundcolor);
  position: relative;
`;
const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  width: 35rem;
  margin-top: 8rem;
`;

const List = styled.span`
  display: flex;
  align-items: center;
  gap: 3rem;
  font-size: 2.2rem;
  padding: 1rem 0 1rem 3rem;
  width: 100%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  cursor: pointer;
  color: var(--sideBar_text);
  &:hover {
    color: #5555559a;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 3rem;
  background-clip: text;
  background: -webkit-linear-gradient(60deg, #087279, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;
const Img = styled.img`
  width: 3rem;
  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;
const Column = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const linkStyleNav = {
  color: "inherit",
  textDecoration: "none",
  position: "absolute",
  top: "2%",
  left: "5%",
};

const linkStyle = {
  color: "inherit",
  textDecoration: "none",
  width: "100%",
};

const iconStyle = {
  width: "3rem",
  height: "3rem",
  color: "var(--black_text)",
};
const iconStyleOut = {
  width: "3rem",
  height: "3rem",
  color: "var(--error_text)",
  transform: "rotate(180deg)",
};

function MenuBar() {
  const { userData } = useSelector((state) => state.authData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <MenuBarStyle>
      <Column>
        <Link style={linkStyleNav} to="/">
          <Logo>
            <Img src="/logo.png" alt="Logo" />
            ZigmaNft
          </Logo>
        </Link>
        <ListBox>
          <List onClick={() => dispatch(setIsOpenMenu())}>
            <MdOutlineAccountBalanceWallet style={iconStyle} />
            <Link style={linkStyle} to="/dashboard">
              Account overview
            </Link>
          </List>
          <List onClick={() => dispatch(setIsOpenMenu())}>
            <PiNotePencilLight style={iconStyle} />
            <Link style={linkStyle} to="/dashboard/mint">
              Mint Nft
            </Link>
          </List>
          <List onClick={() => dispatch(setIsOpenMenu())}>
            <CgProfile style={iconStyle} />
            <Link style={linkStyle} to={`/ownNftProfile/${userData?.id}`}>
              My Nft profile
            </Link>
          </List>
          <List onClick={() => dispatch(setIsOpenMenu())}>
            <GiCardExchange style={iconStyle} />
            <HashLink smooth style={linkStyle} to="/dashboard#transaction">
              Transaction
            </HashLink>
          </List>
          <List onClick={() => dispatch(setIsOpenMenu())}>
            <MdOutlineStore style={iconStyle} />
            <Link style={linkStyle} to="/">
              Market-place
            </Link>
          </List>
          <List onClick={() => dispatch(setIsOpenMenu())}>
            <GiCardExchange style={iconStyle} />
            <HashLink smooth style={linkStyle} to="/dashboard#nftTransaction">
              Nft transactions
            </HashLink>
          </List>
          <List onClick={() => dispatch(setIsOpenMenu())}>
            <CiEdit style={iconStyle} />
            <HashLink smooth style={linkStyle} to="/dashboard/editProfile">
              Edit Profile
            </HashLink>
          </List>
          <List onClick={() => dispatch(setIsOpenMenu())}>
            <RiLockPasswordFill style={iconStyle} />
            <HashLink smooth style={linkStyle} to="/dashboard/resetpassword">
              Change Password
            </HashLink>
          </List>
        </ListBox>
        <List
          style={{ color: "var(--error_text)" }}
          onClick={() => handleLogout()}
        >
          <MdLogout style={iconStyleOut} fill="var(--error_text)" />
          Sign Out
        </List>
      </Column>
    </MenuBarStyle>
  );
}

export default MenuBar;
