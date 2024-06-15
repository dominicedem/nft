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
const Text = styled.span`
  font-size: ${(props) => (props.type === "head" ? "1.65rem" : "1.65rem")};
  font-weight: ${(props) => (props.type === "head" ? "600" : "none")};
  color: var(--black_text);
  font-family: "IBM Plex Sans", sans-serif;
`;
function ViewAllDetails() {
  return (
    <ViewAllDetailsStyle>
      <ColumnBox>
        <Text
          style={{
            fontSize: "3.5rem",
            fontWeight: 500,
          }}
        >
          Art
        </Text>
        <RowBox style={{ marginTop: "-2rem" }}>
          <Text>
            Items <Text type="head">2346</Text>
          </Text>
          <Text>
            Chain <Text type="head">Ethereum</Text>
          </Text>
        </RowBox>
      </ColumnBox>
      <Text
        style={{
          display: "inline-block",
          width: "83%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugiat
        dolorum quod. Minus architecto culpa ad cupiditate odio sit nostrum ab!
        Iusto perspiciatis praesentium incidunt quam explicabo numquam sed
        pariatur.
      </Text>
      <Text type="head" style={{ marginTop: "-1.5rem" }}>
        See more
      </Text>
      <RowBox>
        <ColumnBox>
          <Text type="head">6265 ETH</Text>
          <Text style={{ marginTop: "-2rem" }}>Total volume</Text>
        </ColumnBox>
        <ColumnBox>
          <Text type="head">87%</Text>
          <Text style={{ marginTop: "-2rem" }}>Listed</Text>
        </ColumnBox>
        <ColumnBox>
          <Text type="head">626</Text>
          <Text style={{ marginTop: "-2rem" }}>Owners</Text>
        </ColumnBox>
        <ColumnBox>
          <Text type="head">60%</Text>
          <Text style={{ marginTop: "-2rem" }}>Unique owners</Text>
        </ColumnBox>
      </RowBox>
    </ViewAllDetailsStyle>
  );
}

export default ViewAllDetails;
