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
  height: 35vh;
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
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4rem;
  padding: 0 2rem;
`;
const Text = styled.span`
  font-size: 2.2rem;
  color: var(--sideBar_text);
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const SocialBox = styled.div`
  height: 100%;
  margin-top: 1.5rem;
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
  @media (max-width: 1290px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const NftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
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
  console.log(userProfileData);
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
        <Row style={{ alignItems: "start" }}>
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
            <>
              <Text>{rawData?.data?.totalNft} NFTs</Text>
              <Text>Sales bonus: {rawData?.data?.salesBonus}%</Text>
            </>
          )}
        </Row>
        <Row style={{ alignItems: "stretch", height: "15rem" }}>
          {!isExhibition ? (
            <Column style={{ width: "40%" }}>
              <Text style={{ fontWeight: "700" }}>Bio</Text>
              <Text style={{ fontSize: "1.6rem" }}>
                {userProfileData ? (
                  userProfileData?.data?.bio
                ) : (
                  <Skeleton count={3} width={300} />
                )}
              </Text>
              {/* <Text
                style={{
                  fontSize: "1.6rem",
                  textDecoration: "underline",
                  marginTop: "-1rem",
                }}
              >
                learn more
              </Text> */}
            </Column>
          ) : (
            <Column style={{ width: "45%" }}>
              <Text style={{ fontWeight: "700" }}>About Exhibition</Text>
              <Text style={{ fontSize: "1.6rem" }}>
                {rawData?.data?.description}
              </Text>
              {/* <Text
                style={{
                  fontSize: "1.6rem",
                  textDecoration: "underline",
                  marginTop: "-1rem",
                }}
              >
                learn more
              </Text> */}
            </Column>
          )}
          {!isExhibition && (
            <SocialBox>
              <Socials />
            </SocialBox>
          )}
        </Row>
        {displayNft && (
          <NftBox style={{ marginTop: "-2rem" }}>
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
                      />
                    ))
                  : userProfileData?.data?.myNft.map((val, ind) => (
                      <Cards
                        defaultCard="true"
                        all="true"
                        data={val}
                        profile=""
                        key={val?.id}
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
                    // 28.7
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
