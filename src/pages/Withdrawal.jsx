import { useState } from "react";
import styled from "styled-components";
import WithdrawStatus from "../ui/WithdrawStatus";
import TransactionStatus from "../ui/TransactionStatus";
import Button from "../ui/Button";
import Internal from "../ui/Internal";
import PasteToClip from "../ui/PasteToClip";

const WithdrawalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 50rem;
  margin: 0 auto 2rem auto;
`;
const WithdrawalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 100%;
  padding: 2rem 3rem 5rem 3rem;
  border-radius: 1rem;
  border: 1px solid var(--inputField_border);
  position: relative;
`;
const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--overlay_background);
  position: fixed;
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
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
  gap: 2rem;
  width: 100%;
`;

const Row = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: var(--light_faint);
  padding: 0.3rem 1rem 0.3rem 1rem;
  border-radius: 0.8rem;
`;
const Label = styled.label`
  font-size: 1.6rem;
  color: var(--sideBar_text);
`;
const Input = styled.input`
  background: var(--light_faint);
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--light_faint);
  padding: 1rem;
  color: var(--sideBar_text);
  font-size: 1.6rem;
`;
const TransactionStatusBox = styled.div`
  width: 100%;
`;
const Select = styled.select`
  width: 100%;
  padding: 1.1rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  color: var(--sideBar_text);
  background: inherit;
  border: none;
`;
const Option = styled.option`
  font-size: 1.6rem;
  color: var(--sideBar_text);
`;

function Withdrawal() {
  const [overlay, setOverlay] = useState(true);
  const [price, setPrice] = useState();
  const [address, setAddress] = useState();
  const [sold, setSold] = useState(true);
  const [bought, setBought] = useState(false);
  const [network, setNetwork] = useState("");

  function handleOverlay(e) {
    e.target.className.split(" ").includes("overlay") && setOverlay(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <WithdrawalStyle>
      <Text style={{ fontSize: "2rem", fontWeight: "700" }}>Withdrawal</Text>
      <WithdrawalBox>
        <TransactionStatusBox>
          <TransactionStatus
            sold={sold}
            setSold={setSold}
            bought={bought}
            setBought={setBought}
            padding=".9rem"
            font="600"
            text={{ first: "On chain", second: "Internal" }}
          />
        </TransactionStatusBox>
        <Column>
          <Text style={{ fontSize: "1.8rem" }}>
            What is on chain transaction ?
          </Text>
          <Text style={{ fontSize: "1.4rem", marginTop: "-1rem" }}>
            on chain transaction is the type of that makes use of the block
            chain ti transfer coins from one wallet to the other , learn more
          </Text>
        </Column>
        <Column
          style={{
            marginTop: "2rem",
            border: `${bought ? "1px solid var(--border)" : "none"}`,
            padding: `${bought && "1.5rem 1rem"}`,
            borderRadius: `${bought && "1rem"}`,
            width: `${bought && "105%"}`,
            marginLeft: `${bought && "-1rem"}`,
          }}
        >
          {sold ? (
            <>
              <Label htmlFor="address">Withdrawal Address</Label>
              <Row style={{ marginTop: "-1rem", padding: "0" }}>
                <Input
                  id="addrees"
                  value={address}
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <PasteToClip setAddress={setAddress} />
              </Row>
            </>
          ) : (
            <Internal />
          )}
        </Column>
        <Column>
          <Label>Network</Label>
          {sold ? (
            <Row style={{ padding: "1.3rem", marginTop: "-1rem" }}>
              <Text style={{ fontSize: "1.6rem", fontWeight: "700" }}>
                WETH
              </Text>
            </Row>
          ) : (
            <Row>
              <Select onChange={(e) => setNetwork(e.target.value)}>
                <Option value="WETH">WETH</Option>
                <Option value="SOL">SOL</Option>
                <Option value="TRON">TRON</Option>
                <Option value="MATIC">MATIC</Option>
              </Select>
            </Row>
          )}
        </Column>
        <Column style={{ marginBottom: "2rem" }}>
          <Label htmlFor="price">Withdrawal Amount</Label>
          <Row style={{ marginTop: "-1rem" }}>
            <Input
              style={{ fontWeight: "700" }}
              id="price"
              value={price}
              type="text"
              onChange={(e) => setPrice(e.target.value)}
            />
            <Text style={{ fontWeight: "700", fontSize: "1.4rem" }}>ETH</Text>
            <Text
              style={{
                fontWeight: "700",
                fontSize: "1.4rem",
                color: "var(--blue_btn)",
                marginLeft: ".8rem",
                cursor: "pointer",
              }}
            >
              MAX
            </Text>
          </Row>
          <Row
            style={{
              justifyContent: "space-between",
              background: "inherit",
              marginTop: "-2rem",
              padding: "1rem 0",
            }}
          >
            <Text>Min 0.002</Text>
            <Text>32 WETH</Text>
          </Row>
        </Column>
        <Button
          onSubmit={(e) => handleSubmit(e)}
          padding=".8rem 1.5rem"
          width="100%"
          background="true"
          font="2rem"
          color="var(--white_text)"
        >
          Withdraw
        </Button>
        <Text>
          withdrawal might take up to 30 minutes to be completely processed{" "}
        </Text>
      </WithdrawalBox>
      {overlay && (
        <Overlay className="overlay" onClick={(e) => handleOverlay(e)}>
          <WithdrawStatus status="true" />
        </Overlay>
      )}
    </WithdrawalStyle>
  );
}

export default Withdrawal;
