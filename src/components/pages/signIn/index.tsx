import Button from "@/components/common/Button";
import styled from "@emotion/styled";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <Container>
      <div>새롭게 시작하는 자기관리</div>
      <Button onClick={() => {}}>이메일로 로그인</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

export default SignIn;
