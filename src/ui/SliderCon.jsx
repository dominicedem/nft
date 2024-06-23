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
const Text = styled.span`
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
  }
`;
const linkStyle = {
  color: "inherit",
  textDecoration: "none",
};

function SliderCon({ title, right, font }) {
  const [searchParams, setSearchParams] = useSearchParams();
  let paramCategory = searchParams?.get("category");
  return (
    <SliderBoxStyle>
      <Text
        style={{ fontSize: `${font?.size}`, fontWeight: `${font?.weight}` }}
      >
        {title?.types}
        {right?.text && (
          <Link
            style={linkStyle}
            to={`/category/${paramCategory || title.category}`}
          >
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
      <Slider category={paramCategory || title.category} defaultCard="true" />
    </SliderBoxStyle>
  );
}

export default SliderCon;
