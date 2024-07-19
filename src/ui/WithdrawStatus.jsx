import styled from "styled-components";
import Button from "./Button";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const WithdrawStatusStyle = styled.div`
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
  padding: 1rem 2rem;
`;
const Text = styled.span`
  font-size: 1.4rem;
  color: var(--sideBar_text);
  width: 100%;
`;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -1rem;
`;
const iconStyle = {
  width: "7rem",
  height: "7rem",
  color: "var(--blue_btn)",
};
function WithdrawStatus({ status, handlePayCommission, isLoadingPay }) {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.authData);

  return (
    <WithdrawStatusStyle>
      {status === "true" && (
        <Status style={{ alignItems: "center", gap: "2.5rem" }}>
          <Text
            style={{
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            Sales commission
          </Text>
          <Text type="content">
            you don’t have sufficient ETH in your wallet ( fee wallet ) to pay
            for your outstanding sales commission
          </Text>
          <Text style={{ alignSelf: "start", marginBottom: "-1rem" }}>
            Sales commission: {userData?.wallet?.salesCommisionFee} ETH
          </Text>
          <BtnBox onClick={() => navigate("/dashboard/Deposit")}>
            <Button
              padding="1rem 1.5rem"
              width="100%"
              background="true"
              font="1.6rem"
              color="var(--white_text)"
            >
              Deposit
            </Button>
          </BtnBox>
        </Status>
      )}
      {status === "false" && (
        <Status
          style={{ alignItems: "center", gap: "2rem", padding: "1rem 2rem" }}
        >
          <Text style={{ fontSize: "2rem", fontWeight: "700" }}>
            Sales commission
          </Text>
          <FaRegCheckCircle style={iconStyle} />
          <Text style={{ fontSize: "1.6rem", fontWeight: "600" }}>
            Successful
          </Text>
        </Status>
      )}
      {status === "pay" && (
        <Status style={{ alignItems: "center", gap: "2rem" }}>
          <Text style={{ fontSize: "2rem", fontWeight: "700" }}>
            Sales commission
          </Text>
          <Text
            style={{
              fontSize: "1.6rem",
              fontWeight: "500",
              color: "var(--sideBar_text)",
            }}
          >
            you need to pay your outstanding sales commission on soled artworks
            before any withdrawal would be processed
          </Text>
          <Text style={{ fontSize: "1.3rem", alignSelf: "start" }}>
            sales commission: {userData?.wallet?.salesCommisionFee} ETH
          </Text>
          <BtnBox onClick={() => handlePayCommission()}>
            <Button
              padding="1rem 1.5rem"
              width="100%"
              background="true"
              font="1.6rem"
              color="var(--white_text)"
            >
              {isLoadingPay ? "Loading..." : "Pay sales commission"}
            </Button>
          </BtnBox>
        </Status>
      )}
      {status === "validate" && (
        <Status
          style={{ alignItems: "center", gap: "2rem", padding: "1rem 3rem" }}
        >
          <Text style={{ fontSize: "2rem", fontWeight: "700" }}>
            Validate Nft
          </Text>
          <Text
            style={{
              fontSize: "1.6rem",
              fontWeight: "500",
              color: "var(--sideBar_text)",
              marginBottom: "1rem",
            }}
          >
            one of your Nft has been flagged due to copy rights and requires to
            be validated before withdrawal will be processed .
          </Text>
          <BtnBox onClick={() => navigate("/dashboard/validation")}>
            <Button
              padding="1rem 1.5rem"
              width="100%"
              background="true"
              font="1.6rem"
              color="var(--white_text)"
            >
              Validate Nft
            </Button>
          </BtnBox>
        </Status>
      )}
    </WithdrawStatusStyle>
  );
}

export default WithdrawStatus;
