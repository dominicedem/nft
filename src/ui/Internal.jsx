import { useState } from "react";
import styled from "styled-components";
import TransactionStatus from "./TransactionStatus";
import { MdOutlineEmail } from "react-icons/md";
import PasteToClip from "./PasteToClip";

const Row = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: var(--light_faint);
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
  color: var(--sideBar_text);
  font-size: 1.6rem;
  padding-left: 1rem;
`;
const TransactionStatusBox = styled.div`
  width: 100%;
`;
const IconBox = styled.div`
  padding: 1.1rem 2rem;
`;
const IconStyle = {
  fontSize: "2rem",
  color: "var(--input_Icon_color)",
  cursor: "pointer",
};
function Internal({ register }) {
  const [address, setAddress] = useState();
  const [sold, setSold] = useState(true);
  const [bought, setBought] = useState(false);
  return (
    <>
      <TransactionStatusBox style={{ width: "50%" }}>
        <TransactionStatus
          sold={sold}
          setSold={setSold}
          bought={bought}
          setBought={setBought}
          padding=".9rem"
          font="600"
          text={{ first: "Address", second: "Email" }}
        />
      </TransactionStatusBox>
      <Label htmlFor={sold ? "address" : "email"}>
        {sold ? "User deposit Address" : "Email address"}
      </Label>
      <Row style={{ marginTop: "-1rem" }}>
        <Input
          id={sold ? "address" : "email"}
          type={sold ? "text" : "email"}
          {...register(sold ? "address" : "email", {
            required: "This field is required",
          })}
        />
        {sold ? (
          <PasteToClip setAddress={setAddress} />
        ) : (
          <IconBox>
            <MdOutlineEmail style={IconStyle} />
          </IconBox>
        )}
      </Row>
    </>
  );
}

export default Internal;
