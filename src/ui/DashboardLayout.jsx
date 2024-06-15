import styled from "styled-components";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Nav from "../navigation/Nav";
import Partners from "../Partners/Partners";
import MenuBar from "../MenuBar/MenuBar";

const DashboardLayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 17vw auto;
  grid-template-rows: 10vh auto 5vh;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const NavStyle = styled.div`
  grid-column: 1/-1;
  background: var(--background_color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  border-bottom: 0.1rem solid #444;
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
  background: var(--background_color);
  @media (max-width: 800px) {
    display: none;
  }
`;
const MainStyle = styled.div`
  overflow-y: scroll;
  background: var(--background_color);
  @media (max-width: 500px) {
    height: 90vh;
  }
`;
const Partnersstyle = styled.div`
  grid-column: 1/-1;
  background: var(--background_color);
`;

function DashboardLayout() {
  return (
    <DashboardLayoutStyle>
      <NavStyle>
        <Nav />
      </NavStyle>
      <SideBarStyle>
        <SideBar />
      </SideBarStyle>
      {/* <MenuBarStyle style={menu ? openMenuBar : closeMenuBar}>
        <MenuBar />
      </MenuBarStyle> */}
      <MainStyle>
        <Outlet />
      </MainStyle>
      <Partnersstyle>
        <Partners />
      </Partnersstyle>
    </DashboardLayoutStyle>
  );
}

export default DashboardLayout;
