import styled from "styled-components";
import Socials from "../ui/Socials";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Cards from "../ui/Cards";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const NftProfileStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 6rem;
  padding-bottom: 4rem;
`;
const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  @media (max-width: 500px) {
    height: 20rem;
  }
`;
const DpbBox = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 0;
  border-radius: 0.6rem;
  transform: translateY(40%);
  padding: 0.2rem;
  height: 12rem;
  background: var(--appbackgroundcolor);
  @media (max-width: 500px) {
    height: 10rem;
  }
`;
const Img = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  width: ${(props) => (props.type === "dp" ? "12rem" : "")};
  height: ${(props) => (props.type === "dp" ? "100%" : "100%")};
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;
  width: ${(props) => (props.type === "bioColumn" ? "40%" : "100%")};
  @media (max-width: 700px) {
    width: ${(props) => (props.type === "bioColumn" ? "60%" : "100%")};
  }
  @media (max-width: 500px) {
    width: ${(props) => (props.type === "bioColumn" ? "80%" : "100%")};
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
  width: 100%;
  @media (max-width: 690px) {
    gap: 5rem;
  }
  @media (max-width: 690px) {
    gap: 2rem;
  }
  @media (max-width: 700px) {
    flex-direction: ${(props) => props.type === "biodescription" && "column"};
    align-items: ${(props) => props.type === "biodescription" && "start"};
    gap: ${(props) => props.type === "biodescription" && "3rem"};
    margin-bottom: ${(props) => props.type === "biodescription" && "15rem"};
  }
`;
const RowMobile = styled.div`
  display: ${(props) => (props.type === "mobile" ? "none" : "flex")};
  gap: ${(props) => (props.type !== "mobile" ? "10rem" : "")};
  @media (max-width: 690px) {
    gap: ${(props) => (props.type !== "mobile" ? "5rem" : "")};
  }
  @media (max-width: 690px) {
    gap: ${(props) => (props.type !== "mobile" ? "2rem" : "")};
  }
  @media (max-width: 520px) {
    display: ${(props) => (props.type === "mobile" ? "flex" : "none")};
    align-items: center;
    gap: 3rem;
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4rem;
`;
const Text = styled.span`
  font-size: 2.2rem;
  color: var(--sideBar_text);
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Box = styled.div`
  height: 9rem;
  overflow-y: scroll;
  padding: 1rem 1.5rem;
  border-radius: 0.7rem;
  background: var(--balance_background);
`;
const SocialBox = styled.div`
  height: 100%;
  transform: translateY(20%);
`;
const iconStyle = {
  width: "1.5rem",
  height: "1.5rem",
  color: "#333",
};
const AllCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
  padding: 0 1rem;
  width: 97.5vw;
  @media (max-width: 1290px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 975px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1.5rem;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 465px) {
    column-gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 340px) {
    grid-template-columns: 1fr;
  }
`;
const NftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  margin: 0 auto;
`;
const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10%;
  left: 2%;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  backdrop-filter: blur(5px);
  background: var(--subtle_background);
  cursor: pointer;
`;
const backStyle = {
  width: "2.4rem",
  height: "2.4rem",
  color: "var(--white_text)",
};

