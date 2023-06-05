import Text from "@/components/common/Text";
import styled from "@emotion/styled";
import React from "react";

type Props = {};

const Project = (props: Props) => {
  return (
    <Container>
      <Text fontWeight="bold" typography="h3">
        프로젝트
      </Text>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 12px;
`;

export default Project;
