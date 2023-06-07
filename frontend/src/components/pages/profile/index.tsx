import ListRow from "@/components/common/ListRow";
import Text from "@/components/common/Text";
import { useSession } from "@/hooks/useSession";
import styled from "@emotion/styled";
import colors from "material-colors";

type Props = {};

const Profile = (props: Props) => {
  const session = useSession();

  return (
    <Container>
      <div className="title-container">
        <Text
          typography="h3"
          color={colors.darkText.primary}
          fontWeight="bold"
          className="section-title"
        >
          {session?.user.user_metadata.name}
        </Text>
        <Text typography="section-description">계획적인 직장인</Text>
      </div>
      <ul className="menu-list">
        <ListRow
          title="내 정보"
          description="내 정보를 관리할 수 있어요."
          className="menu-list-item"
        />
        <ListRow
          title="테마 설정"
          description="내 정보를 관리할 수 있어요."
          className="menu-list-item"
        />
        <ListRow
          title="개인정보처리방침"
          description="내 정보를 관리할 수 있어요."
          className="menu-list-item"
        />
      </ul>
      <footer className="footer">
        <button className="footer-item">로그아웃</button>
        <button className="footer-item">회원 탈퇴</button>
      </footer>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 16px;

  .title-container {
    margin-bottom: 24px;
  }

  .section-title {
    margin-bottom: 4px;
  }

  .menu-list-item {
    margin-bottom: 24px;
  }

  .footer {
    .footer-item {
      display: block;
      background-color: transparent;
      border: 0;
      outline: 0;
      padding: 0;
      padding-bottom: 2px;
      margin-bottom: 8px;
      color: ${colors.grey[700]};
      position: relative;

      &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        bottom: 0;
        left: 0;
        border-bottom: 1px solid ${colors.grey[700]};
      }
    }
  }
`;

export default Profile;
