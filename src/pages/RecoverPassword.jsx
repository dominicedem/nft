import styled from "styled-components";
import useForgotPassword from "../hooks/useForgotPassword";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../ui/Button";
import Loading from "../ui/Loading";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const RecoverPasswordStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 1.6rem;
  background: var(--blue_btn);
  color: var(--white_text);
  @media (max-width: 870px) {
    display: none;
  }
`;
const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: inherit;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 60%;
  @media (max-width: 500px) {
    width: 80%;
  }
  @media (max-width: 350px) {
    width: 90%;
  }
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

const Text = styled.span`
  font-weight: bold;
  font-size: 2.6rem;
  color: var(--blue_btn);
  text-transform: capitalize;
`;

const ListHead = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  width: 70%;
`;
const List = styled.li`
  font-weight: bold;
  font-size: 1.7rem;
  color: var(--white_text);
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
const IconStyle = {
  fontSize: "2rem",
  color: "var(--input_Icon_color)",
  cursor: "pointer",
};

function RecoverPassword() {
  const {
    register,
    handleSubmit,
    handleError,
    errors,
    handleForgotPassword,
    isBlur,
    success,
  } = useForgotPassword();
  const navigate = useNavigate();
  return (
    <RecoverPasswordStyle>
      <Description>
        <Text style={{ color: "var(--light_faint)", marginBottom: "2rem" }}>
          Steps to reset password
        </Text>
        <ListHead>
          <List>Provide your email</List>
          <List>Click the submit botton</List>
          <List>Login to your email and follow the prompt</List>
        </ListHead>
      </Description>
      <FormBox>
        <Form onSubmit={handleSubmit(handleForgotPassword, handleError)}>
          <Text>Forgot password</Text>
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
            {errors?.email && errors?.email?.message}
          </ErrorText>
          <BtnBox style={{ marginTop: "1rem" }}>
            <Button
              background={success ? "" : "var(--blue_btn)"}
              color={success ? "" : "var(--white_text)"}
              width="100%"
              onSubmit={handleSubmit(handleForgotPassword, handleError)}
            >
              Reset
            </Button>
          </BtnBox>
        </Form>
      </FormBox>
      {isBlur && (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      )}
      <CloseMenu onClick={() => navigate(-1)}>
        <RxCross1 style={closeIcon} />
      </CloseMenu>
    </RecoverPasswordStyle>
  );
}

export default RecoverPassword;
