import { TypeAnimation } from "react-type-animation";

export default function Autotype() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Discover create and sell your nft with easy...",
          5000,
          "Discover network without any delay",
          5000,
        ]}
        wrapper="span"
        speed={10}
        style={{
          fontSize: "7rem",
          height: "100%",
          fontWeight: "700",
          padding: "2rem 0",
          display: "inline-block",
          color: "#var(sideBar_text)",
        }}
        repeat={Infinity}
      />
    </>
  );
}
