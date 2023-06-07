import ListRow from "@/components/common/ListRow";
import Text from "@/components/common/Text";
import { useSession } from "@/hooks/useSession";
import styled from "@emotion/styled";

type Props = {};

const Profile = (props: Props) => {
  const session = useSession();

  return (
    <Container>
      <div>{session?.user.user_metadata.name}</div>
      <Text typography="section-description">계획적인 직장인</Text>
      <ul>
        <ListRow title="내 정보" />
      </ul>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 12px;
`;

export default Profile;
