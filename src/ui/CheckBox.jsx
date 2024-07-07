import { useState } from "react";
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
function CheckBox() {
  const [check, setCheck] = useState(false);

  return (
    <Label htmlFor="checkbox">
      <InputCheck type="checkbox" />
      <Check
        onClick={() => setCheck((el) => !el)}
        className={check ? "checked" : "unChecked"}
      ></Check>
    </Label>
  );
}

export default CheckBox;
