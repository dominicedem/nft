import styled from "styled-components";

const SignUpFormStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light_faint);
  width: 100%;
  height: 100%;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;
const Btn = styled.span`
  font-size: 3rem;
  color: var(--sideBar_text);
  cursor: pointer;
`;
function SignUpForm({ setActive }) {
  return (
    <SignUpFormStyle>
      <Btn onClick={() => setActive(true)}>SignUp</Btn>
    </SignUpFormStyle>
  );
}

export default SignUpForm;
