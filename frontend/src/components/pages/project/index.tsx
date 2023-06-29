import Text from "@/components/common/Text";
import styled from "@emotion/styled";
import colors from "material-colors";

import ProjectList from "./ProjectList";

type Props = {};

const Project = (props: Props) => {
  return (
    <Container>
      <Text fontWeight="bold" typography="h3" className="section-title">
        내 프로젝트
      </Text>
      <Text
        fontWeight="semibold"
        typography="section-description"
        className="section-description"
        color={colors.grey[500]}
      >
        프로젝트는 개월 단위로 관리됩니다.
      </Text>
      <ProjectList />
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 16px;

  .section-title {
    margin-bottom: 6px;
  }

  .section-description {
    margin-bottom: 14px;
  }
`;

export default Project;
