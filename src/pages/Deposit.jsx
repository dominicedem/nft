import styled from "styled-components";
import { IoWarningOutline } from "react-icons/io5";
import CopyToClip from "../ui/CopyToClip";

const MintBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 50rem;
  margin: 0 auto 2rem auto;
  background: var(--subtle_background);
`;
const MintModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 100%;
  padding: 4rem 4rem 5rem 4rem;
  border-radius: 1rem;
  border: 1px solid var(--inputField_border);
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
  padding: 3.5rem 0;
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

const warningStyle = {
  width: "1.2rem",
  height: "1.2rem",
  color: "#ee0000",
  cursor: "pointer",
};
function Deposit() {
  return (
    <MintBox>
      <Text style={{ fontSize: "2rem", fontWeight: "700" }}>Deposit</Text>
      <MintModalStyle>
        <ImageBox></ImageBox>
        <Text style={{ color: "#ee0000", fontSize: "1rem" }}>
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
                maxWidth: "85%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              0x26hi88fgw746t2fg348y348y4g38gguoguoguog6r6r76tctx66y
            </Text>
            <Column style={{ width: "10%", alignItems: "center" }}>
              <CopyToClip textToCopy="0x26hi88fgw746t2fg348y348y4g38tg7tg3vg73083gp" />
            </Column>
          </Row>
        </Column>
        <Column>
          <Text>Network</Text>
          <Row style={{ padding: "1.3rem" }}>
            <Text style={{ fontSize: "1.6rem", fontWeight: "700" }}>
              Erhereum (ERC20)
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
