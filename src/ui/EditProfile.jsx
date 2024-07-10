import styled from "styled-components";
import { CiFileOn } from "react-icons/ci";
import Button from "../ui/Button";
import { useState } from "react";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import useEditProfile from "../hooks/useEditProfile";
import Loading from "../ui/Loading";
import ToggleBtn from "./ToggleBtn";
const EditProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 50rem;
  margin: 0 auto 2rem auto;
`;
const EditProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  gap: 2rem;
  width: 100%;
  padding: 2rem 4rem;
  border-radius: 1rem;
  background: var(--subtle_background);
  border: 1px solid var(--inputField_border);
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

const ErrorText = styled.span`
  font-size: 1.4rem;
  color: var(--error_text);
  width: 40%;
  height: 1.5rem;
`;

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(4px);
  background: var(--overlay_background);
  z-index: 10000;
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
  const [overlay, setOverlay] = useState(false);

  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") && setOverlay(false);
    console.log(e.target.className.split(" ").includes("overlay"));
  }

  const {
    register,
    handleSubmit,
    handleError,
    errors,
    handleEditProfileSubmit,
    isBlur,
    getValues,
    on,
    setOn,
  } = useEditProfile();

  return (
    <EditProfileBox>
      <Text style={{ fontSize: "2rem", fontWeight: "700" }}>Edit Profile</Text>
      <EditProfileStyle>
        <Form onSubmit={handleSubmit(handleEditProfileSubmit, handleError)}>
          <Column style={{ alignItems: "center" }}>
            <Label
              htmlFor="file"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {getValues().file?.[0]?.name ? (
                <Img src={`/${getValues().file?.[0]?.name}`} />
              ) : (
                <ImageBox>
                  <Text>Upload Photo</Text>
                  <CiFileOn style={iconStyle} />
                </ImageBox>
              )}
              <Input
                id="file"
                type="file"
                {...register("file")}
                className="hideFileUpload"
              />
            </Label>
            <Text>{getValues().file?.[0]?.name}</Text>
          </Column>
          <ErrorText style={{ marginTop: "-1.5rem" }}>
            {errors?.file?.message && errors?.file.message}
          </ErrorText>
          <Column>
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" rows="5" type="text" {...register("bio")} />
          </Column>
          <ErrorText style={{ marginTop: "-1.5rem" }}>
            {errors?.description?.message && errors?.description.message}
          </ErrorText>
          <Row style={{ background: "none", border: "none" }}>
            <Text style={{ margin: "0", fontSize: "1.8rem" }}>
              Make nft profile visible?
            </Text>
            <ToggleBtn width="14%" on={on} setOn={setOn} />
          </Row>
          <Column>
            <Row>
              <Label htmlFor="facebook">
                <CiFacebook style={socialStyle} />
              </Label>
              <Input
                // width="50%"
                id="facebook"
                placeholder="facebook username"
                type="text"
                {...register("facebook")}
              />
              <ErrorText style={{ marginTop: "-1.5rem", textAlign: "center" }}>
                {errors?.facebook?.message && errors?.facebook.message}
              </ErrorText>
            </Row>
            <Row>
              <Label htmlFor="twitter">
                <FaXTwitter style={socialStyle} />
              </Label>
              <Input
                id="twitter"
                placeholder="twitter username"
                type="text"
                {...register("twitter")}
              />
              <ErrorText style={{ marginTop: "-1.5rem", textAlign: "center" }}>
                {errors?.twitter?.message && errors?.twitter.message}
              </ErrorText>
            </Row>
            <Row>
              <Label htmlFor="instagram">
                <IoLogoInstagram style={socialStyle} />
              </Label>
              <Input
                id="instagram"
                placeholder="instagram username"
                type="text"
                {...register("instagram")}
              />
              <ErrorText style={{ marginTop: "-1.5rem", textAlign: "center" }}>
                {errors?.instagram?.message && errors?.instagram.message}
              </ErrorText>
            </Row>
          </Column>
          <Button
            onSubmit={handleSubmit(handleEditProfileSubmit, handleError)}
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
      {isBlur && (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      )}
    </EditProfileBox>
  );
}

export default EditProfile;
