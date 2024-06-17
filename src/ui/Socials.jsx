import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import styled from "styled-components";
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;
  width: 100%;
`;
const Text = styled.span`
  font-size: 2rem;
  color: var(--black_text);
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const iconStyle = {
  width: "2.2rem",
  height: "2.2rem",
  color: "var(--sideBar_text)",
};
function Socials() {
  return (
    <div>
      <Column style={{ marginTop: "-1.5rem", gap: "1.5rem" }}>
        <Text style={{ fontSize: "1.6rem", cursor: "pointer" }}>
          <CiFacebook style={iconStyle} /> Username
        </Text>
        <Text style={{ fontSize: "1.6rem", cursor: "pointer" }}>
          <FaXTwitter style={iconStyle} /> Twitter
        </Text>
        <Text style={{ fontSize: "1.6rem", cursor: "pointer" }}>
          <IoLogoInstagram style={iconStyle} /> Instagram
        </Text>
      </Column>
    </div>
  );
}

export default Socials;
