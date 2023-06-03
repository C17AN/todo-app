import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import { SignInParams, signIn, useSignIn } from "@/remotes/signIn";
import styled from "@emotion/styled";
import colors from "material-colors";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { register, getValues } = useForm<SignInParams>();
  const { mutate } = useMutation(signIn, {
    onSuccess() {
      toast.success("로그인에 성공했습니다.");
    },
    onError(error) {
      toast.error("로그인에 실패했습니다.");
      console.error(error);
    },
  });

  const handleSignIn = () => {
    const { email, password } = getValues();
    mutate({ email, password });
  };

  return (
    <Container>
      <Title>
        <span className="title-text">완전히</span>
        <br />
        <span className="title-text">새로운</span>
        <br />
        <span className="title-text">일정관리</span>
      </Title>
      <LoginInfoInput
        label="이메일"
        placeholder="이메일을 입력해주세요"
        {...register("email")}
      />
      <LoginInfoInput
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        {...register("password")}
      />
      <SignUpLink to="/signUp">
        <Text typography="sm">아직 회원이 아니신가요?</Text>
      </SignUpLink>
      <LoginButton onClick={handleSignIn}>이메일로 로그인</LoginButton>
      <Toaster />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem 2rem 2rem;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;

  .title-text {
    display: inline-block;
    margin-bottom: 12px;
  }
`;

const LoginInfoInput = styled(Input)`
  margin-bottom: 20px;
`;

const LoginButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 12px;
`;

const SignUpLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: ${colors.darkText.secondary};
`;

export default SignIn;
