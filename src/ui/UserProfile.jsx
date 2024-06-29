import styled from "styled-components";
import Socials from "../ui/Socials";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Cards from "../ui/Cards";

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
  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const NftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`;

function UserProfile({
  exhibition,
  displayNft,
  isExhibition,
  userProfileData,
  data,
}) {
  return (
    <NftProfileStyle>
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
      <Container>
        <Row style={{ alignItems: "start" }}>
          <Column style={{ width: "fit-content" }}>
            <Text style={{ fontWeight: "700" }}>
              Edem Dominic{" "}
              {!isExhibition && <RiVerifiedBadgeFill style={iconStyle} />}
            </Text>
            {!isExhibition && (
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
                  Exhibition <RiVerifiedBadgeFill style={iconStyle} />
                </Text>
              </Row>
            )}
          </Column>
          {isExhibition && (
            <>
              <Text>56 NFTs</Text>
              <Text>Sales bonus: 10%</Text>
            </>
          )}
        </Row>
        <Row style={{ alignItems: "stretch", height: "15rem" }}>
          {!isExhibition ? (
            <Column style={{ width: "40%" }}>
              <Text style={{ fontWeight: "700" }}>Bio</Text>
              <Text style={{ fontSize: "1.6rem" }}>
                on chain transaction is the type of transaction that makes use
                of the block chain t0 transfer coins from one wallet to the
                other ,
              </Text>
              <Text
                style={{
                  fontSize: "1.6rem",
                  textDecoration: "underline",
                  marginTop: "-1rem",
                }}
              >
                learn more
              </Text>
            </Column>
          ) : (
            <Column style={{ width: "45%" }}>
              <Text style={{ fontWeight: "700" }}>About Exhibition</Text>
              <Text style={{ fontSize: "1.6rem" }}>
                on chain transaction is the type of that makes use of the block
                chain ti transfer coins from one wallet to the other , learn
                moreon chain transaction is the type of that makes use of the
                block chain ti transfer coins from one wallet to the other ,
                learn more
              </Text>
              <Text
                style={{
                  fontSize: "1.6rem",
                  textDecoration: "underline",
                  marginTop: "-1rem",
                }}
              >
                learn more
              </Text>
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
                        key={val ? val?.id : ind}
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
                        key={val ? val?.id : ind}
                      />
                    ))
                : Array.from({ length: 10 }).map((val) => (
                    <Cards
                      defaultCard="true"
                      all="true"
                      profile=""
                      key={val}
                      width="28.7rem"
                    />
                  ))}
            </AllCards>
          </NftBox>
        )}
        {exhibition && (
          <NftBox style={{ marginTop: "6rem" }}>
            <Text style={{ fontWeight: "600" }}>Exhibition</Text>
            <AllCards>
              {userProfileData
                ? userProfileData?.data?.myExhibition.map((val, ind) => (
                    <Cards
                      Exhibition="true"
                      profile=""
                      all="true"
                      key={val ? val?.id : ind}
                      data={val}
                    />
                  ))
                : Array.from({ length: 5 }).map((val) => (
                    <Cards
                      Exhibition="true"
                      profile=""
                      all="true"
                      key={val + 16}
                      width="28.7rem"
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
