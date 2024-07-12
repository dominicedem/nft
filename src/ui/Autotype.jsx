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
        style={{
          fontSize: "6.5rem",
          height: "100%",
          fontWeight: "700",
          padding: "5rem 0 0 0",
          display: "inline-block",
          color: "#var(sideBar_text)",
        }}
        repeat={Infinity}
      />
    </>
  );
}
