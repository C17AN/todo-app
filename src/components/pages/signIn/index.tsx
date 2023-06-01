import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import styled from "@emotion/styled";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <Container>
      <Title>
        <span className="title-text">완전히</span>
        <br />
        <span className="title-text">새로운</span>
        <br />
        <span className="title-text">일정관리</span>
      </Title>
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" />
      <LoginButton onClick={() => {}}>이메일로 로그인</LoginButton>
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

export default SignIn;
