import Text from "@/components/common/Text";
import { Todo } from "@/models/Todo";
import styled from "@emotion/styled";
import colors from "material-colors";
import { useState } from "react";
import ImportantTodoListItem from "./ImportantTodoListItem";
import ImportantTodoSwiper from "./ImportantTodoSwiper";

type Props = {
  todoList: Todo[];
};

const ImportantTodoSection = ({ todoList }: Props) => {
  return (
    <Container className="main-left-top-section">
      {/* <Content> */}
      <TodayTodoFilter>
        <Text
          typography="section-title"
          fontWeight="bold"
          as="h4"
          color={colors.darkText.primary}
        >
          중요한 일정
        </Text>
      </TodayTodoFilter>

      {todoList.length > 0 ? (
        <TodayTodoList>
          <ImportantTodoSwiper todoList={todoList} />
        </TodayTodoList>
      ) : (
        <EmptyTodoList>
          <Text typography="p" as="p" color={colors.grey["500"]}>
            <span className="empty-text-1">아직 해야할 일이 없어요.</span>
            <br />
            해야할 일이 있다면 등록해 보세요.
          </Text>
        </EmptyTodoList>
      )}
      {/* </Content> */}
    </Container>
  );
};

const Container = styled.section`
  background: #daeaf6;
  display: flex;
  flex-direction: column;
  padding: 12px 14px;
  box-sizing: border-box;
  border-radius: 12px;
  flex: 5;
`;

const TodayTodoFilter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const EmptyTodoList = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 1.25rem;
  border: 1px dashed ${colors.grey["300"]};
  border-radius: 8px;

  .empty-text-1 {
    display: inline-block;
    margin-bottom: 0.25rem;
  }
`;

const TodayTodoList = styled.ul`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 12px;
`;

export default ImportantTodoSection;
