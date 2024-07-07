import { RiTwitterXLine } from "react-icons/ri";
import { FaMedium } from "react-icons/fa6";
import styled from "styled-components";
import Formdetail from "./Formdetail";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footerbox = styled.div`
  display: flex;
  align-items: start;
  gap: 5rem;
  border-top: 0.1rem solid #bbbbbb36;
  padding: 8rem 2rem;
  height: 60vh;
  margin-top: 10rem;
  background: var(--blue_background_hover);
  @media (max-width: 950px) {
    gap: 18%;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 400px) {
    padding: 5rem 0.5rem;
  }
`;

const Footers = styled.div`
  display: flex;
  align-items: start;
  gap: 13%;
  width: 60vw;
  @media (max-width: 700px) {
    justify-content: space-between;
    width: 80vw;
    margin-top: 5rem;
    order: 1;
  }
  @media (max-width: 390px) {
    padding-left: 1rem;
    gap: 11%;
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

const Span = styled.span``;
const Contacts = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--white_text);
  &:hover {
    color: #d3d3d39a;
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  padding: 1rem 2rem;
  font-size: 1.4rem;
  color: var(--light_faint);
  background: var(--blue_background_hover);
`;

const Iconstyle = {
  color: "var(--white_text)",
  width: "2rem",
  height: "2.25rem",
};
const linkStyle = {
  textDecoration: "none",
};

function Footer() {
  return (
    <>
      <Footerbox>
        <Footers>
          <Headbox>
            <Head>Platform</Head>
            <Link style={linkStyle} to="/">
              <List>All</List>
            </Link>
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
            <Head>Resources</Head>
            <HashLink style={linkStyle} to="/termsCondition#About">
              <List>About Us</List>
            </HashLink>
            <Link style={linkStyle} to="/">
              <List>Github</List>
            </Link>
            <HashLink style={linkStyle} to="/termsCondition#Copyright">
              <List>Copyright Policy</List>
            </HashLink>

            <HashLink style={linkStyle} to="/termsCondition#Support">
              <List>Support</List>
            </HashLink>
          </Headbox>
          <Headbox>
            <Head>Follow Us</Head>
            <Contacts
              onClick={() =>
                window.open(import.meta.env.VITE_TwitterPage, "_blank")
              }
            >
              <RiTwitterXLine style={Iconstyle} /> <Span>Twitter</Span>
            </Contacts>
            <Contacts
              onClick={() =>
                window.open(import.meta.env.VITE_MediumPage, "_blank")
              }
            >
              <FaMedium style={Iconstyle} /> <Span>Medium</Span>
            </Contacts>
          </Headbox>
        </Footers>
        <Formdetail />
      </Footerbox>
      <Copyright>&copy; Copyright 2023 CrypDom. All rights reserved.</Copyright>
    </>
  );
}

export default Footer;
