import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import Button from "./Button";
import { Link } from "react-router-dom";
import { setSearchModal } from "../Slices/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useAuthenticate from "../hooks/useAuthenticate";

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
  text-transform: uppercase;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
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
  width: 3rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  background: var(appbackgroundcolor);
`;
const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
const Text = styled.span`
  font-size: 1.8rem;
  text-transform: capitalize;
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
  const { userData } = useSelector((state) => state.authData);
  const { storage, revistTime } = useAuthenticate();

  function handleSearch() {
    dispatch(setSearchModal(true));
  }
  return (
    <NavigationStyle>
      {home && (
        <>
          <Link style={linkStyle} to="/">
            <Logo>
              <Img src="/logo.png" alt="Logo" />
              ZigmaNft
            </Logo>
          </Link>
          <CtaBox>
            <Search
              onClick={() => handleSearch()}
              className={scroll ? "defaultSearch" : "adaptSearch"}
            >
              <IoSearch
                style={iconStyle}
                fill={scroll ? "var(--white_text)" : "var(--faint_text_black)"}
              />
            </Search>
            {storage?.isAuthenticated && revistTime < 2 ? (
              <Link style={linkStyle} to="/dashboard">
                <Row className={scroll ? "defaultSearch" : "adaptSearch"}>
                  <UserImage
                    crossOrigin="anonymous"
                    src={`https://artcity.site/${userData?.photo}`}
                    alt="profile Picture"
                  />
                  <Text
                    style={
                      scroll
                        ? { color: "var(--white_text)" }
                        : { color: "var(--sideBar_text)" }
                    }
                  >
                    {userData.username}
                  </Text>
                </Row>
              </Link>
            ) : (
              <Link style={linkStyle} to="/signin">
                <Button
                  type="nav"
                  font="2rem"
                  color={
                    scroll ? "var(--white_text)" : "var(--faint_text_black)"
                  }
                  border={scroll ? "" : "1px solid var(--inputField_border)"}
                  padding="1.1rem 2rem"
                >
                  Login
                </Button>
              </Link>
            )}
          </CtaBox>
        </>
      )}
      {!home && (
        <>
          <Link style={linkStyle} to="/">
            <Logo>
              <Img src="/logo.png" alt="Logo" />
              SigmaNft
            </Logo>
          </Link>
          <CtaBox>
            <Search onClick={() => handleSearch()} className={"adaptSearch"}>
              <IoSearch style={iconStyle} fill={"var(--faint_text_black)"} />
            </Search>
            {storage?.isAuthenticated && revistTime < 2 ? (
              <Link style={linkStyle} to="/dashboard">
                <Row style={{ border: "1px solid var(--inputField_border)" }}>
                  <UserImage
                    crossOrigin="anonymous"
                    src={`https://artcity.site/${userData?.photo}`}
                    alt="profile Picture"
                  />
                  <Text
                    style={
                      scroll
                        ? { color: "var(--white_text)" }
                        : { color: "var(--sideBar_text)" }
                    }
                  >
                    {userData.username}
                  </Text>
                </Row>
              </Link>
            ) : (
              <Link style={linkStyle} to="/signin">
                <Button
                  type="nav"
                  font="2rem"
                  color={"var(--faint_text_black)"}
                  border={"1px solid var(--inputField_border)"}
                  padding="1.1rem 2rem"
                >
                  Login
                </Button>
              </Link>
            )}
          </CtaBox>
        </>
      )}
    </NavigationStyle>
  );
}

export default Navigation;
