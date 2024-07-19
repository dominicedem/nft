import styled from "styled-components";
import { Outlet } from "react-router-dom";
import MenuBar from "../ui/MenuBar";
import SideBar from "./SideBar";
import Profile from "./Profile";
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenMenu } from "../Slices/MenuBar";

const DashboardLayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 23vw auto 20vw;
  height: 100vh;
  position: relative;
  @media (max-width: 1280px) {
    grid-template-columns: 23vw auto 20vw;
  }
  @media (max-width: 1100px) {
    grid-template-columns: auto 70vw;
  }
  @media (max-width: 860px) {
    grid-template-columns: auto;
  }
`;

const MenuBarStyle = styled.div`
  z-index: 10;
  transition: all 0.5s;
  height: 100vh;
  width: 99.5vw;
`;
const SideBarStyle = styled.div`
  background: var(--balance_background);
  padding-right: 1rem;
  @media (max-width: 1280px) {
    width: 23vw;
  }
  @media (max-width: 1100px) {
    width: auto;
  }
  @media (max-width: 860px) {
    display: none;
  }
`;
const MainStyle = styled.div`
  overflow-y: scroll;
  background: var(--appbackgroundcolor);
  margin-top: 2.4rem;
  @media (max-width: 500px) {
    height: 100vh;
    padding: 0 1rem;
  }
`;
const ProfileStyle = styled.div`
  background: var(--appbackgroundcolor);
  padding: 2rem 0.1rem 0 0.1rem;
  overflow-y: scroll;
  @media (max-width: 1280px) {
    width: 20vw;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
const MenuBtn = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 2%;
    right: 4%;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    border-radius: 0.5rem;
    z-index: 100;
    background: var(--light_faint);
  }
`;
const menuStyle = {
  width: "2.4rem",
  height: "2.4rem",
  color: "var(--sideBar_text)",
};
function DashboardLayout() {
  const { isOpenMenu } = useSelector((state) => state.menuData);
  const dispatch = useDispatch();
  return (
    <DashboardLayoutStyle>
      <SideBarStyle>
        <SideBar />
      </SideBarStyle>
      <MenuBarStyle
        className={isOpenMenu ? "activeMobileMenu" : "inActiveMobileMenu"}
      >
        <MenuBar />
      </MenuBarStyle>
      <MainStyle>
        <Outlet />
      </MainStyle>
      <ProfileStyle>
        <Profile />
      </ProfileStyle>
      <MenuBtn onClick={() => dispatch(setIsOpenMenu())}>
        {isOpenMenu ? (
          <AiOutlineClose style={menuStyle} />
        ) : (
          <SlMenu style={menuStyle} />
        )}
      </MenuBtn>
    </DashboardLayoutStyle>
  );
}
// style={menu ? openMenuBar : closeMenuBar}
export default DashboardLayout;
