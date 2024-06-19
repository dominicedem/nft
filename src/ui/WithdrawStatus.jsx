import styled from "styled-components";
import Button from "./Button";
// import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlinePending } from "react-icons/md";

const WithdrawStatusStyle = styled.div`
  width: 30%;
  background-color: var(--appbackgroundcolor);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
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
function WithdrawStatus({ status }) {
  return (
    <WithdrawStatusStyle>
      {status ? (
        <Status style={{ alignItems: "center", gap: "2.5rem" }}>
          <Text
            style={{
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            Sales commission
          </Text>
          <Text>
            you don’t have sufficient ETH in your wallet ( fee wallet ) to pay
            for your outstanding salles commission
          </Text>
          <Text style={{ alignSelf: "start", marginBottom: "-1.5rem" }}>
            Sales commission: 0.4 ETH
          </Text>
          <Button
            padding="1rem 1.5rem"
            width="100%"
            background="true"
            font="1.6rem"
            color="var(--white_text)"
          >
            Deposit
          </Button>
        </Status>
      ) : (
        <Status
          style={{ alignItems: "center", gap: "2rem", padding: "1rem 3rem" }}
        >
          <Text style={{ fontSize: "2rem", fontWeight: "700" }}>
            Sales commission
          </Text>
          <MdOutlinePending style={iconStyle} />
          <Text style={{ fontSize: "1.6rem", fontWeight: "600" }}>
            Proccessing
          </Text>
          <Text style={{ fontSize: "1.3rem" }}>
            This might take a while before completion
          </Text>
        </Status>
      )}
    </WithdrawStatusStyle>
  );
}

export default WithdrawStatus;
