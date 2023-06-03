import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import { SignUpParams, useSignUp } from "@/remotes/signUp";
import styled from "@emotion/styled";
import colors from "material-colors";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, watch, getValues, formState } = useForm<SignUpParams>();
  const { mutate } = useSignUp();

  const handleSignUp = () => {
    const { name, email, password } = getValues();
    mutate({ name, email, password });
  };

  return (
    <Container>
      <Text typography="h2">만나서 반가워요!</Text>
      <Text
        typography="sm"
        color={colors.grey[600]}
        className="signup-subtitle"
      >
        서비스 이용을 위한 최소한의 정보를 입력받고 있어요.
      </Text>
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
        type="password"
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

  .signup-subtitle {
    margin: 8px 0 20px 0;
  }
`;

const SignUpButton = styled(Button)`
  margin-top: auto;
`;

export default SignUp;
