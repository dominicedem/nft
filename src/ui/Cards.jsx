import styled from "styled-components";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CardProfile from "./CardProfile";

const CardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  border-radius: 1.5rem;
  padding: 0 0 1rem 0;
  box-shadow: 0 0.4rem 0.8rem 0 #00000015;
  transition: all 0.2s;
  background-color: var(--appbackgroundcolor);
  &:hover {
    transform: translateY(1.1%) scale(1.01);
  }
  width: 26rem;
`;

const CardDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  padding: 1rem 1.5rem 0.5rem 1.5rem;
  height: 30%;
`;

const ImgBox = styled.div`
  overflow: hidden;
  height: 21rem;
`;
const Img = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
`;
const Text = styled.span`
  display: flex;
  gap: 0.5rem;
  flex-direction: ${(props) => (props.type === "head" ? "row" : "column")};
  align-items: ${(props) => (props.type === "head" ? "center" : "start")};
  font-size: ${(props) => (props.type === "head" ? "1.85rem" : "1.5rem")};
  font-weight: ${(props) => (props.type === "head" ? "100" : "600")};
`;
const PriceBox = styled.div`
  display: flex;
  font-size: 1.1rem;
  gap: ${(props) => (props.type === "outer" ? "0" : ".3rem")};
  flex-direction: ${(props) => (props.type === "outer" ? "row" : "column")};
  align-items: ${(props) => (props.type === "outer" ? "center" : "start")};
  justify-content: ${(props) =>
    props.type === "outer" ? "space-between" : "start"};
  width: ${(props) => (props.type === "outer" ? "100%" : "fit-content")};
`;
const EditBox = styled.div`
  align-self: center;
  width: 89.5%;
`;

const iconStyle = {
  width: "1.7rem",
  height: "1.7rem",
  color: "#333",
};
const linkStyle = {
  textDecoration: "none",
  padding: 0,
  margin: 0,
};

function Cards({ data, all, profile, Exhibition, defaultCard, Edit }) {
  function handleBuy() {}
  return (
    <CardsStyle
      onClick={handleBuy}
      style={all && { width: "100%", height: "" }}
    >
      <Link style={linkStyle} to="/buynft">
        <ImgBox>
          <Img src={data.image_url} />
        </ImgBox>
        <CardDetailBox>
          <Text
            type="head"
            style={{
              fontWeight: "600",
              color: "#333",
            }}
          >
            {data.sub} <RiVerifiedBadgeFill style={iconStyle} />
          </Text>
          {!profile && (
            <Text
              type="head"
              style={{
                fontSize: "1.6rem",
                marginTop: "-.1rem",

                fontWeight: "500",
                color: "#333",
              }}
            >
              Volga{data.sub}
            </Text>
          )}
          {defaultCard && (
            <PriceBox type="outer">
              <PriceBox type="inner">
                <Text
                  style={{
                    color: "var(--faint_text_black)",

                    fontWeight: "500",
                  }}
                >
                  Floor Price
                </Text>
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "1rem",
                    color: "#555",
                  }}
                >
                  USDT
                </span>
              </PriceBox>
              <PriceBox type="inner" style={{ width: "20%" }}>
                <Text
                  style={{
                    fontWeight: "700",
                    alignSelf: "end",
                    color: "#333",
                  }}
                >
                  3 ETH
                </Text>{" "}
                <span
                  style={{
                    fontWeight: "400",
                    alignSelf: "end",
                    fontSize: "1rem",
                    color: "#555",
                  }}
                >
                  $4700
                </span>
              </PriceBox>
            </PriceBox>
          )}
          {Exhibition && (
            <PriceBox type="outer">
              <Text
                style={{
                  fontWeight: "600",
                  // alignSelf: "end",
                  color: "#333",
                }}
              >
                Total NFT
              </Text>
              <Text
                style={{
                  fontWeight: "600",
                  alignSelf: "end",
                  color: "#333",
                }}
              >
                50
              </Text>
            </PriceBox>
          )}
        </CardDetailBox>
      </Link>
      {Edit && (
        <EditBox>
          <CardProfile />
        </EditBox>
      )}
    </CardsStyle>
  );
}

export default Cards;
