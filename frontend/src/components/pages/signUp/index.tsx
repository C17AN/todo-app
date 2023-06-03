import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container>
      <Input label="이름" placeholder="이름" />
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" />
      <LoginButton
        onClick={() => {
          console.log("로그인");
        }}
      >
        이메일로 로그인
      </LoginButton>
      <Link to="signUp">
        <Text typography="sm">위 정보로 시작하기</Text>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;

  .title-text {
    display: inline-block;
    margin-bottom: 12px;
  }
`;

const LoginButton = styled(Button)`
  margin-top: auto;
`;

export default SignUp;
