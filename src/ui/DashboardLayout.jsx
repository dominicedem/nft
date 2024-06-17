import styled from "styled-components";
import { Outlet } from "react-router-dom";
// import MenuBar from "../MenuBar/MenuBar";
import SideBar from "./SideBar";
import Profile from "./Profile";

const DashboardLayoutStyle = styled.div`
  display: grid;
  grid-template-columns: auto 64vw auto;
  height: 100vh;
  position: relative;
`;

// const OverlayBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
//   background: none;
//   position: absolute;
//   z-index: 1000;
//   top: 54%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
// const MenuBarStyle = styled.div`
//   display: none;
//   position: absolute;
//   left: 0%;
//   top: 10vh;
//   background: var(--background_color);
//   z-index: 10;
//   transition: all 0.3s ease-in;
//   @media (max-width: 800px) {
//     display: block;
//     height: 90vh;
//   }
// `;
const SideBarStyle = styled.div`
  background: var(--light_faint);
  padding-right: 1rem;
  @media (max-width: 800px) {
    display: none;
  }
`;
const MainStyle = styled.div`
  overflow-y: scroll;
  background: var(--appbackgroundcolor);
  padding-top: 2.4rem;
  @media (max-width: 500px) {
    height: 90vh;
  }
`;
const ProfileStyle = styled.div`
  background: var(--appbackgroundcolor);
  padding: 2rem 0.5rem 1rem 0.5rem;
  overflow-y: scroll;
`;

function DashboardLayout() {
  return (
    <DashboardLayoutStyle>
      <SideBarStyle>
        <SideBar />
      </SideBarStyle>
      {/* <MenuBarStyle style={menu ? openMenuBar : closeMenuBar}>
        <MenuBar />
      </MenuBarStyle> */}
      <MainStyle>
        <Outlet />
      </MainStyle>
      <ProfileStyle>
        <Profile />
      </ProfileStyle>
    </DashboardLayoutStyle>
  );
}

export default DashboardLayout;
