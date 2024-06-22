import styled from "styled-components";
import { CiFileOn } from "react-icons/ci";
import Button from "../ui/Button";
import { useState } from "react";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
const EditProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 75%;
  margin: 0 auto 2rem auto;
`;
const EditProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 100%;
  padding: 2rem 4rem;
  border-radius: 1rem;
  border: 1px solid var(--inputField_border);
  position: relative;
`;
const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  background: var(--balance_background);
  padding: 3rem 4.5rem;
  border: 1px solid var(--border);
`;
const Text = styled.span`
  font-size: 1.4rem;
  color: var(--sideBar_text);
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`;
const Label = styled.label`
  font-size: 1.8rem;
  color: var(--sideBar_text);
`;
const Input = styled.input`
  width: 45%;
  border: none;
  border-bottom: 1px solid var(--inputField_border);
  font-size: 1.6rem;
  padding: 1rem 0 0.5rem 0;
  text-align: center;
  color: var(--sideBar_text);
  &::placeholder {
    font-size: 1.6rem;
    color: var(--secondary_text_faint);
  }
`;
const Textarea = styled.textarea`
  background: var(--light_faint);
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--light_faint);
  padding: 1rem 1rem;
  color: var(--sideBar_text);
  font-size: 1.6rem;
`;

const Row = styled.span`
  display: flex;
  align-items: end;
  gap: 1rem;
  width: 100%;
`;
const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--overlay_background);
  position: fixed;
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Img = styled.img`
  width: 18rem;
  height: 20rem;
  border-radius: 1rem;
  object-fit: cover;
  aspect-ratio: 1/2;
`;

const iconStyle = {
  width: "5rem",
  height: "5rem",
  color: "var(--sideBar_text)",
  cursor: "pointer",
};
const socialStyle = {
  width: "2.3rem",
  height: "2.3rem",
  color: "var(--sideBar_text)",
  cursor: "pointer",
};
function EditProfile() {
  const [facebook, setFacebook] = useState("");
  const [description, setDescription] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [overlay, setOverlay] = useState(false);
  const [file, setFile] = useState();

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") && setOverlay(false);
    console.log(e.target.className.split(" ").includes("overlay"));
  }
  console.log(file?.name);
  return (
    <EditProfileBox>
      <Text style={{ fontSize: "2rem", fontWeight: "700" }}>Edit Profile</Text>
      <EditProfileStyle>
        <Column style={{ width: "100%" }}>
          <Label htmlFor="file" style={{ width: "100%" }}>
            {file?.name ? (
              <ImgBox>
                <Img src={`/${file.name}`} />
              </ImgBox>
            ) : (
              <ImageBox>
                <Text>Upload file</Text>
                <CiFileOn style={iconStyle} />
              </ImageBox>
            )}
            <Input
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              className="hideFileUpload"
            />
          </Label>
        </Column>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Column>
            <Label htmlFor="des">Bio</Label>
            <Textarea
              id="des"
              rows="5"
              value={description}
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Column>
          <Column>
            <Row>
              <Label htmlFor="facebook">
                <CiFacebook style={socialStyle} />
              </Label>
              <Input
                id="facebook"
                value={facebook}
                placeholder="facebook username"
                type="text"
                onChange={(e) => setFacebook(e.target.value)}
              />
            </Row>
            <Row>
              <Label htmlFor="twitter">
                <FaXTwitter style={socialStyle} />
              </Label>
              <Input
                id="twitter"
                placeholder="twitter username"
                value={twitter}
                type="text"
                onChange={(e) => setTwitter(e.target.value)}
              />
            </Row>
            <Row>
              <Label htmlFor="instagram">
                <IoLogoInstagram style={socialStyle} />
              </Label>
              <Input
                id="instagram"
                value={instagram}
                placeholder="instagram username"
                type="text"
                onChange={(e) => setInstagram(e.target.value)}
              />
            </Row>
          </Column>
          <Button
            onSubmit={(e) => handleSubmit(e)}
            padding=".8rem 1.5rem"
            width="100%"
            background="true"
            font="2rem"
            color="var(--white_text)"
          >
            Update
          </Button>
        </Form>
        {overlay && (
          <Overlay
            className="overlay"
            onClick={(e) => handleOverlay(e)}
          ></Overlay>
        )}
      </EditProfileStyle>
    </EditProfileBox>
  );
}

export default EditProfile;
