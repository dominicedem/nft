import { memo } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 1.8rem;
  color: var(--sideBar_text);
`;
const InputCheck = styled.input`
  width: 4rem;
  font-size: 1.6rem;
  justify-self: end;
  display: none;
`;
const Check = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  cursor: pointer;
`;
function CheckInput({ data, handleNftList, reset }) {
  const [check, setCheck] = useState(false);

  function handlePushId() {
    handleNftList(data?.id);
    setCheck((el) => !el);
  }

  useEffect(() => {
    reset && setCheck(false);
  }, [reset]);
  return (
    <Label htmlFor="check">
      <InputCheck id="check" type="checkbox" />
      <Check
        onClick={() => handlePushId()}
        className={check ? "checked" : "unChecked"}
      ></Check>
    </Label>
  );
}

export default CheckInput;
