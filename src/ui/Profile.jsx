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
  gap: 3rem;
  width: 100%;
  height: 100%;
  padding-bottom: 1.5rem;
  background: var(--light_faint);
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
`;
const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 15rem;
`;
const Description = styled.div`
  padding: 2rem 1rem;
  display: inherit;
  flex-direction: inherit;
  gap: 4rem;
`;
const DpbBox = styled.div`
  position: absolute;
  left: 1rem;
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
  gap: 1.5rem;
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
  padding: 2rem 0.5rem 2rem 1rem;
  background: var(--bios_background);
  border-radius: 1rem;
  margin-top: -0.5rem;
`;

const iconStyle = {
  width: "2.4rem",
  height: "2.4rem",
  color: "var(--black_text)",
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
        <Column>
          <Text style={{ fontWeight: "500" }}>Bio</Text>
          <Bio>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            consectetur corporis aliquid quo ea sunt fuga asperiores, similique
            unde esse, laborum reprehenderit vel at iure enim saepe repudiandae
            aut atque!
          </Bio>
        </Column>
        <Column>
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
      <Column style={{ alignItems: "center" }}>
        <Button
          padding="1rem 1.5rem"
          width="90%"
          background="var(--blue_btn)"
          color="var(--white_text)"
        >
          Edit Profile
        </Button>
        <Button
          border="1px solid var(--inputField_border)"
          padding="1rem 1.5rem"
          width="90%"
          color="var(--black_text)"
        >
          Change Password
        </Button>
      </Column>
    </ProfileStyle>
  );
}

export default Profile;
