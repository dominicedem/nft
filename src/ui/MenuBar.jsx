import styled from "styled-components";

const MenuBarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f00;
`;
function MenuBar() {
  return <MenuBarStyle>Hello</MenuBarStyle>;
}

export default MenuBar;
