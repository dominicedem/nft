import styled from "styled-components";
import Button from "../ui/Button";
import useCountDown from "../hooks/useCountDown";
import { useSelector } from "react-redux";
import useResendEmailLink from "../hooks/useResendEmailLink";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../ui/Loading";
import { RxCross1 } from "react-icons/rx";

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
  @media (max-width: 870px) {
    display: ${(props) => props.type === "description" && "none"};
  }
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
  width: 70%;
  @media (max-width: 480px) {
    width: 80%;
  }
  @media (max-width: 350px) {
    width: 90%;
  }
`;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(4px);
  background: var(--overlay_background);
  z-index: 100;
`;
const CloseMenu = styled.div`
  position: fixed;
  top: 3%;
  right: 3%;
  cursor: pointer;
`;

const closeIcon = {
  color: "var(--primary_text_color)",
  width: "2.5rem",
  height: "2.5rem",
};
const linkStyle = {
  textDecoration: "none",
  width: "20%",
};

function VerifyEmail() {
  const { time, startTimer } = useCountDown();
  const { userEmail, token } = useSelector((state) => state.AllEmailNameData);
  const { mutate, isLoading } = useResendEmailLink(token);
  const navigate = useNavigate();

  function handleResendLink() {
    time === 0 && mutate();
    time === 0 && !isLoading && startTimer();
  }
  return (
    <VerifyEmailStyle>
      <Column
        type="description"
        style={{ background: "var(--blue_btn)", fontWeight: "600" }}
      >
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
          A verification link has been sent to your email , click the link to
          verify your account.
        </Text>
      </Column>
      <Column style={{ position: "relative" }}>
        <Img src="/emailPics.png" />
        <Text style={{ color: "var(--blue_btn)", fontWeight: "600" }}>
          Verify Email
        </Text>
        <Text style={{ fontSize: "1.6rem" }}>
          Email verification link has been sent to :
        </Text>
        <Text style={{ fontSize: "1.6rem", marginTop: "-2rem" }}>
          {userEmail}
        </Text>
        <Row style={{ marginTop: "3rem" }}>
          <Text style={{ fontSize: "1.45rem" }}>Didn’t receive email?</Text>
          {time > 0 && <Text style={{ fontSize: "1.4rem" }}>{time}s</Text>}
          <BtnBox onClick={() => handleResendLink()}>
            <Button
              padding=".8rem 1.5rem"
              width="100%"
              background={time === 0 && "var(--blue_btn)"}
              color={time === 0 ? "var(--white_text)" : "var(--sideBar_text)"}
            >
              Resend link
            </Button>
          </BtnBox>
        </Row>
        <Row style={{ marginTop: "-1rem" }}>
          <Text style={{ fontSize: "1.45rem" }}>Already verified?</Text>
          <Link style={linkStyle} to="/signin">
            <Text style={{ fontSize: "1.45rem", textDecoration: "underline" }}>
              Login
            </Text>
          </Link>
        </Row>
        {isLoading && (
          <LoadingBox>
            <Loading />
          </LoadingBox>
        )}
      </Column>
      <CloseMenu onClick={() => navigate(-1)}>
        <RxCross1 style={closeIcon} />
      </CloseMenu>
    </VerifyEmailStyle>
  );
}

export default VerifyEmail;
