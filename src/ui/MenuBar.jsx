import styled from "styled-components";
import { Link } from "react-router-dom";
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

const MenuBarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--appbackgroundcolor);
`;
const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 35rem;
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
  width: "3rem",
  height: "3rem",
  color: "var(--black_text)",
};

function MenuBar() {
  const { userData } = useSelector((state) => state.authData);
  const dispatch = useDispatch();
  return (
    <MenuBarStyle>
      <ListBox>
        <List onClick={() => dispatch(setIsOpenMenu())}>
          <MdOutlineAccountBalanceWallet style={iconStyle} />
          <Link style={linkStyle} to="/dashboard">
            Account overview
          </Link>
        </List>
        <List onClick={() => dispatch(setIsOpenMenu())}>
          <PiNotePencilLight style={iconStyle} />
          <Link style={linkStyle} to="mint">
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
    </MenuBarStyle>
  );
}

export default MenuBar;
