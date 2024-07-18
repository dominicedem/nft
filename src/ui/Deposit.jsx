import styled from "styled-components";
import { IoWarningOutline } from "react-icons/io5";
import CopyToClip from "../ui/CopyToClip";
import { useSelector } from "react-redux";

const MintBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  max-width: 50rem;
  margin: 0 auto 2rem auto;
`;
const MintModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 100%;
  padding: 2rem 4rem 5rem 4rem;
  border-radius: 1rem;
  border: 1px solid var(--inputField_border);
  background: var(--subtle_background);
  position: relative;
`;
const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 1rem;
  border-radius: 0.5rem;
  background: var(--balance_background);
  width: 55%;
  height: 35vh;
  border: 1px solid var(--border);
`;
const Text = styled.span`
  display: flex;
  align-items: end;
  gap: 0.2rem;
  font-size: 1.4rem;
  color: var(--sideBar_text);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  width: 100%;
`;

const Row = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: var(--light_faint);
  padding: 0.6rem 1rem 0.6rem 1rem;
  border-radius: 0.8rem;
`;
const Img = styled.img`
  /* width: 100%;
  height: 100%; */
  width: 22rem;
  height: 24rem;
  object-fit: cover;
  aspect-ratio: 1/2;
`;

const warningStyle = {
  width: "1.2rem",
  height: "1.2rem",
  color: "var(--error_text)",
  cursor: "pointer",
};
function Deposit() {
  const { userData } = useSelector((state) => state.authData);
  console.log(userData);
  return (
    <MintBox>
      <Text style={{ fontSize: "2rem", fontWeight: "700" }}>Deposit</Text>
      <MintModalStyle>
        {/* <ImageBox> */}
        <Img style={{ alignSelf: "center" }} src={userData.wallet.qrCode} />
        {/* </ImageBox> */}
        <Text style={{ color: "var(--error_text)", fontSize: "1rem" }}>
          <IoWarningOutline style={warningStyle} /> Only send ETH to this
          address
        </Text>
        <Column>
          <Text>Deposit Address</Text>
          <Row>
            <Text
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                display: "inline-block",
                maxWidth: "70%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {userData?.wallet?.address}{" "}
            </Text>
            <span
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                display: "inline-block",
                transform: "translateX(-45%)",
                color: "var(--sideBar_text)",
              }}
            >
              {(userData?.wallet?.address).slice(-5)}
            </span>
            <Column style={{ width: "10%", alignItems: "center" }}>
              <CopyToClip textToCopy={userData?.wallet?.address} />
            </Column>
          </Row>
        </Column>
        <Column>
          <Text>Network</Text>
          <Row style={{ padding: "1.3rem" }}>
            <Text style={{ fontSize: "1.6rem", fontWeight: "700" }}>
              Ethereum (ERC20)
            </Text>
          </Row>
        </Column>
        <Column
          style={{
            background: "var(--light_faint)",
            gap: "2.5rem",
            padding: "2rem 3rem",
            borderRadius: ".5rem",
          }}
        >
          <Row style={{ justifyContent: "space-between", gap: "0" }}>
            <Text>Minimum deposit</Text>
            <Text>0.00000001 ETH</Text>
          </Row>
          <Row style={{ justifyContent: "space-between", gap: "0" }}>
            <Text>Expected arrival</Text>
            <Text>12 network confirmation</Text>
          </Row>
          <Row style={{ justifyContent: "space-between", gap: "0" }}>
            <Text>Expected unlock</Text>
            <Text>56 network confirmation</Text>
          </Row>
        </Column>
      </MintModalStyle>
    </MintBox>
  );
}

export default Deposit;
