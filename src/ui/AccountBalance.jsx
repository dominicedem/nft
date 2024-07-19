import { useSelector } from "react-redux";
import styled from "styled-components";
import useFetchEthPrice from "../hooks/useFetchEthPrice";
import Skeleton from "react-loading-skeleton";

const AccountBalanceStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 1rem;
`;
const BalanceOverview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 3.5rem;
  background: var(--balance_background);
  border: 1px solid rgb(217, 217, 217, 50%);
  border-radius: 1rem;
  width: ${(props) => (props.type === "bal" ? "50%" : "100%")};
  padding: ${(props) => (props.type === "bal" ? "1rem 0 3rem 4rem" : "4rem")};
  @media (max-width: 575px) {
    padding: ${(props) => (props.type === "bal" ? "2rem" : "2rem 1rem")};
  }
  @media (max-width: 525px) {
    padding: ${(props) => (props.type === "bal" ? "2rem" : "1rem")};
  }
  @media (max-width: 430px) {
    width: ${(props) => (props.type === "bal" ? "70%" : "100%")};
  }
`;
const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.8rem;
  color: var(--sideBar_text);
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
  gap: 0.5rem;
  width: 100%;
`;
const Span = styled.span`
  font-size: 1.05rem;
  color: var(--blue_btn);
`;
const Line = styled.div`
  background: var(--tertiary_text_faint);
  width: 68%;
  border-bottom: 1px dashed var(--tertiary_text_faint);
  @media (max-width: 525px) {
    width: 50%;
  }
`;
function AccountBalance() {
  const { userData } = useSelector((state) => state.authData);
  const { data } = useFetchEthPrice();

  const balancePrice = (
    userData?.wallet?.accountBallance * data?.ethereum?.usd
  ).toFixed(2);
  const ethPrice = Math.ceil(userData?.wallet?.eth * data?.ethereum?.usd);
  const wethPrice = Math.ceil(userData?.wallet?.weth * data?.ethereum?.usd);

  return (
    <AccountBalanceStyle>
      <Text
        style={{
          fontSize: "2.4rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Account Overview
      </Text>
      <BalanceOverview type="bal" style={{ gap: "1rem" }}>
        <Text style={{ fontSize: "2rem" }}>Account Balance</Text>
        <Text style={{ fontSize: "3rem", fontWeight: "600" }}>
          ${userData ? balancePrice : <Skeleton width={200} />}
        </Text>
      </BalanceOverview>
      <BalanceOverview>
        <Flex style={{ alignItems: "start", gap: "1rem" }}>
          <Img src="/ethLogo.png" alt="profileImage" />
          <Flex style={{ flexDirection: "column", alignItems: "start" }}>
            <Flex>
              <Text style={{ fontWeight: "900", fontSize: "2rem" }}>
                ETH <Span style={{ fontWeight: "300" }}>(Fee wallet)</Span>
              </Text>
              <Text style={{ fontWeight: "900", fontSize: "2rem" }}>
                {userData ? (
                  userData?.wallet?.eth?.toFixed(2)
                ) : (
                  <Skeleton width={70} />
                )}
              </Text>
            </Flex>
            <Flex>
              <Text style={{ fontWeight: "300", fontSize: "1.4rem" }}>
                usdt value
              </Text>
              <Line></Line>
              <Text style={{ fontWeight: "300", fontSize: "1.45rem" }}>
                ${userData ? ethPrice : <Skeleton width={50} />}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex style={{ alignItems: "start", gap: "1rem" }}>
          <Img src="/weth.png" alt="profileImage" />
          <Flex style={{ flexDirection: "column", alignItems: "start" }}>
            <Flex>
              <Text style={{ fontWeight: "900", fontSize: "2rem" }}>
                WETH <Span style={{ fontWeight: "300" }}>(Profit wallet)</Span>
              </Text>
              <Text style={{ fontWeight: "900", fontSize: "2rem" }}>
                {userData ? (
                  userData?.wallet?.weth?.toFixed(2)
                ) : (
                  <Skeleton width={70} />
                )}
              </Text>
            </Flex>
            <Flex>
              <Text style={{ fontWeight: "300", fontSize: "1.4rem" }}>
                usdt value
              </Text>
              <Line></Line>
              <Text style={{ fontWeight: "300", fontSize: "1.45rem" }}>
                ${userData ? wethPrice : <Skeleton width={50} />}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </BalanceOverview>
    </AccountBalanceStyle>
  );
}

export default AccountBalance;
