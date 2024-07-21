import { TypeAnimation } from "react-type-animation";

export default function Autotype() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Welcome to the best nft platform in the world",
          5000,
          "Discover! create! and sell your nft with ease...",
          5000,
          "Join exhibitions and earn sales commission",
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
