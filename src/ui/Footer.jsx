// import { RiTwitterXLine } from "react-icons/ri";
// import { FaMedium } from "react-icons/fa6";
import styled from "styled-components";
import Formdetail from "./Formdetail";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footerbox = styled.div`
  display: flex;
  align-items: start;
  gap: 5rem;
  border-top: 0.1rem solid #bbbbbb36;
  padding: 8rem 5rem;
  height: 60vh;
  margin-top: 10rem;
  background: var(--blue_footer);
  @media (max-width: 950px) {
    gap: 18%;
  }
  @media (max-width: 700px) {
    padding: 8rem 2rem;
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
  @media (max-width: 400px) {
    height: fit-content;
    padding: 8rem 0.5rem;
  }
`;

const Footers = styled.div`
  display: flex;
  align-items: start;
  gap: 13%;
  width: 60vw;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 5rem;
    width: 80vw;
    margin-top: 5rem;
    order: 1;
  }
  @media (max-width: 390px) {
    flex-direction: column;
    padding-left: 1rem;
    gap: 5rem;
  }
`;

const Headbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const Head = styled.div`
  font-size: 2.2rem;
  color: var(--white_text);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const List = styled.span`
  cursor: pointer;
  font-size: 1.6rem;
  color: var(--white_text);
  &:hover {
    color: #d3d3d39a;
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  padding: 1rem 5rem 5rem 5rem;
  font-size: 1.4rem;
  color: var(--light_faint);
  background: var(--blue_footer);
  @media (max-width: 700px) {
    padding: 1rem 1rem 5rem 2rem;
  }
`;

const linkStyle = {
  textDecoration: "none",
};

function Footer() {
  return (
    <>
      <Footerbox>
        <Footers>
          <Headbox>
            <Head>Categories</Head>
            <Link style={linkStyle} to="/category/arts">
              <List>Arts</List>
            </Link>
            <Link style={linkStyle} to="/category/gaming">
              <List>Gaming</List>
            </Link>
            <Link style={linkStyle} to="/category/pfps">
              <List>Pfps</List>
            </Link>
            <Link style={linkStyle} to="/category/membership">
              <List>Membership</List>
            </Link>
            <Link style={linkStyle} to="/category/photography">
              <List>Photography</List>
            </Link>
            <Link style={linkStyle} to="/category/exhibition">
              <List>Exhibition</List>
            </Link>
          </Headbox>
          <Headbox>
            <Head>Company</Head>
            <HashLink style={linkStyle} to="/termsCondition#About">
              <List>About Us</List>
            </HashLink>
            {/* <Link style={linkStyle} to="/">
              <List>Github</List>
            </Link> */}
            <HashLink style={linkStyle} to="/termsandcondition#top">
              <List>Terms and condition</List>
            </HashLink>

            {/* <HashLink style={linkStyle} to="/termsCondition#Support">
              <List>Support</List>
            </HashLink> */}
          </Headbox>
        </Footers>
        <Formdetail />
      </Footerbox>
      <Copyright>
        &copy; Copyright 2024 ZIGMANFT. All rights reserved.
      </Copyright>
    </>
  );
}

export default Footer;
