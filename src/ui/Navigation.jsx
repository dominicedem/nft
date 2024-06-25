import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import Button from "./Button";
import { Link } from "react-router-dom";
import { setSearchModal } from "../Slices/SearchSlice";
import { useDispatch } from "react-redux";

const NavigationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  /* background: inherit; */
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
`;
const CtaBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(5px);
`;
const Img = styled.img`
  width: 3.5rem;
`;

const iconStyle = {
  color: "var(--appbackgroundcolor)",
  width: "2.8rem",
  height: "2.8rem",
  cursor: "pointer",
};
const linkStyle = {
  color: "inherit",
  textDecoration: "none",
};
function Navigation({ scroll, home }) {
  const dispatch = useDispatch();
  function handleSearch() {
    dispatch(setSearchModal(true));
  }
  return (
    <NavigationStyle>
      {home ? (
        <>
          <Link style={linkStyle} to="/">
            <Logo>
              <Img src="/logo.png" alt="Logo" />
              SigmaNft
            </Logo>
          </Link>
          <CtaBox>
            <Search
              onClick={() => handleSearch()}
              className={!scroll ? "defaultSearch" : "adaptSearch"}
            >
              <IoSearch
                style={iconStyle}
                fill={!scroll ? "var(--white_text)" : "var(--faint_text_black)"}
              />
            </Search>
            <Link style={linkStyle} to="/dashboard">
              <Button
                type="nav"
                font="2rem"
                color={
                  !scroll ? "var(--white_text)" : "var(--faint_text_black)"
                }
                border={!scroll ? "" : "1px solid var(--inputField_border)"}
                padding="1.1rem 2rem"
              >
                Login
              </Button>
            </Link>
          </CtaBox>
        </>
      ) : (
        <>
          <Link style={linkStyle} to="/">
            <Logo>
              <Img src="/logo.png" alt="Logo" />
              SigmaNft
            </Logo>
          </Link>
          <CtaBox>
            <Search className={"adaptSearch"}>
              <IoSearch style={iconStyle} fill={"var(--faint_text_black)"} />
            </Search>
            <Button
              type="nav"
              font="2rem"
              color={"var(--faint_text_black)"}
              border={"1px solid var(--inputField_border)"}
              padding="1.1rem 2rem"
            >
              Login
            </Button>
          </CtaBox>
        </>
      )}
    </NavigationStyle>
  );
}

export default Navigation;
