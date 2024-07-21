import { useState } from "react";
import { GoPaste } from "react-icons/go";
import styled from "styled-components";

const PasteToClipStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  font-size: 1.2rem;
  padding: 1.43rem 1rem;
  background: var(--btn_hover);
  border-radius: inherit;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
`;
const iconStyle = {
  fontSize: "1.6rem",
  color: "var(--input_Icon_color)",
};
function PasteToClip({ setValue, type }) {
  const handlePasteClick = async () => {
    try {
      const pasteText = await navigator.clipboard.readText();
      type === "onChain" && setValue("address", pasteText);
      type === "internal" && setValue("internalAddress", pasteText);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
  };
  return (
    <PasteToClipStyle onClick={handlePasteClick}>
      Paste <GoPaste style={iconStyle} />
    </PasteToClipStyle>
  );
}

export default PasteToClip;
