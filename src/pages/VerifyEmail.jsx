import styled from "styled-components";
import Button from "../ui/Button";
import useCountDown from "../hooks/useCountDown";

const VerifyEmailStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--appbackgroundcolor);
  width: 100%;
  height: 100vh;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100%;
  width: 100%;
`;
const Img = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  aspect-ratio: 1/2;
`;
const Text = styled.span`
  font-size: 2.5rem;
  color: var(--sideBar_text);
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 80%;
`;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
`;
function VerifyEmail() {
  const { time, setResendLink, startTimer } = useCountDown();
  return (
    <VerifyEmailStyle>
      <Column style={{ background: "var(--blue_btn)", fontWeight: "600" }}>
        <Text style={{ fontSize: "3rem", color: "var(--white_text)" }}>
          Verify your email
        </Text>
        <Text
          style={{
            fontSize: "1.6rem",
            color: "var(--white_text)",
            width: "80%",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolores
          doloremque maxime omnis adipisci quasi ullam nostrum in ut, rerum
          mollitia nihil expedita magnam cum esse quisquam assumenda inventore
          similique.
        </Text>
      </Column>
      <Column>
        <Img src="/emailPics.png" />
        <Text style={{ color: "var(--blue_btn)", fontWeight: "600" }}>
          Verify Email
        </Text>
        <Text style={{ fontSize: "1.6rem" }}>
          Email verification link has been sent to :
        </Text>
        <Text style={{ fontSize: "1.6rem", marginTop: "-2rem" }}>
          edem...33@gmail.com
        </Text>
        <Row style={{ marginTop: "3rem" }}>
          <Text style={{ fontSize: "1.4rem" }}>didn’t receive email?</Text>
          {time > 0 && <Text style={{ fontSize: "1.4rem" }}>{time}s</Text>}
          <BtnBox onClick={() => time === 0 && startTimer()}>
            <Button
              padding=".8rem 1.5rem"
              width="100%"
              background={time === 0 && "var(--blue_btn)"}
            >
              Resend link
            </Button>
          </BtnBox>
        </Row>
      </Column>
    </VerifyEmailStyle>
  );
}

export default VerifyEmail;
