import { useState } from "react";
import styled from "styled-components";

const ViewAllDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: inherit;
  align-items: start;
  gap: 2.2rem;
  padding-left: 0.8rem;
`;
const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`;
const RowBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Span = styled.div`
  font-size: ${(props) => (props.type === "head" ? "1.65rem" : "1.65rem")};
  font-weight: ${(props) => (props.type === "head" ? "600" : "none")};
  color: var(--black_text);
  font-family: "IBM Plex Sans", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Text = styled.span`
  font-size: ${(props) => (props.type === "head" ? "1.65rem" : "1.65rem")};
  font-weight: ${(props) => (props.type === "head" ? "600" : "none")};
  color: var(--black_text);
  font-family: "IBM Plex Sans", sans-serif;
  display: inline-block;
  width: ${(props) => (props.type === "collapse" ? "83%" : "100%")};
  white-space: ${(props) => props.type === "collapse" && "nowrap"};
  overflow: ${(props) => (props.type === "expand" ? "visible" : "hidden")};
  text-overflow: ${(props) => (props.type === "expand" ? "none" : "ellipsis")};
`;
function ViewAllDetails({ category, data }) {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const listed =
    category === "arts"
      ? "87"
      : category === "gaming"
      ? "89"
      : category === "pfps"
      ? "86"
      : category === "photography"
      ? "88"
      : category === "membership"
      ? "89"
      : category === "exhibition" && "58";
  const categoryOwner =
    category === "arts"
      ? "60"
      : category === "gaming"
      ? "62"
      : category === "pfps"
      ? "59"
      : category === "photography"
      ? "60"
      : category === "membership"
      ? "61"
      : category === "exhibition" && "58";
  const categoryText =
    category === "arts"
      ? "Welcome to our NFT art category, where creativity meets blockchain technology. Explore, buy, and sell unique digital artworks that redefine ownership and expression. Join us in shaping the future of art collecting today!"
      : category === "gaming"
      ? "Welcome to our NFT gaming category, where virtual worlds come to life through blockchain technology. Dive into a universe of unique game assets, from characters to items, each tokenized for ownership and authenticity. Whether you're a gamer, collector, or creator, explore, trade, and unleash your gaming passion with us. Welcome to the next level of gaming innovation with NFTs!"
      : category === "pfps"
      ? "Welcome to our NFT PFP category, where profile pictures become collectible digital art. Explore a gallery of unique avatars, each tokenized for ownership and individuality. Find your perfect PFP or create one to express your identity in the digital world."
      : category === "photography"
      ? "Explore our NFT photography gallery, where snapshots become timeless digital assets. Discover a collection of unique photographs, each tokenized to preserve authenticity and value. Collect, trade, and own moments captured in pixels on our innovative category."
      : category === "membership"
      ? "Step into our NFT membership category, where exclusive digital access meets blockchain security. Discover a realm where memberships are tokenized for authenticity and perks are encoded with unique benefits. Join a community redefining membership experiences with NFTs."
      : category === "exhibition" &&
        "Step into our virtual NFT exhibition hall, where digital art takes center stage. Immerse yourself in curated collections of NFT artworks, from paintings to sculptures, each imbued with blockchain-backed authenticity. Experience art in a new dimension with our digital exhibition platform.";
  return (
    <ViewAllDetailsStyle>
      <ColumnBox>
        <Text
          style={{
            fontSize: "3.5rem",
            fontWeight: 500,
            textTransform: "capitalize",
          }}
        >
          {category}
        </Text>
        <RowBox style={{ marginTop: "-1.5rem" }}>
          <Span>
            Items <Text type="head">{data ? data?.results * 9 : "..."}</Text>
          </Span>
          <Span>
            Chain <Text type="head">Ethereum</Text>
          </Span>
        </RowBox>
      </ColumnBox>
      <Text type={isSeeMore ? "expand" : "collapse"}>{categoryText}</Text>
      <Text
        onClick={() => setIsSeeMore((el) => !el)}
        type="head"
        style={{ marginTop: "-1.5rem", cursor: "pointer" }}
      >
        {isSeeMore ? "See Less" : "See more"}
      </Text>
      <RowBox>
        <ColumnBox>
          <Text type="head">{data ? data?.results * 27 : "..."} ETH</Text>
          <Text style={{ marginTop: "-2rem" }}>Total volume</Text>
        </ColumnBox>
        <ColumnBox>
          <Text type="head">{listed}%</Text>
          <Text style={{ marginTop: "-2rem" }}>Listed</Text>
        </ColumnBox>
        <ColumnBox>
          <Text type="head">{data ? Math.ceil(data?.results / 2) : "..."}</Text>
          <Text style={{ marginTop: "-2rem" }}>Owners</Text>
        </ColumnBox>
        <ColumnBox>
          <Text type="head">{categoryOwner}%</Text>
          <Text style={{ marginTop: "-2rem" }}>Unique owners</Text>
        </ColumnBox>
      </RowBox>
    </ViewAllDetailsStyle>
  );
}

export default ViewAllDetails;
