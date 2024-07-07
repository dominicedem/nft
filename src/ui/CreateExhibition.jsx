import styled from "styled-components";
import { CiFileOn } from "react-icons/ci";
import Button from "../ui/Button";
import { useState } from "react";
import MintStatus from "../ui/MintStatus";
import { useSelector } from "react-redux";
import useSignUp from "../hooks/useSignUp";
import Loading from "./Loading";
import CheckBox from "./CheckBox";

const CreateExhibitionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 50rem;
  margin: 0 auto 2rem auto;
`;
const CreateExhibitionStyle = styled.div`
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
  padding: 1rem 1rem;
  color: var(--sideBar_text);
  font-size: 1.6rem;
`;
const Row = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--light_faint);
  width: 100%;
  border-radius: 0.5rem;
  padding: 0 1rem 0 0;
  border: 1px solid var(--light_faint);
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
const NftImg = styled.img`
  width: 4.5rem;
  height: 5rem;
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
function CreateExhibition() {
  const [overlay, setOverlay] = useState(false);

  const {
    // navigate,
    handleError,
    register,
    handleSubmit,
    handleMintSubmit,
    getValues,
    errors,
    isBlur,
  } = useSignUp();

  const { userData } = useSelector((state) => state.authData);

  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") && setOverlay(false);
  }
  return (
    <CreateExhibitionBox>
      <Text style={{ fontSize: "2rem", fontWeight: "700" }}>
        Create-Exhibition
      </Text>
      <CreateExhibitionStyle>
        <Form onSubmit={handleSubmit(handleMintSubmit, handleError)}>
          <Text style={{ fontSize: "1.8rem", alignSelf: "center" }}>
            Exhibition Photo
          </Text>
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
            <Label htmlFor="exhibition">Exhibition Name</Label>
            <Input
              id="exhibition"
              type="text"
              {...register("exhibition", {
                required: "This field is required",
              })}
            />
          </Column>
          <ErrorText style={{ marginTop: "-1.5rem" }}>
            {errors?.name?.message && errors?.name.message}
          </ErrorText>
          <Label>Select nft [MIN: 6]</Label>
          <Column
            style={{
              marginTop: "-1.8rem",
              height: "20rem",
              overflowY: "scroll",
              background: "var(--light_faint)",
              borderRadius: "1rem",
              padding: ".5rem .2rem .5rem .5rem",
            }}
          >
            {Array.from({ length: 10 }).map((val, ind) => (
              <Row
                key={ind}
                style={{
                  borderRadius: "1rem",
                  padding: ".5rem 1rem .5rem .5rem",
                  gap: "1rem",
                  justifyContent: "space-betwwen",
                  width: "100%",
                  background: "var(--bios_background)",
                }}
              >
                <Row
                  type="hover"
                  style={{
                    gap: "1rem",
                    justifyContent: "start",
                    width: "90%",
                    border: "none",
                    background: "inherit",
                  }}
                >
                  <NftImg
                    crossOrigin="anonymous"
                    src={`/crown.jpeg`}
                    //   src={`https://artcity.site/${val.photo}`}
                    alt="serachedNfts"
                  />
                  <Column
                    style={{
                      justifyContent: "space-between",
                      height: "100%",
                      padding: ".25rem 0",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "1.6rem",
                        color: "var(--sideBar_text)",
                      }}
                    >
                      Father
                    </Text>
                    <Text
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        fontSize: "1.4rem",
                        color: "var(--profile_text)",
                        fontWeight: "200",
                      }}
                    >
                      {/* {val.nftOwner.username}{" "}
                {val.nftOwner.userVerified && (
                    <RiVerifiedBadgeFill style={iconStyles} />
                    )} */}
                      14 ETH
                    </Text>
                  </Column>
                </Row>
                <CheckBox defaultChecked={ind === 0 && true} key={ind} />
              </Row>
            ))}
          </Column>
          <Column style={{ marginTop: "1.5rem" }}>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows="5"
              type="text"
              {...register("description")}
            />
          </Column>
          <ErrorText style={{ marginTop: "-1.5rem" }}>
            {errors?.description?.message && errors?.description.message}
          </ErrorText>

          <Column>
            <Label htmlFor="priceInEtherium">Create Fee</Label>
            <Row>
              <Input
                style={{ fontWeight: "700" }}
                id="priceInEtherium"
                type="text"
                {...register("priceInEtherium", {
                  required: "This field is required",
                  min: {
                    value: 0.02,
                    message: "Minimum floor price is 0.02 ETH",
                  },
                })}
              />
              <Text style={{ fontWeight: "700", fontSize: "1.6rem" }}>ETH</Text>
            </Row>
          </Column>
          <Text style={{ margin: "-2rem 0 2rem 0" }}>min 0.02 ETH</Text>
          <ErrorText style={{ marginTop: "-3rem" }}>
            {errors?.priceInEtherium?.message &&
              errors?.priceInEtherium.message}
          </ErrorText>
          <Button
            onSubmit={handleSubmit(handleMintSubmit, handleError)}
            padding=".8rem 1.5rem"
            width="100%"
            background="true"
            font="2rem"
            color="var(--white_text)"
          >
            Create Exhibition
          </Button>
        </Form>
        <Text>Fee reqired: 0.2 ETH</Text>
        {overlay && (
          <Overlay className="overlay" onClick={(e) => handleOverlay(e)}>
            <MintStatus status="true" />
          </Overlay>
        )}
      </CreateExhibitionStyle>
      {isBlur && (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      )}
    </CreateExhibitionBox>
  );
}

export default CreateExhibition;
