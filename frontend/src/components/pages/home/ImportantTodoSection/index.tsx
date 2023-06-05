import Text from "@/components/common/Text";
import { Todo } from "@/models/Todo";
import styled from "@emotion/styled";
import colors from "material-colors";
import { useState } from "react";
import ImportantTodoListItem from "./ImportantTodoListItem";

type Props = {
  todoList: Todo[];
};

type SortByCondition = "우선순위" | "마감일";

const ImportantTodoSection = ({ todoList }: Props) => {
  const toggleSortByCondition = () => {
    if (sortByCondition === "마감일") setSortByCondition(() => "우선순위");
    else if (sortByCondition === "우선순위") setSortByCondition(() => "마감일");
  };

  const [sortByCondition, setSortByCondition] =
    useState<SortByCondition>("우선순위");

  return (
    <Container className="main-left-top-section">
      {/* <Content> */}
      <TodayTodoFilter>
        <Text
          typography="sm"
          fontWeight="bold"
          as="h4"
          color={colors.darkText.primary}
        >
          중요한 일정
        </Text>
        <button
          className="sortby-condition-button"
          onClick={toggleSortByCondition}
        >
          {sortByCondition === "우선순위" ? (
            <div>우선순위</div>
          ) : (
            <div>마감일</div>
          )}
        </button>
      </TodayTodoFilter>

      {todoList.length > 0 ? (
        <TodayTodoList>
          {todoList.map((todo, index) => (
            <ImportantTodoListItem key={todo.title + index} {...todo} />
          ))}
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
  padding: 14px 18px;
  border-radius: 12px;
  flex: 5;
`;

const Content = styled.div`
  background: ${colors.grey[50]};
  padding: 12px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const TodayTodoFilter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  .sortby-condition-button {
    margin-left: auto;
    font-size: 0.625rem;
    min-width: 3rem;
    border: 0;
    outline: 0;
    padding: 4px 8px;
    font-weight: 600;
    border-radius: 4px;
    background: ${colors.grey["200"]};
    color: ${colors.darkText.secondary};
  }
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
  margin: 1rem 0 1rem 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  border-radius: 12px;
`;

export default ImportantTodoSection;
