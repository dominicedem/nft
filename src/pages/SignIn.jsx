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
  width: 85%;
  height: 80vh;
`;
const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white_text);
  font-size: 3rem;
  height: 100%;
  transition: all 1s;
  width: ${(props) => (props.type === "login" ? "50%" : "")};
  position: ${(props) => (props.type === "login" ? "absolute" : "")};
  top: ${(props) => (props.type === "login" ? "0" : "")};
  left: ${(props) => (props.type === "login" ? "0" : "")};
  z-index: ${(props) => (props.type === "login" ? "-1" : "100")};
`;
const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: all 1s;
  z-index: 100;
`;
const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  transition: all 1s;
  position: ${(props) => (props.type === "login" ? "absolute" : "")};
  top: ${(props) => (props.type === "login" ? "0" : "")};
  right: ${(props) => (props.type === "login" ? "0" : "")};
  z-index: -1;
`;
const Text = styled.span`
  font-size: 3rem;
  color: inherit;
  width: 80%;
`;
function SignIn() {
  const [active, setActive] = useState();
  return (
    <SignInStyle>
      <Row>
        <Description
          style={{
            transform: `${active ? "translateX(100%)" : "translateX(0)"}`,
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: `1rem`,
            background: "linear-gradient(#000a,#000a), url(/elephant.jpeg)",
            backgroundSize: "cover",
          }}
          className={active && "signUpActive"}
        >
          <Text>
            SignUp ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            earum quos molestiae vero voluptas sed exercitationem rerum itaque
            hic
          </Text>
        </Description>
        <SignUpBox
          style={{
            transform: `${active ? "translateX(-100%)" : "translateX(0)"}`,
          }}
          className={active && "signUpActive"}
        >
          <SignUpForm setActive={setActive} />
        </SignUpBox>
        <Description
          style={{
            transform: `${active ? "translateX(100%)" : "translateX(0)"}`,
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: `1rem`,
            background: "linear-gradient(#0009,#0009),url(/pics2.jpeg)",
            backgroundSize: "cover",
          }}
          type="login"
          className={active && "loginInActive"}
        >
          <Text>
            SignUp ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            earum quos molestiae vero voluptas sed exercitationem rerum itaque
            hic
          </Text>
        </Description>
        <LoginBox
          style={{
            transform: `${active ? "translateX(-100%)" : "translateX(0)"}`,
          }}
          type="login"
          className={active && "loginInActive"}
        >
          <LoginForm setActive={setActive} />
        </LoginBox>
      </Row>
      {/* <Row>
        </Row> */}
    </SignInStyle>
  );
}

export default SignIn;
