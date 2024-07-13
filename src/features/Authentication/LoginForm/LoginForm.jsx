import styled from "styled-components";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../../../ui/Button";
import useSignUp from "../../../hooks/useSignUp";
import Loading from "../../../ui/Loading";
const LoginFormStyle = styled.div`
  background: var(--light_faint);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
  /* border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem; */
`;
const SignUpPage = styled.div`
  background: var(--nav_background_color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  align-self: center;
  width: 100%;
  @media (min-width: 600px) {
    margin: 10rem auto;
    background: var(--nav_background_color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    align-self: center;
    width: 60%;
    position: relative;
  }
`;
const Header = styled.span`
  font-weight: ${(props) => (props.type === "head" ? "bold" : "none")};
  font-size: ${(props) => (props.type === "head" ? "2.6rem" : "1.5rem")};
  color: ${(props) =>
    props.type === "head" ? " var(--blue_btn)" : "var(--faint_text_black)"};
  gap: ${(props) => (props.type === "ship" ? "1rem" : "0")};
  text-transform: ${(props) => (props.type === "head" ? "capitalize" : "")};
`;

const Form = styled.form`
  display: flex;
  flex-direction: inherit;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;
const Label = styled.label`
  font-size: 1.5rem;
  color: var(--faint_text_black);
  cursor: pointer;
  width: fit-content;
`;
const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  background-color: inherit;
  border: 1.34px solid var(--inputField_border);
  padding: 0.5rem 1rem;
  &:hover,
  &:focus {
    border: 1.34px solid var(--blue_btn);
  }
`;
const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  border: none;
  color: var(--sideBar_text);
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  font-size: 1.6rem;
  width: 100%;
  &::placeholder {
    font-size: 1.4rem;
    color: var(--sigin_placeholder_text);
  }
`;

const HeadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
`;
const Span = styled.span`
  color: var(--blue_btn);
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
const ResetTextBox = styled.div`
  margin-top: ${(props) => (props.type === "signup" ? "-1rem" : "0.5rem")};
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  color: var(--faint_text_black);
  width: 100%;
`;
const CloseMenu = styled.div`
  position: fixed;
  top: 3%;
  right: 3%;
  cursor: pointer;
`;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ErrorText = styled.span`
  font-size: 1.4rem;
  color: var(--error_text);
  width: 100%;
  height: 1.5rem;
`;
const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(4px);
  background: var(--overlay_background);
  z-index: 10000;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const IconStyle = {
  fontSize: "2rem",
  color: "var(--input_Icon_color)",
  cursor: "pointer",
};
// const linkStyle = {
//   textDecoration: "none",
//   color: "var(--sideBar_text)",
// };
const closeIcon = {
  color: "var(--primary_text_color)",
  width: "2.5rem",
  height: "2.5rem",
};
function LoginForm({ setToggleSigin }) {
  const {
    revealLoginPassword,
    setRevealLoginPassword,
    navigate,
    handleLoginSubmit,
    handleError,
    register,
    handleSubmit,
    errors,
    isBlur,
    feedBackError,
  } = useSignUp();
  return (
    <LoginFormStyle>
      <SignUpPage>
        <HeadBox>
          <Header type="head">Sign In</Header>
        </HeadBox>
        <Form onSubmit={handleSubmit(handleLoginSubmit, handleError)}>
          <Box>
            <Label htmlFor="email">Email</Label>
            <InputField>
              <Input
                id="email"
                type="email"
                placeholder="example...@gmail.com"
                {...register("email", {
                  required: "This field is required",
                })}
              />
              <MdOutlineEmail style={IconStyle} />
            </InputField>
          </Box>
          <ErrorText style={{ marginTop: "-1.5rem" }}>
            {errors.email && errors.email.message}
          </ErrorText>
          <Box>
            <Label htmlFor="password">Password</Label>
            <InputField>
              <Input
                id="password"
                type={!revealLoginPassword ? "password" : "text"}
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password should be more than eight digit",
                  },
                })}
              />
              {!revealLoginPassword ? (
                <PiEyeSlash
                  onClick={() => setRevealLoginPassword((el) => !el)}
                  style={IconStyle}
                />
              ) : (
                <PiEyeLight
                  onClick={() => setRevealLoginPassword((el) => !el)}
                  style={IconStyle}
                />
              )}
            </InputField>
          </Box>
          <ErrorText style={{ marginTop: "-1.5rem" }}>
            {/* feedBackError */}
            {errors.password
              ? errors?.password.message
              : feedBackError
              ? "Incorrect email or password"
              : ""}
          </ErrorText>
          <Span
            onClick={() => navigate("/recoverpassword")}
            style={{
              fontSize: "1.3rem",
              alignSelf: "start",
              marginTop: "-1rem",
            }}
          >
            Forgot Password
          </Span>
          <BtnBox style={{ marginTop: "1rem" }}>
            <Button
              background="var(--blue_btn)"
              color="var(--white_text)"
              width="100%"
              onClick={(e) => handleSubmit(e)}
              onSubmit={(e) => handleSubmit(e)}
            >
              Sign up
            </Button>
          </BtnBox>
          {/* <Flex> */}
          <ResetTextBox type="signup">
            Already have an account?
            <Span onClick={() => setToggleSigin(false)}>SignUp</Span>
          </ResetTextBox>
          {/* </Flex> */}
        </Form>
      </SignUpPage>
      <CloseMenu onClick={() => navigate("/")}>
        <RxCross1 style={closeIcon} />
      </CloseMenu>
      {isBlur && (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      )}
    </LoginFormStyle>
  );
}

export default LoginForm;
