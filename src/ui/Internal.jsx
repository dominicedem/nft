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
function Internal({ register, setValue }) {
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
      <Label htmlFor={sold ? "internalAddress" : "email"}>
        {sold ? "User deposit Address" : "Email address"}
      </Label>
      {sold ? (
        <Row style={{ marginTop: "-1rem" }}>
          <Input
            key="internalKey"
            id="internalAddress"
            type="text"
            {...register("internalAddress", {
              required: "This field is required",
            })}
          />
          <PasteToClip type="internal" setValue={setValue} />
        </Row>
      ) : (
        <Row style={{ marginTop: "-1rem" }}>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "This field is required",
            })}
          />

          <IconBox>
            <MdOutlineEmail style={IconStyle} />
          </IconBox>
        </Row>
      )}
    </>
  );
}

export default Internal;
