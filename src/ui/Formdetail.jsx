import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styled from "styled-components";

const Formbox = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Formdetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #e6e6e6ec;
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (max-width: 459px) {
    order: -1;
  }
  @media (max-width: 400px) {
    padding: 2rem 0.5rem;
    order: -1;
  }
`;

const Form = styled.input`
  background: inherit;
  border: 0.1px solid var(--white_text);
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  width: 60%;
  color: #d1d1d1ec;
  font-size: 1.6rem;
  transition: all 0.1s;
  @media (max-width: 700px) {
    width: 90%;
  }
  @media (max-width: 459px) {
    max-width: 100vw;
  }
  @media (max-width: 500px) {
    align-self: start;
  }
  &::placeholder {
    font-size: 1.4rem;
    color: #c4c4c486;
  }
  &:focus {
    outline: none;
  }
`;

const Submitform = styled.button`
  font-size: 1.6rem;
  padding: 1rem 2.2rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: var(--sideBar_text);
  transition: all 0.3s;
  background: -webkit-linear-gradient(var(--appbackgroundcolor), #b4b4b4);
  &:hover {
    background: -webkit-linear-gradient(#d8d8d8, #969595);
  }
  @media (max-width: 500px) {
    align-self: start;
  }
`;
const Contacthead = styled.h4`
  font-size: 2.2rem;
  color: var(--light_faint);
`;
const Contacttext = styled.p`
  color: var(--white_text);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

function Formdetail() {
  const [Submitting, setSubmitting] = useState();
  const { register, reset, handleSubmit } = useForm();

  function handlesubmit() {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Submitted successfully");
      reset();
    }, 3000);
  }
  function handleError(error) {
    if (error?.email?.message) {
      toast.error(error?.email?.message);
    }
  }
  return (
    <Formdetails>
      <Contacthead>Stay in touch </Contacthead>
      <Contacttext>
        Don't miss anything, Stay in touch with us and get real time update.
      </Contacttext>
      <Formbox onSubmit={handleSubmit(handlesubmit, handleError)}>
        <Form
          disabled={Submitting}
          type="email"
          {...register("email", {
            required: "Enter an email",
          })}
          placeholder="Email Address"
        />
        {!Submitting ? (
          <Submitform
            type="submit"
            onSubmit={handleSubmit(handlesubmit, handleError)}
          >
            Submit
          </Submitform>
        ) : (
          <Submitform>Loading...</Submitform>
        )}
      </Formbox>
    </Formdetails>
  );
}

export default Formdetail;
