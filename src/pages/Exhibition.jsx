import styled from "styled-components";
import UserProfile from "./UserProfile";
import Button from "../ui/Button";

const ExhibtionStyle = styled.div`
  width: 100%;
  position: relative;
`;
const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`;
const Text = styled.span`
  font-size: 1.4rem;
  color: var(--black_text);
  border-radius: 5rem;
  padding: 0.5rem 2rem;
  background: var(--balance_background);
  backdrop-filter: blur(5px);
`;
function Exhibtion() {
  return (
    <ExhibtionStyle>
      <UserProfile exhibition="true" isExhibition="true" />
      <BtnBox>
        <Button
          background="true"
          font="1.8rem"
          color="var(--white_text)"
          width="100%"
          padding="var(--padding_btn_big)"
        >
          Join Exhibition
        </Button>
        <Text>Fee: 0.02 ETH</Text>
      </BtnBox>
    </ExhibtionStyle>
  );
}

export default Exhibtion;
