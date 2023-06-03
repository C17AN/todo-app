import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useSignUp } from "@/remotes/signUp";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, watch } = useForm();
  console.log(watch());
  const {} = useSignUp();

  const handleSignUp = () => {};

  return (
    <Container>
      <Input
        label="이름"
        placeholder="이름"
        className="signup-input"
        {...register("name")}
      />
      <Input label="이메일" className="signup-input" placeholder="이메일" />
      <Input label="비밀번호" className="signup-input" placeholder="비밀번호" />
      <SignUpButton onClick={handleSignUp}>회원가입 후 시작하기</SignUpButton>
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
