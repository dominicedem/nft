import styled from "styled-components";
import Button from "./Button";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ValidationStatusStyle = styled.div`
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
function ValidationStatus({ status }) {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.authData);

  return (
    <ValidationStatusStyle>
      {status === "false" ? (
        <Status style={{ alignItems: "center", gap: "2.5rem" }}>
          <Text
            style={{
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            Validation
          </Text>
          <Text style={{ textAlign: "justify" }}>
            you don’t have sufficient ETH in your wallet ( fee wallet ) to
            process the validation of the artwork
          </Text>
          <Text style={{ alignSelf: "start", marginBottom: "-1.5rem" }}>
            validation Fee: {userData?.wallet?.validationFee} ETH
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
      ) : (
        <Status
          style={{ alignItems: "center", gap: "2rem", padding: "1rem 3rem" }}
        >
          <Text style={{ fontSize: "2rem", fontWeight: "700" }}>
            Validation
          </Text>
          <FaRegCheckCircle style={iconStyle} />
          <Text style={{ fontSize: "1.6rem", fontWeight: "600" }}>
            Successful
          </Text>
        </Status>
      )}
    </ValidationStatusStyle>
  );
}

export default ValidationStatus;
