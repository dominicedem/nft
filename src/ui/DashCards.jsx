import styled from "styled-components";
import Button from "./Button";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DashCardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 100%;
  overflow: hidden;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 120rem;
  padding-bottom: 1.2rem;
`;

const Text = styled.span`
  font-size: 2rem;
  color: var(--black_text);
  font-weight: 600;
  align-self: center;
  width: fit-content;
`;
const linkStyle = {
  textDecoration: "none",
};

function DashCards({
  all,
  header,
  defaultCard,
  Exhibition,
  profile,
  Edit,
  data,
  textdata,
}) {
  return (
    <DashCardsStyle>
      <Flex style={{ justifyContent: "space-between", width: "100%" }}>
        <Text>{header}</Text>
        <Link
          style={linkStyle}
          to={header === "NFT" ? "allUserNft" : "allUserExhibition"}
        >
          {data?.length > 2 ? (
            <Button padding={"var(--padding_btn_small)"}>view all</Button>
          ) : (
            <Button padding={"var(--padding_btn_small)"}>
              {header === "Exhibition" && data?.length < 3
                ? "Add More"
                : "view all"}
            </Button>
          )}
        </Link>
      </Flex>
      <Flex>
        {data
          ? data?.map((val, ind) => (
              <Cards
                all={all}
                defaultCard={defaultCard}
                key={ind}
                data={val}
                profile={profile}
                Exhibition={Exhibition}
                Edit={Edit}
                cardType="home"
              />
            ))
          : Array.from({ length: 4 }).map((val, ind) => (
              <Cards
                all={all}
                defaultCard={defaultCard}
                key={ind}
                profile={profile}
                Exhibition={Exhibition}
                Edit={Edit}
              />
            ))}
      </Flex>
      {textdata && (
        <Text
          style={{
            fontSize: "1.8rem",
            fontStyle: "italic",
            fontWeight: "500",
          }}
        >
          {textdata}
        </Text>
      )}
    </DashCardsStyle>
  );
}

export default DashCards;