function UserProfile({
  exhibition,
  displayNft,
  isExhibition,
  userProfileData,
  data,
  rawData,
}) {
  const navigate = useNavigate();
  console.log(!rawData?.data?.description);
  return (
    <NftProfileStyle>
      <ImageBox>
        {rawData ? (
          <Img
            crossOrigin="anonymous"
            src={`https://artcity.site/${rawData?.data?.photo}`}
          />
        ) : (
          <Img src="/light.webp" />
        )}
        <DpbBox>
          {rawData ? (
            <Img
              style={{ borderRadius: "0.7rem" }}
              crossOrigin="anonymous"
              src={`https://artcity.site/${rawData?.data?.owner?.photo}`}
            />
          ) : userProfileData ? (
            <Img
              style={{ borderRadius: "0.7rem" }}
              crossOrigin="anonymous"
              src={`https://artcity.site/${userProfileData?.data?.photo}`}
            />
          ) : (
            <Skeleton width={116} height={117} />
          )}
        </DpbBox>
        <Back onClick={() => navigate(-1)}>
          <IoIosArrowBack style={backStyle} />
        </Back>
      </ImageBox>
      <Container>
        <Row style={{ alignItems: "start", padding: "0 2rem" }}>
          <Column style={{ width: "fit-content" }}>
            <Text style={{ fontWeight: "700", textTransform: "capitalize" }}>
              {rawData?.data?.name}
            </Text>
            {!isExhibition && (
              <Text
                style={{
                  fontSize: "1.6rem",
                  textDecoration: "underline",
                  marginTop: "-.5rem",
                  color: "var(--secondary_text_faint)",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                {userProfileData ? (
                  userProfileData?.data?.username
                ) : (
                  <Skeleton width={80} />
                )}
              </Text>
            )}
            {isExhibition && (
              <Row
                style={{
                  marginTop: ".5rem",
                  gap: ".5rem",
                  alignItems: "end",
                  height: "100%",
                }}
              >
                <Text
                  style={{
                    fontSize: "1.6rem",
                    color: "var(--sideBar_text)",
                  }}
                >
                  Owned By:{" "}
                </Text>
                <Text
                  style={{
                    fontSize: "1.6rem",
                    color: "var(--sideBar_text)",
                    fontWeight: "600",
                  }}
                >
                  {rawData?.data?.owner?.username}{" "}
                  <RiVerifiedBadgeFill style={iconStyle} />
                </Text>
              </Row>
            )}
          </Column>
          {isExhibition && (
            <RowMobile>
              <Text>{rawData?.data?.totalNft} NFTs</Text>
              <Text>Sales bonus:{rawData?.data?.salesBonus}%</Text>
            </RowMobile>
          )}
        </Row>
        {isExhibition && (
          <RowMobile type="mobile" style={{ padding: "0 2rem" }}>
            <Text>{rawData?.data?.totalNft} NFTs</Text>
            <Text>Sales bonus:{rawData?.data?.salesBonus}%</Text>
          </RowMobile>
        )}
        <Row
          type={!isExhibition && "biodescription"}
          style={{ alignItems: "stretch", height: "15rem", padding: "0 2rem" }}
        >
          {!isExhibition ? (
            <Column type="bioColumn">
              <Text style={{ fontWeight: "700" }}>Bio</Text>
              <Box
                style={{
                  display: `${!userProfileData?.data?.bio && "none"}`,
                }}
              >
                <Text type="bio" style={{ fontSize: "1.6rem" }}>
                  {userProfileData ? (
                    userProfileData?.data?.bio
                  ) : (
                    <Skeleton count={3} width={300} />
                  )}
                </Text>
              </Box>
            </Column>
          ) : (
            <Column style={{ width: "60%" }}>
              <Text style={{ fontWeight: "700" }}>About Exhibition</Text>
              <Box
                style={{
                  display: `${!rawData?.data?.description && "none"}`,
                }}
              >
                <Text type="bio" style={{ fontSize: "1.6rem" }}>
                  {rawData?.data?.description}
                </Text>
              </Box>
            </Column>
          )}
          {!isExhibition && (
            <SocialBox>
              <Socials />
            </SocialBox>
          )}
        </Row>
        {displayNft && (
          <NftBox type="profile" style={{ marginTop: "-2rem" }}>
            <Text style={{ fontWeight: "600" }}>NFT</Text>
            <AllCards>
              {data || userProfileData
                ? data
                  ? data?.map((val, ind) => (
                      <Cards
                        defaultCard="true"
                        all="true"
                        key={val?.id}
                        data={val}
                        profile=""
                        cardType=""
                      />
                    ))
                  : userProfileData?.data?.myNft.map((val, ind) => (
                      <Cards
                        defaultCard="true"
                        all="true"
                        data={val}
                        profile=""
                        key={val?.id}
                        cardType=""
                      />
                    ))
                : Array.from({ length: 10 }).map((val) => (
                    <Cards
                      defaultCard="true"
                      all="true"
                      profile=""
                      key={val}
                      width="29rem"
                    />
                  ))}
            </AllCards>
          </NftBox>
        )}
        {exhibition && (
          <NftBox style={{ marginTop: "6rem" }}>
            <Text style={{ fontWeight: "600" }}>Exhibition</Text>
            <AllCards>
              {userProfileData &&
                userProfileData?.data?.myExhibition.map((val, ind) => (
                  <Cards
                    Exhibition="true"
                    profile=""
                    all="true"
                    key={val?.id}
                    data={val}
                    cardType=""
                  />
                ))}
              {!userProfileData &&
                Array.from({ length: 5 }).map((val) => (
                  <Cards
                    Exhibition="true"
                    profile=""
                    all="true"
                    key={val}
                    width="29rem"
                  />
                ))}
            </AllCards>
          </NftBox>
        )}
      </Container>
    </NftProfileStyle>
  );
}

export default UserProfile;
