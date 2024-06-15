import styled from "styled-components";
import { IoArrowForward } from "react-icons/io5";

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(5px);
  gap: 0.5rem;
  color: ${(props) =>
    props.type === "nav" ? "var(--white_text)" : "var(--faint_text_black)"};
  padding: 1rem 1.5rem;
  border-radius: 0.7rem;
  font-size: 1.8rem;
  border: ${(props) =>
    props.type === "nav" ? "1px solid var(--inputField_border)" : "none"};
`;

const iconStyle = {
  color: "var(--black_text)",
  width: "2rem",
  height: "2rem",
};
function Button({
  children,
  width,
  padding,
  font,
  color,
  arrow,
  border,
  type,
}) {
  return (
    <>
      {!type ? (
        <ButtonStyle
          style={{
            width: `${width}`,
            padding: `${padding}`,
            fontSize: `${font}`,
            color: `${color}`,
            border: `${border}`,
          }}
          className={border ? "withBorder" : "withoutBorder"}
        >
          {children} {arrow === "right" && <IoArrowForward style={iconStyle} />}
        </ButtonStyle>
      ) : (
        <ButtonStyle
          style={{
            width: `${width}`,
            padding: `${padding}`,
            fontSize: `${font}`,
            color: `${color}`,
            border: `${border}`,
          }}
          className={border ? "navBorder" : "nav"}
        >
          {children}
        </ButtonStyle>
      )}
    </>
  );
}

export default Button;
