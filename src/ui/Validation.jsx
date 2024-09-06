import styled from "styled-components";
import { CiFileOn } from "react-icons/ci";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import useSignUp from "../hooks/useSignUp";
import Loading from "./Loading";
import ValidationStatus from "./ValidationStatus";

const MintBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  max-width: 50rem;
  margin: 0 auto 2rem auto;
`;
const MintModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 100%;
  padding: 2rem 4rem;
  border-radius: 1rem;
  background: var(--subtle_background);
  border: 1px solid var(--inputField_border);
  position: relative;
  @media (max-width: 420px) {
    padding: 2rem;
  }
`;
const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 1rem;
  border-radius: 0.5rem;
  background: var(--balance_background);
  padding: 3rem 4.5rem;
  border: 1px solid var(--border);
`;
const Text = styled.span`
  font-size: 1.4rem;
  color: var(--sideBar_text);
  line-height: ${(props) => (props.type === "description" ? "1.3" : "1.2")};
  letter-spacing: ${(props) => (props.type === "description" ? ".07rem" : "")};
  width: ${(props) => (props.type === "description" ? "100%" : "")};
  text-align: ${(props) => (props.type === "description" ? "justify" : "")};
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
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
const Label = styled.label`
  font-size: 1.8rem;
  color: var(--sideBar_text);
`;
const Input = styled.input`
  background: var(--light_faint);
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--light_faint);
  padding: 1rem;
  color: var(--sideBar_text);
  font-size: 1.6rem;
`;
const Textarea = styled.textarea`
  background: var(--light_faint);
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--light_faint);
  padding: 2rem;
  color: var(--sideBar_text);
  font-size: 1.6rem;
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
const Img = styled.img`
  width: 18rem;
  height: 20rem;
  object-fit: cover;
  aspect-ratio: 1/2;
  border-radius: 1rem;
  cursor: pointer;
`;

const ErrorText = styled.span`
  font-size: 1.4rem;
  color: var(--error_text);
  width: 100%;
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
function Validation() {
  const {
    handleError,
    errors,
    getValues,
    register,
    handleSubmit,
    isBlur,
    handleValidateSubmit,
    setValidSuccessOverlay,
    setValidFailOverlay,
    validSuccessOverlay,
    validFailOverlay,
  } = useSignUp();

  const { userData } = useSelector((state) => state.authData);

  function handleOverlay(e) {
    e.target.className.split(" ").includes("validSuccessOverlay") &&
      setValidSuccessOverlay(false);
    e.target.className.split(" ").includes("validFailOverlay") &&
      setValidFailOverlay(false);
  }
  return (
    <MintBox>
      <Text style={{ fontSize: "2rem", fontWeight: "700" }}>Validate Nft</Text>
      <MintModalStyle>
        <Column>
          <Img
            crossOrigin="anonymous"
            src={`https://artcity.site/${userData?.wallet?.validationNft?.photo}`}
          />
          <Text>{userData?.wallet?.validationNft?.name}</Text>
          <Text style={{ marginTop: "3rem" }}>
            Fill the form below to validate nft
          </Text>
          <Text>Upload a document or picture to validate the artwork</Text>
        </Column>
        <Form onSubmit={handleSubmit(handleValidateSubmit, handleError)}>
          <Column style={{ alignItems: "center" }}>
            <Label htmlFor="file">
              {getValues().file?.[0]?.name ? (
                <Img src={`/${getValues().file?.[0]?.name}`} />
              ) : (
                <ImageBox>
                  <Text>Upload file</Text>
                  <CiFileOn style={iconStyle} />
                </ImageBox>
              )}
              <Input
                id="file"
                type="file"
                {...register("file", {
                  required: "This field is required",
                })}
                className="hideFileUpload"
              />
            </Label>
            <Text>{getValues().file?.[0]?.name}</Text>
          </Column>
          <ErrorText style={{ marginTop: "-1.5rem", textAlign: "center" }}>
            {errors?.file?.message && errors?.file.message}
          </ErrorText>
          <Column>
            <Label htmlFor="textarea">
              Make a brief statement about the uploaded artwork to validate it
            </Label>
            <Textarea
              id="textarea"
              {...register("textarea", {
                required: "This field is required",
              })}
              rows={6}
              cols={4}
            />
          </Column>
          <ErrorText style={{ marginTop: "-1.5rem", textAlign: "center" }}>
            {errors?.textarea?.message && errors?.textarea.message}
          </ErrorText>
          <Text type="description" style={{ marginTop: "2rem" }}>
            validation involves verifying the creator's identity, tracking
            provenance, using digital watermarks, employing content comparison
            tools, and conducting manual reviews to ensure the originality of
            the artwork, thereby maintaining market integrity and protecting
            artists' rights , it requires a certain fee on your ETH (fee
            account) to initiate the process which would be refunded after the
            process has been completed, the process could take up to 6 hours
            before completion.
          </Text>
          <Button
            onSubmit={handleSubmit(handleValidateSubmit, handleError)}
            padding=".8rem 1.5rem"
            width="100%"
            background="true"
            font="2rem"
            color="var(--white_text)"
          >
            Validate
          </Button>
        </Form>
      </MintModalStyle>
      {validSuccessOverlay && (
        <Overlay
          className="validSuccessOverlay"
          onClick={(e) => handleOverlay(e)}
        >
          <ValidationStatus status="true" />
        </Overlay>
      )}
      {validFailOverlay && (
        <Overlay className="validFailOverlay" onClick={(e) => handleOverlay(e)}>
          <ValidationStatus status="false" />
        </Overlay>
      )}
      {isBlur && (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      )}
    </MintBox>
  );
}

export default Validation;
