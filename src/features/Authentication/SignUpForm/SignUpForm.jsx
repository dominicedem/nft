import styled from "styled-components";
import { RiUserLine } from "react-icons/ri";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../../../ui/Button";
import useSignUp from "../../../hooks/useSignUp";

const SignUpFormStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light_faint);
  width: 100%;
  height: 100vh;
  /* border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem; */
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
function SignUpForm({ setActive }) {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    reveal,
    setReveal,
    error,
    navigate,
    handleSubmit,
  } = useSignUp();
  return (
    <SignUpFormStyle>
      <SignUpPage>
        <HeadBox>
          <Header type="head">Create Account</Header>
        </HeadBox>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Box>
            <Label htmlFor="id">Name</Label>
            <InputField
              style={{
                border: `${
                  error
                    ? "1.34px solid var(--error_text)"
                    : "1.34px solid var(--inputField_border)"
                }`,
              }}
            >
              <Input
                id="id"
                type="text"
                value={name}
                placeholder="johnson-art"
                onChange={(e) => setName(e.target.value)}
              />
              <RiUserLine style={IconStyle} />
            </InputField>
          </Box>
          <Box>
            <Label htmlFor="id">Email</Label>
            <InputField
              style={{
                border: `${
                  error
                    ? "1.34px solid var(--error_text)"
                    : "1.34px solid var(--inputField_border)"
                }`,
              }}
            >
              <Input
                id="id"
                type="email"
                placeholder="example...@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdOutlineEmail style={IconStyle} />
            </InputField>
          </Box>
          <Box>
            <Label htmlFor="pass">Password</Label>
            <InputField>
              <Input
                id="pass"
                type={!reveal ? "password" : "text"}
                // minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!reveal ? (
                <PiEyeSlash
                  onClick={() => setReveal((el) => !el)}
                  style={IconStyle}
                />
              ) : (
                <PiEyeLight
                  onClick={() => setReveal((el) => !el)}
                  style={IconStyle}
                />
              )}
            </InputField>
          </Box>
          <Box>
            <Label htmlFor="pass">Confirm password</Label>
            <InputField>
              <Input
                id="pass"
                type={!reveal ? "password" : "text"}
                value={confirmPassword}
                // minLength={8}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {!reveal ? (
                <PiEyeSlash
                  onClick={() => setReveal((el) => !el)}
                  style={IconStyle}
                />
              ) : (
                <PiEyeLight
                  onClick={() => setReveal((el) => !el)}
                  style={IconStyle}
                />
              )}
            </InputField>
            {/* {!isLoading &&
              initial &&
              isFetched &&
              data?.status !== "success" && (
                <Error>Incorrect login credentials</Error>
              )} */}
          </Box>
          <ErrorText style={{ marginTop: "-1rem" }}>
            {error ? error?.message : ""}
          </ErrorText>
          <BtnBox style={{ marginTop: "1rem" }}>
            <Button
              background={"var(--blue_btn)"}
              color="var(--white_text)"
              width="100%"
              onClick={(e) => handleSubmit(e)}
              onSubmit={(e) => handleSubmit(e)}
            >
              Sign up
            </Button>
          </BtnBox>
          <ResetTextBox type="signup">
            Already have an account?
            <Span onClick={() => setActive(true)}>SignIn</Span>
          </ResetTextBox>
        </Form>
      </SignUpPage>
      <CloseMenu onClick={() => navigate("/")}>
        <RxCross1 style={closeIcon} />
      </CloseMenu>
    </SignUpFormStyle>
  );
}

export default SignUpForm;

// const SignUpStyle = styled.div`
//   display: grid;
//   align-items: center;
//   justify-content: center;
//   width: 100vw;
//   padding: 8rem 0 2rem 0;
//   background-color: var(--appbackgroundcolor);
//   @media (min-width: 600px) {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     width: 100vw;
//     justify-content: center;
//   }
// `;
