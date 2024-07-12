import styled from "styled-components";
import Button from "../ui/Button";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import useResetPassword from "../hooks/useResetPassword";

const ChangePasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 50rem;
  margin: 0 auto 2rem auto;
`;
const ChangePasswordStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  width: 100%;
  padding: 2rem 4rem;
  border-radius: 1rem;
  background: var(--subtle_background);
  border: 1px solid var(--inputField_border);
  position: relative;
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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
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
const Text = styled.div`
  font-size: 1.5rem;
  color: var(--faint_text_black);
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
const IconStyle = {
  fontSize: "2rem",
  color: "var(--input_Icon_color)",
  cursor: "pointer",
};
function ChangePassword() {
  const {
    register,
    handleSubmit,
    handleError,
    errors,
    handleResetPasswordSubmit,
    isBlur,
    getValues,
    feedBackError,
    revealLoginPassword,
    setRevealLoginPassword,
    revealConfirmPassowrd,
    setRevealConfirmPassowrd,
  } = useResetPassword();

  // const { userData } = useSelector((state) => state.authData);

  return (
    <ChangePasswordBox>
      <Text style={{ fontSize: "2rem", fontWeight: "700" }}>
        Change Password
      </Text>
      <ChangePasswordStyle>
        <Form onSubmit={handleSubmit(handleResetPasswordSubmit, handleError)}>
          <Box>
            <Label htmlFor="currentPassword">Old Password</Label>
            <InputField>
              <Input
                id="currentPassword"
                type="text"
                placeholder="Current password"
                {...register("currentPassword", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password should be more than eight digit",
                  },
                })}
              />
            </InputField>
          </Box>
          <ErrorText style={{ marginTop: "-1.5rem" }}>
            {errors.currentPassword && errors.currentPassword.message}
          </ErrorText>
          <Box>
            <Label htmlFor="password">New Password</Label>
            <InputField>
              <Input
                id="password"
                placeholder="New password"
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
            {errors.password && errors?.password.message}
          </ErrorText>
          <Box>
            <Label htmlFor="passwordConfirm">Confirm Password</Label>
            <InputField>
              <Input
                id="passwordConfirm"
                placeholder="Confirm password"
                type={!revealConfirmPassowrd ? "password" : "text"}
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: () =>
                    getValues()?.passwordConfirm?.length ===
                      getValues()?.password?.length || "Password doesn't match",
                })}
              />
              {!revealConfirmPassowrd ? (
                <PiEyeSlash
                  onClick={() => setRevealConfirmPassowrd((el) => !el)}
                  style={IconStyle}
                />
              ) : (
                <PiEyeLight
                  onClick={() => setRevealConfirmPassowrd((el) => !el)}
                  style={IconStyle}
                />
              )}
            </InputField>
          </Box>
          <ErrorText style={{ marginTop: "-1.5rem" }}>
            {errors.passwordConfirm
              ? errors?.passwordConfirm.message
              : feedBackError
              ? "Incorrect password"
              : ""}
          </ErrorText>
          <BtnBox style={{ marginTop: "1rem" }}>
            <Button
              background="var(--blue_btn)"
              color="var(--white_text)"
              width="100%"
              onSubmit={handleSubmit(handleResetPasswordSubmit, handleError)}
            >
              Change Password
            </Button>
          </BtnBox>
        </Form>
      </ChangePasswordStyle>
      {isBlur && (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      )}
    </ChangePasswordBox>
  );
}

export default ChangePassword;
