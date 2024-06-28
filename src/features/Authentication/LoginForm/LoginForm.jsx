import styled from "styled-components";

const LoginFormStyle = styled.div`
  background: var(--light_faint);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;
const Btn = styled.span`
  font-size: 3rem;
  color: var(--sideBar_text);
  cursor: pointer;
`;
function LoginForm() {
  return (
    <LoginFormStyle>
      <Btn>Login</Btn>
    </LoginFormStyle>
  );
}

export default LoginForm;
