import styled from "styled-components";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import Button from "./Button";

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  overflow-y: scroll;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding-bottom: 1.5rem;
  background: var(--balance_background);
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
`;
const Description = styled.div`
  padding: 2rem;
  display: inherit;
  flex-direction: inherit;
  gap: 4rem;
`;
const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
`;
const DpbBox = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 0;
  border-radius: 0.6rem;
  transform: translateY(42%);
  padding: 0.2rem;
  height: 6rem;
  background: var(--appbackgroundcolor);
`;
const Img = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  width: ${(props) => (props.type === "dp" ? "6rem" : "")};
  height: ${(props) => (props.type === "dp" ? "100%" : "100%")};
`;
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
const Bio = styled.span`
  font-size: 1.2rem;
  padding: 2rem 1rem 2rem 1.8rem;
  background: var(--bios_background);
  border-radius: 1rem;
  margin-top: -0.5rem;
  line-height: 1.4;
  letter-spacing: 0.3px;
  color: var(--sideBar_text);
`;

const iconStyle = {
  width: "2.2rem",
  height: "2.2rem",
  color: "var(--sideBar_text)",
};
function Profile() {
  return (
    <ProfileStyle>
      <ImageBox>
        <Img src="/light.webp" alt="coverprofile" />
        <DpbBox>
          <Img
            type="dp"
            src="/robot.webp"
            alt="profileimage"
            style={{ borderRadius: "inherit" }}
          />
        </DpbBox>
      </ImageBox>
      <Description>
        <Column>
          <Text style={{ fontWeight: "500" }}>Edem Dominic</Text>
          <Text
            style={{
              fontSize: "1.3rem",
              textDecoration: "underline",
              marginTop: "-.5rem",
              color: "var(--secondary_text_faint)",
              cursor: "pointer",
            }}
          >
            Edemdominic@gmail.com
          </Text>
        </Column>
        <Column style={{ marginTop: "-1.5rem" }}>
          <Text style={{ fontWeight: "500" }}>Bio</Text>
          <Bio>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            consectetur corporis aliquid quo ea sunt fuga asperiores, similique
          </Bio>
        </Column>
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
      </Description>
      <Column
        style={{ alignItems: "center", gap: "1.5rem", justifySelf: "end" }}
      >
        <Button
          padding="1rem 1.5rem"
          width="90%"
          background="true"
          font="1.6rem"
          color="var(--white_text)"
        >
          Edit Profile
        </Button>
        <Button
          border="1px solid var(--inputField_border)"
          padding="1rem 1.5rem"
          width="90%"
          font="1.6rem"
          color="var(--black_text)"
        >
          Change Password
        </Button>
      </Column>
    </ProfileStyle>
  );
}

export default Profile;
