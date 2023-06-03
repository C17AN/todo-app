import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import { SignUpParams, signUp, useSignUp } from "@/remotes/signUp";
import styled from "@emotion/styled";
import colors from "material-colors";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { register, watch, getValues, formState } = useForm<SignUpParams>();
  const { name, email, password } = getValues();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(signUp, {
    onSuccess(data, variables, context) {
      toast.success(
        "이메일 확인을 위한 메일을 보내드렸어요.\n지금 메일함을 확인해주세요."
      );
      navigate("/");
    },
    onError(error) {
      toast.error("잠깐 오류가 발생했어요.\n잠시 뒤에 다시 시도해주세요.");
    },
  });

  const handleSignUp = () => {
    mutate({ name, email, password });
  };

  return (
    <Container>
      <Toaster toastOptions={{ duration: 5000 }} />
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
      <SignUpButton
        loading={isLoading}
        onClick={handleSignUp}
        disabled={!formState.isValid}
      >
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
