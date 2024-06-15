import styled from "styled-components";

const AccountBalanceStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 2rem;
`;
const BalanceOverview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding: 2rem;
  background: var(--light_faint);
  border-radius: 1rem;
  width: 100%;
`;
const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.8rem;
  color: var(--black_text);
  font-family: "IBM Plex Sans", sans-serif;
`;

const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;
const Span = styled.span`
  font-size: 1.05rem;
  color: var(--blue_btn);
`;
const Line = styled.div`
  background: var(--black_text);
  width: 75%;
  height: 0.01rem;
  text-decoration: dashed;
`;
function AccountBalance() {
  return (
    <AccountBalanceStyle>
      <Text style={{ fontSize: "2.2rem", fontWeight: "500" }}>
        Account Overview
      </Text>
      <BalanceOverview style={{ width: "fit-content" }}>
        <Text>Account Balance</Text>
        <Text style={{ fontSize: "2rem", fontWeight: "500" }}>$45,000.00</Text>
      </BalanceOverview>
      <BalanceOverview>
        <Flex style={{ alignItems: "start" }}>
          <Img src="/img1.webp" alt="profileImage" />
          <Flex style={{ flexDirection: "column", alignItems: "start" }}>
            <Flex>
              <Text style={{ fontWeight: "500", fontSize: "2rem" }}>
                ETH <Span style={{ fontWeight: "300" }}>(Free wallet)</Span>
              </Text>
              <Text style={{ fontWeight: "500", fontSize: "2rem" }}>9</Text>
            </Flex>
            <Flex>
              <Text style={{ fontWeight: "300", fontSize: "1.4rem" }}>
                usdt value
              </Text>
              <Line></Line>
              <Text style={{ fontWeight: "300", fontSize: "1.45rem" }}>
                $5,000
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex style={{ alignItems: "start" }}>
          <Img src="/img1.webp" alt="profileImage" />
          <Flex style={{ flexDirection: "column", alignItems: "start" }}>
            <Flex>
              <Text style={{ fontWeight: "500", fontSize: "2rem" }}>
                ETH <Span style={{ fontWeight: "300" }}>(Free wallet)</Span>
              </Text>
              <Text style={{ fontWeight: "500", fontSize: "2rem" }}>9</Text>
            </Flex>
            <Flex>
              <Text style={{ fontWeight: "300", fontSize: "1.4rem" }}>
                usdt value
              </Text>
              <Line></Line>
              <Text style={{ fontWeight: "300", fontSize: "1.45rem" }}>
                $5,000
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </BalanceOverview>
    </AccountBalanceStyle>
  );
}

export default AccountBalance;
