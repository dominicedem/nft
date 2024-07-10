import styled from "styled-components";
import Button from "./Button";
import Socials from "./Socials";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

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
  transform: translateY(42%);
  border-radius: 0.6rem;
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
  padding: 2rem 1.8rem 2rem 1.8rem;
  background: var(--bios_background);
  border-radius: 1rem;
  margin-top: -0.5rem;
  line-height: 1.4;
  color: var(--sideBar_text);
  width: 100%;
  height: 12rem;
  overflow-y: scroll;
  text-align: justify;
  &::after {
    content: "";
    display: inline-block;
    width: 100%;
  }
`;
const linkStyle = {
  color: "inherit",
  textDecoration: "none",
  width: "90%",
};
function Profile() {
  const { userData } = useSelector((state) => state.authData);
  return (
    <ProfileStyle>
      <ImageBox>
        <Img src="/light.webp" alt="coverprofile" />
        <DpbBox>
          {userData ? (
            <Img
              crossOrigin="anonymous"
              type="dp"
              src={`https://artcity.site/${userData?.photo}`}
              alt="profileimage"
              style={{ borderRadius: "inherit" }}
            />
          ) : (
            <Skeleton className="profileImage" />
          )}
        </DpbBox>
      </ImageBox>
      <Description>
        <Column>
          <Text style={{ fontWeight: "500" }}>{userData?.username}</Text>
          <Text
            style={{
              fontSize: "1.3rem",
              textDecoration: "underline",
              marginTop: "-.5rem",
              color: "var(--secondary_text_faint)",
              cursor: "pointer",
            }}
          >
            {userData?.email}
          </Text>
        </Column>
        <Column style={{ marginTop: "-1.5rem" }}>
          <Text style={{ fontWeight: "500" }}>Bio</Text>
          <Bio>{userData ? userData.bio : <Skeleton height={75} />}</Bio>
        </Column>
        <Socials />
      </Description>
      <Column style={{ alignItems: "end", gap: "1.5rem", justifySelf: "end" }}>
        <Link style={linkStyle} to="editProfile">
          <Button
            padding="1rem 1.5rem"
            width="90%"
            background="true"
            font="1.6rem"
            color="var(--white_text)"
          >
            Edit Profile
          </Button>
        </Link>
        <Link style={linkStyle}>
          <Button
            border="1px solid var(--inputField_border)"
            padding="1rem 1.5rem"
            width="90%"
            font="1.6rem"
            color="var(--black_text)"
          >
            Change Password
          </Button>
        </Link>
      </Column>
    </ProfileStyle>
  );
}

export default Profile;
