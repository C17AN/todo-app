import { Todo } from "src/models/Todo";
import TodoListItem from "./TodoList/TodoListItem";
import styled from "@emotion/styled";
import Text from "@/components/common/Text";
import AddTodoModal from "./TodoList/AddTodoModal";
import { useState } from "react";
import Button from "@/components/common/Button";
import ProgressBar from "./ProgressBar";
import colors from "material-colors";

type Props = {};

const TODO_LIST: Todo[] = [
  {
    title: "태스크 1",
    description: "태스크 1 내용입니다.",
    priority: 0,
  },
  {
    title: "태스크 2",
    description: "태스크 2 내용입니다.",
    priority: 1,
  },
  {
    title: "태스크 3",
    description: "태스크 3 내용입니다.",
    priority: 2,
  },
];

const MISSED_TODO_LIST: Todo[] = [
  {
    title: "태스크 1",
    description: "태스크 1 내용입니다.",
    priority: 0,
  },
  {
    title: "태스크 2",
    description: "태스크 2 내용입니다.",
    priority: 1,
  },
  {
    title: "태스크 3",
    description: "태스크 3 내용입니다.",
    priority: 2,
  },
];

type SortByCondition = "우선순위" | "마감일";

const Home = (props: Props) => {
  const [AddTodoModalOpen, setAddTodoModalOpen] = useState(true);
  const [sortByCondition, setSortByCondition] =
    useState<SortByCondition>("우선순위");

  const toggleSortByCondition = () => {
    if (sortByCondition === "마감일") setSortByCondition(() => "우선순위");
    else if (sortByCondition === "우선순위") setSortByCondition(() => "마감일");
  };

  return (
    <Container>
      <Title typography="h2">
        안녕하세요 OO님,
        <br />
        오늘의 하루는 어떠셨나요?
      </Title>
      <TodayTodoFilter>
        <Text typography="h3" as="h3" className="section-title">
          오늘 해야할 일
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
      <ProgressBar totalTodoCount={10} resolvedTodoCount={7} />
      <TodayTodoList>
        {TODO_LIST.map((todo, index) => (
          <TodoListItem key={todo.title + index} {...todo} />
        ))}
      </TodayTodoList>
      <Text typography="h3" as="h3" className="section-title">
        잠깐, 잊지 않으셨겠죠?
      </Text>
      <TodayTodoList>
        {MISSED_TODO_LIST.map((todo, index) => (
          <TodoListItem key={todo.title + index} {...todo} />
        ))}
      </TodayTodoList>
      <AddTodoModal
        open={AddTodoModalOpen}
        onClose={() => setAddTodoModalOpen(() => false)}
      />
      {/* <CTAButton size="cta" onClick={() => setAddTodoModalOpen(() => true)}>
        할일 추가하기
      </CTAButton> */}
    </Container>
  );
};

const Container = styled.div`
  padding: 2.4rem 1.2rem;

  .section-title {
    margin-bottom: 0.875rem;
  }
`;

const Title = styled(Text)`
  margin-bottom: 20px;
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

const TodayTodoList = styled.ul`
  margin: 1rem 0 2rem 0;
`;

const CTAButton = styled(Button)`
  margin-top: auto;
  display: block;
  position: sticky;
  bottom: 0;
`;

export default Home;
