import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbCopy } from "react-icons/tb";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  cursor: pointer;
`;
const IconStyle = {
  color: "var(--sideBar_text)",
  width: "2rem",
  height: "2rem",
};
const iconStyle = {
  width: "2rem",
  height: "2rem",
  color: "var(--sideBar_text)",
};
const CopyToClip = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
  };

  return (
    <div>
      {isCopied ? (
        <Column onClick={handleCopyClick} style={{ width: "fit-content" }}>
          <IoIosCheckmarkCircleOutline style={IconStyle} /> Copied
        </Column>
      ) : (
        <Column onClick={handleCopyClick} style={{ width: "fit-content" }}>
          <TbCopy style={iconStyle} /> copy
        </Column>
      )}
    </div>
  );
};

export default CopyToClip;
