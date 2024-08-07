import { Link, useSearchParams } from "react-router-dom";
import Button from "./Button";
import Slider from "./Slider";
import styled from "styled-components";

const SliderBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: start;
  background: ${(props) =>
    props.type === "head"
      ? "linear-gradient(var(--appbackgroundcolor), #0001 40%)"
      : "inherit"};
  width: 98%;
  margin: 3.5rem auto;
`;
const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  color: var(--black_text);
  width: 90%;
  font-weight: 700;
  padding-right: 1rem;
  transform: translateX(6%);
  text-transform: capitalize;
  @media (max-width: 980px) {
    padding-right: 0;
    transform: translateX(4%);
    width: 94%;
  }
`;
const Span = styled.span`
  font-size: ${(props) => (props.type === "buy" ? "2.2rem" : "3rem")};
  color: var(--black_text);
  font-weight: 700;
  text-transform: capitalize;
  @media (max-width: 600px) {
    font-size: ${(props) => (props.type === "buy" ? "2.1rem" : "2.5rem")};
  }
  @media (max-width: 350px) {
    font-size: ${(props) => props.type === "buy" && "1.85rem"};
  }
`;

const linkStyle = {
  color: "inherit",
  textDecoration: "none",
  // transform: "translateX(12%)",
};

function SliderCon({
  data,
  title,
  right,
  font,
  isLoading,
  Exhibition,
  defaultCard,
  description,
}) {
  const [searchParams, _] = useSearchParams();
  let paramCategory = searchParams?.get("category");
  const category = (data && data[0].category) || "exhibition";
  return (
    <SliderBoxStyle>
      <Text
        style={{ fontSize: `${font?.size}`, fontWeight: `${font?.weight}` }}
      >
        <Span type={`${description}`}>{title}</Span>
        {right?.text && (
          <Link style={linkStyle} to={`/category/${paramCategory || category}`}>
            <Button
              padding={
                right?.text
                  ? "var(--padding_btn_big)"
                  : "var(--padding_btn_small)"
              }
            >
              {right?.text}
            </Button>
          </Link>
        )}
      </Text>
      <Slider
        Exhibition={Exhibition}
        isLoading={isLoading}
        data={data}
        category={paramCategory || category}
        defaultCard={defaultCard}
      />
    </SliderBoxStyle>
  );
}

export default SliderCon;
