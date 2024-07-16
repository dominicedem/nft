import { TypeAnimation } from "react-type-animation";

export default function Autotype() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Discover! create! and sell your nft with ease...",
          5000,
          "Discover swift network without delays",
          5000,
        ]}
        wrapper="span"
        speed={10}
        className="autoTypeText"
        repeat={Infinity}
      />
    </>
  );
}
