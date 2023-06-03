import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { SignUpParams, useSignUp } from "@/remotes/signUp";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, watch, getValues, formState } = useForm<SignUpParams>();
  const { mutate } = useSignUp();

  const handleSignUp = () => {
    const { name, email, password } = getValues();
    mutate({ name, email, password });
  };

  console.log(formState.errors);

  return (
    <Container>
      <Input
        label="이름"
        placeholder="이름"
        className="signup-input"
        {...register("name", {
          required: true,
        })}
      />
      <Input
        label="이메일"
        className="signup-input"
        placeholder="이메일"
        {...register("email", {
          required: true,
        })}
      />
      <Input
        label="비밀번호"
        className="signup-input"
        placeholder="비밀번호"
        {...register("password", {
          required: true,
        })}
      />
      <SignUpButton onClick={handleSignUp} disabled={!formState.isValid}>
        회원가입 후 시작하기
      </SignUpButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  min-height: 100vh;

  .signup-input {
    margin-bottom: 12px;
  }
`;

const SignUpButton = styled(Button)`
  margin-top: auto;
`;

export default SignUp;
