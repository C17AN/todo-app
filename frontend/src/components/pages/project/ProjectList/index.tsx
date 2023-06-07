import styled from "@emotion/styled";
import React from "react";

import ProjectListItem from "./ProjectListItem";

type Props = {};

const ProjectList = (props: Props) => {
  return (
    <Container>
      <ProjectListItem title="다이어트" goalText="3개월 안에 10Kg 감량하기" />
      <ProjectListItem
        title="코딩 정복"
        goalText="리액트를 다루는 기술 완독하기"
      />
    </Container>
  );
};

const Container = styled.ul`
  list-style: none;
`;

export default ProjectList;
