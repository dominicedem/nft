import styled from "styled-components";
import SignUpForm from "../features/Authentication/SignUpForm/SignUpForm";
import LoginForm from "../features/Authentication/LoginForm/LoginForm";
import { useState } from "react";

const SignInStyle = styled.div`
  display: flex;
  background: var(--appbackgroundcolor);
  align-items: center;
  justify-content: center;
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
  z-index: ${(props) => (props.type === "login" ? "100" : "-10")};
`;
const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: all 0.8s;
  z-index: -10;
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
  z-index: 100;
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
  const [toggleSigin, setToggleSigin] = useState(false);
  console.log(toggleSigin);
  return (
    <SignInStyle>
      <Row>
        <SignUpBox
          style={{
            transform: `${toggleSigin ? "translateX(0)" : "translateX(100%)"}`,
          }}
          className={toggleSigin && "signUpActive"}
        >
          <SignUpForm setToggleSigin={setToggleSigin} />
        </SignUpBox>
        <Description
          style={{
            transform: `${toggleSigin ? "translateX(0)" : "translateX(-100%)"}`,
            // borderTopLeftRadius: "1rem",
            // borderBottomLeftRadius: `1rem`,
          }}
          className={toggleSigin && "signUpActive"}
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
            transform: `${toggleSigin ? "translateX(0)" : "translateX(100%)"}`,
          }}
          className={toggleSigin && "loginInActive"}
        >
          <LoginForm setToggleSigin={setToggleSigin} />
        </LoginBox>
        <Description
          type="login"
          style={{
            transform: `${toggleSigin ? "translateX(0)" : "translateX(-100%)"}`,
            // borderTopRightRadius: "1rem",
            // borderBottomRightRadius: `1rem`,
          }}
          className={toggleSigin && "loginInActive"}
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
    </SignInStyle>
  );
}

export default SignIn;
