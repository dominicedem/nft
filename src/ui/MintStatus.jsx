import styled from "styled-components";
import Button from "./Button";
import { FaRegCheckCircle } from "react-icons/fa";

const MintStatusStyle = styled.div`
  width: 30%;
  background-color: var(--appbackgroundcolor);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  @media (max-width: 1000px) {
    width: 45%;
  }
  @media (max-width: 731px) {
    width: 55%;
  }
  @media (max-width: 650px) {
    width: 70%;
  }
  @media (max-width: 490px) {
    width: 90%;
  }
`;
const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  background-color: var(--appbackgroundcolor);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
`;
const Text = styled.span`
  font-size: 1.4rem;
  color: var(--sideBar_text);
`;
const iconStyle = {
  width: "7rem",
  height: "7rem",
  color: "var(--blue_btn)",
};
function MintStatus({ status }) {
  return (
    <MintStatusStyle>
      {!status ? (
        <Status style={{ alignItems: "center", gap: "2.5rem" }}>
          <Text
            style={{
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            Minting Fee
          </Text>
          <Text>
            Sorry you don’t have enough fee to cover the minting fee required to
            mint an artwork on the platform
          </Text>
          <Text style={{ alignSelf: "start", marginBottom: "-1.5rem" }}>
            Minting Fee: 0.4 ETH
          </Text>
          <Button
            padding="1rem 1.5rem"
            width="100%"
            background="true"
            font="1.6rem"
            color="var(--white_text)"
          >
            Edit Profile
          </Button>
        </Status>
      ) : (
        <Status
          style={{ alignItems: "center", gap: "2rem", padding: "1rem 3rem" }}
        >
          <Text style={{ fontSize: "2rem", fontWeight: "700" }}>Minted</Text>
          <FaRegCheckCircle style={iconStyle} />
          <Text style={{ fontSize: "1.6rem", fontWeight: "600" }}>
            Successful
          </Text>
          <Text style={{ fontSize: "1.3rem" }}>
            Congratulations you've successfully minted this nft
          </Text>
        </Status>
      )}
    </MintStatusStyle>
  );
}

export default MintStatus;
