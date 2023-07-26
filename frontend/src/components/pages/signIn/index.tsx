import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import { SignInParams, signIn } from "@/remotes/signIn";
import styled from "@emotion/styled";
import { AuthError } from "@supabase/supabase-js";
import colors from "material-colors";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { register, getValues, formState } = useForm<SignInParams>();
  const navigate = useNavigate();
  const { mutate } = useMutation(signIn, {
    onSuccess() {
      toast.success("로그인에 성공했습니다.");
      navigate("/");
    },
    onError(error: AuthError) {
      if (error.status === 400) {
        toast.error(
          "이메일 인증이 완료되지 않았습니다.\n메일함을 확인해 주세요."
        );
      }
    },
  });

  const handleSignIn = () => {
    const { email, password } = getValues();
    mutate({ email, password });
  };

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleSignIn();
      }
    });
  }, []);

  return (
    <Container>
      <Title>
        <span className="title-text">완전히</span>
        <br />
        <span className="title-text">새로운</span>
        <br />
        <span className="title-text">일정관리</span>
      </Title>
      <form onSubmit={handleSignIn}>
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
      </form>
      <SignUpLink to="/signUp">
        <Text typography="sm">아직 회원이 아니신가요?</Text>
      </SignUpLink>
      <LoginButton onClick={handleSignIn} disabled={!formState.isValid}>
        이메일로 로그인
      </LoginButton>
      <Toaster />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem 2rem 2rem;
  position: relative;
  box-sizing: border-box;
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
  margin-bottom: 12px;
  width: 100%;
  margin-top: auto;
  display: block;
  left: 0;
`;

const SignUpLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 100px;
  color: ${colors.darkText.secondary};
`;

export default SignIn;
