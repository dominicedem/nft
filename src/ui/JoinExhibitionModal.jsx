import styled from "styled-components";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import CheckBox from "./CheckBox";
import useJoinExhibition from "../hooks/useJoinExhibition";

const CreateExhibitionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 45rem;
  margin: 0 auto 2rem auto;
  padding: 3rem 0;
  background: var(--appbackgroundcolor);
  border-radius: 1rem;
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
  /* border: 1px solid var(--inputField_border); */
  position: relative;
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

const NftImg = styled.img`
  width: 4.5rem;
  height: 5rem;
  object-fit: cover;
  aspect-ratio: 1/2;
  border-radius: 1rem;
  cursor: pointer;
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

function JoinExhibitionModal() {
  const { userData } = useSelector((state) => state.authData);

  const {
    // register,
    handleSubmit,
    handleError,
    handleJoinExhibitionSubmit,
    isBlur,
    handleNftList,
  } = useJoinExhibition();

  return (
    <CreateExhibitionBox>
      <Text
        style={{ fontSize: "2.2rem", alignSelf: "center", fontWeight: "600" }}
      >
        Join exhibition
      </Text>
      <CreateExhibitionStyle>
        <Form onSubmit={handleSubmit(handleJoinExhibitionSubmit, handleError)}>
          <Label>Select nft [MIN: 1]</Label>
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
            {userData?.myNft?.map((val) => (
              <Row
                key={val?.id}
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
                    src={`https://artcity.site/${val?.photo}`}
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
                      {val?.name}
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
                      {val?.priceInEtherium} ETH
                    </Text>
                  </Column>
                </Row>
                <CheckBox
                  handleNftList={handleNftList}
                  data={val}
                  key={val?.id}
                  reset={isBlur}
                  // register={register}
                />
              </Row>
            ))}
          </Column>

          <Button
            onSubmit={handleSubmit(handleJoinExhibitionSubmit, handleError)}
            padding=".8rem 1.5rem"
            width="100%"
            background="true"
            font="2rem"
            color="var(--white_text)"
          >
            Join Exhibition
          </Button>
        </Form>
        <Text>Joined fee: 0.3 ETH</Text>
      </CreateExhibitionStyle>
      {isBlur && (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      )}
    </CreateExhibitionBox>
  );
}

export default JoinExhibitionModal;
