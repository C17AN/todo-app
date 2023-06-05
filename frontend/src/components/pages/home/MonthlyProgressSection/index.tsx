import Text from "@/components/common/Text";
import styled from "@emotion/styled";
import React from "react";
type Props = {};

const MonthlyProgressSection = (props: Props) => {
  return (
    <Container>
      <Text typography="section-title" as="h4" fontWeight="semibold">
        3월의 진행률
      </Text>
      <Text>40개 중 30개의 일정을 마쳤어요.</Text>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fcf4dd;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 10px;
  padding: 12px;

  .progress-title {
  }
`;

export default MonthlyProgressSection;
