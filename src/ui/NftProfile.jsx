import styled from "styled-components";
import Button from "./Button";
import { Link, useSearchParams } from "react-router-dom";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Skeleton from "react-loading-skeleton";
import useFetchEthPrice from "../hooks/useFetchEthPrice";

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 42rem;
  margin-bottom: 3rem;
  gap: ${(props) => (props.type === "card" ? "3rem" : "2rem")};
  border-radius: ${(props) => (props.type === "card" ? "1rem" : "")};
  padding: ${(props) =>
    props.type === "card" ? "4.2rem 2.5rem 2.5rem 2.5rem" : ""};
  align-items: ${(props) => (props.type === "card" ? "center" : "start")};
`;
const RowBox = styled.div`
  display: flex;
  align-items: start;
  gap: 5rem;
  width: 100%;
  height: fit-content;
`;
const Text = styled.span`
  font-size: ${(props) => (props.type === "head" ? "1.65rem" : "1.8rem")};
  font-weight: ${(props) => (props.type === "head" ? "600" : "none")};
  color: var(--black_text);
  font-family: "IBM Plex Sans", sans-serif;
`;
const ImgBox = styled.div`
  width: 30%;
  height: 42rem;
  border-radius: 1.5rem;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 1.5rem;
`;
const Buy = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--blue_btn);
  width: 100%;
  border-radius: 0.7rem;
  padding: 1.5rem 0;
  font-size: 2rem;
  color: var(--white_text);
  &:hover {
    background-color: var(--blue_btn_hover);
  }
`;
const BtnBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Contianer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 9rem 0 2rem 1rem;
  gap: 2rem;
`;
const PayBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-self: end;
  gap: 2rem;
  width: 95%;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 95%;
  margin-top: -1rem;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;
const linkStyle = {
  color: "inherit",
  textDecoration: "none",
};
const iconStyle = {
  width: "1.6rem",
  height: "1.6rem",
  color: "#333",
};
const arrowIconStyle = {
  fontSize: "3rem",
  color: "var(--profile_text)",
};
function NftProfile({ data }) {
  // const [searchParams, _] = useSearchParams();
  const { data: ethPrice } = useFetchEthPrice();
  // let product = searchParams?.get("product");
  return (
    <div>
      <Contianer>
        <Link style={linkStyle} to="/">
          <BtnBox>
            <Button padding="var(--padding_btn_small)">Back</Button>
          </BtnBox>
        </Link>
        <RowBox>
          <ImgBox>
            {data ? (
              <Img
                crossOrigin="anonymous"
                src={`https://artcity.site/${data?.photo}`}
              />
            ) : (
              <Skeleton className="buyImage" />
            )}
          </ImgBox>
          <ColumnBox style={{ width: "50%" }}>
            {data ? (
              <Text style={{ fontSize: "3.4rem", fontWeight: "500" }}>
                {data?.name}
              </Text>
            ) : (
              <Skeleton width={250} height={30} />
            )}
            {data ? (
              <>
                <Box style={{ textDecoration: "none" }}>
                  <Text
                    style={{
                      fontSize: "1.8rem",
                    }}
                  >
                    Owned by:{" "}
                  </Text>
                  <Text style={{ fontSize: "2rem", fontWeight: "500" }}>
                    {data?.nftOwner.username}{" "}
                    {data?.nftOwner?.userVerified && (
                      <RiVerifiedBadgeFill style={iconStyle} />
                    )}{" "}
                  </Text>
                  <Box
                    style={{
                      fontSize: "2rem",
                      marginLeft: "5%",
                      width: "fit-content",
                      color: "var(--profile_text)",
                    }}
                  >
                    Profile <HiOutlineArrowLongRight style={arrowIconStyle} />
                  </Box>
                </Box>
              </>
            ) : (
              <Skeleton width={400} height={30} />
            )}

            {data ? (
              <Text
                style={{
                  fontSize: "1.8rem",
                  marginTop: "1rem",
                  fontWeight: "500",
                }}
              >
                Description ({data?.category})
              </Text>
            ) : (
              <Skeleton width={200} height={30} />
            )}
            {data ? (
              <ColumnBox
                type="card"
                style={{
                  background: "var(--light_faint)",
                  width: "95%",
                  marginTop: "-1rem",
                  padding: "2.5rem",
                  height: "14rem",
                  overflow: "scroll",
                  alignItems: "start",
                }}
              >
                <Text style={{ fontSize: "1.65rem" }}>{data?.description}</Text>
              </ColumnBox>
            ) : (
              <Skeleton width={600} height={145} />
            )}
            {data ? (
              <PayBox>
                <RowBox
                  style={{
                    gap: "1rem",
                    alignItems: "end",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "1.8rem",
                      color: "var(--black_text)",
                      fontFamily: "IBM Plex Sans, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    Floor Price:
                  </Text>
                  <Text
                    style={{
                      fontSize: "2rem",
                      color: "var(--black_text)",
                      fontFamily: "IBM Plex Sans, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {data?.priceInEtherium} ETH
                  </Text>
                  <Text
                    style={{
                      fontSize: "1.4rem",
                      color: "var(--black_text)",
                      fontFamily: "IBM Plex Sans, sans-serif",
                      fontWeight: "400",
                      alignSelf: "center",
                      paddingTop: ".2rem",
                    }}
                  >
                    $
                    {Math.ceil(data?.priceInEtherium * ethPrice?.ethereum?.usd)}
                  </Text>
                </RowBox>
                <Buy
                  style={{
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  Buy
                </Buy>
              </PayBox>
            ) : (
              <Skeleton width={600} height={100} />
            )}
          </ColumnBox>
        </RowBox>
      </Contianer>
    </div>
  );
}

export default NftProfile;
