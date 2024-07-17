import styled from "styled-components";
import SignUpForm from "../features/Authentication/SignUpForm/SignUpForm";
import LoginForm from "../features/Authentication/LoginForm/LoginForm";
import { useState } from "react";
import { useSelector } from "react-redux";

const SignInStyleMobile = styled.div`
  display: none;
  @media (max-width: 870px) {
    display: flex;
    background: var(--appbackgroundcolor);
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
`;
const SignInStyleDesktop = styled.div`
  display: flex;
  background: var(--appbackgroundcolor);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 870px) {
    display: none;
  }
`;
const RowMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 1.5rem;
  width: 100%;
  height: 100vh;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: var(--blue_btn);
  color: var(--white_text);
  font-size: 3rem;
  height: 100%;
  transition: all 0.8s;
  width: ${(props) => (props.type === "login" ? "50%" : "")};
  position: ${(props) => (props.type === "login" ? "absolute" : "")};
  top: ${(props) => (props.type === "login" ? "0" : "")};
  right: ${(props) => (props.type === "login" ? "0" : "")};
`;
const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: all 0.8s;
`;
const SignUpBoxMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: all 0.8s;
  background-color: #f00;
  z-index: 10;
`;
const LoginBoxMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  transition: all 0.8s;
  position: ${(props) => (props.type === "login" ? "absolute" : "")};
  top: ${(props) => (props.type === "login" ? "0" : "")};
  left: ${(props) => (props.type === "login" ? "0" : "")};
`;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  border: 1px solid var(--white_text);
  border-radius: 1rem;
  padding: 0.8rem 1rem;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    background: var(--blue_background_hover);
  }
`;
const Text = styled.span`
  font-size: 2rem;
  color: inherit;
  width: 80%;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white_text_faint);
`;
function SignIn() {
  const [toggleSigin, setToggleSigin] = useState(true);

  return (
    <>
      <SignInStyleDesktop>
        <Row>
          <SignUpBox
            style={{
              transform: `${
                toggleSigin ? "translateX(0)" : "translateX(100%)"
              }`,
            }}
            className={toggleSigin ? "signUpInActive" : "signUpActive"}
          >
            <SignUpForm setToggleSigin={setToggleSigin} />
          </SignUpBox>
          <Description
            style={{
              transform: `${
                toggleSigin ? "translateX(0)" : "translateX(-100%)"
              }`,
            }}
            className={toggleSigin ? "signUpInActive" : "signUpActive"}
          >
            <Text
              style={{
                fontSize: "4rem",
                fontWeight: "600",
                color: "var(--white_text)",
              }}
            >
              Welcome Back!
            </Text>
            <Text>To stay connected with us, please login</Text>
            <Text style={{ margin: "-1rem 0 2rem 0" }}>
              with your personal info
            </Text>
            <BtnBox onClick={() => setToggleSigin(true)}>SIGN IN</BtnBox>
          </Description>
          <LoginBox
            type="login"
            style={{
              transform: `${
                toggleSigin ? "translateX(0)" : "translateX(100%)"
              }`,
            }}
            className={toggleSigin ? "loginActive" : "loginInActive"}
          >
            <LoginForm setToggleSigin={setToggleSigin} />
          </LoginBox>
          <Description
            type="login"
            style={{
              transform: `${
                toggleSigin ? "translateX(0)" : "translateX(-100%)"
              }`,
            }}
            className={toggleSigin ? "loginActive" : "loginInActive"}
          >
            <Text
              style={{
                fontSize: "4rem",
                fontWeight: "600",
                color: "var(--white_text)",
              }}
            >
              Hello, Friend!
            </Text>
            <Text>Enter your personal details and take</Text>
            <Text style={{ margin: "-1rem 0 2rem 0" }}>a journey with us</Text>
            <BtnBox onClick={() => setToggleSigin(false)}>SIGN UP</BtnBox>
          </Description>
        </Row>
      </SignInStyleDesktop>
      <SignInStyleMobile>
        <RowMobile>
          <SignUpBoxMobile
            className={
              toggleSigin ? "inActiveMobileSignIn" : "activeMobileSignIn"
            }
          >
            <SignUpForm mobile="true" setToggleSigin={setToggleSigin} />
          </SignUpBoxMobile>
          <LoginBoxMobile>
            <LoginForm mobile="true" setToggleSigin={setToggleSigin} />
          </LoginBoxMobile>
        </RowMobile>
      </SignInStyleMobile>
    </>
  );
}

export default SignIn;
