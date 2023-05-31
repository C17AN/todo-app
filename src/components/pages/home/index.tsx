import { Todo } from "src/models/Todo";
import TodoListItem from "./TodoList/TodoListItem";
import styled from "@emotion/styled";
import Text from "@/components/common/Text";
import AddTodoModal from "./TodoList/AddTodoModal";
import { useState } from "react";
import Button from "@/components/common/Button";

type Props = {};

const TODO_LIST: Todo[] = [
  {
    title: "태스크 1",
    description: "태스크 1 내용입니다.",
  },
  {
    title: "태스크 2",
    description: "태스크 2 내용입니다.",
  },
  {
    title: "태스크 3",
    description: "태스크 3 내용입니다.",
  },
];

const Home = (props: Props) => {
  const [AddTodoModalOpen, setAddTodoModalOpen] = useState(true);

  return (
    <Container>
      <Title typography="h2">
        안녕하세요 OO님,
        <br />
        오늘의 하루는 어떠셨나요?
      </Title>
      <Text typography="h3" as="h3">
        오늘의 할 일
      </Text>
      {TODO_LIST.map((todo, index) => (
        <TodoListItem key={todo.title + index} {...todo} />
      ))}
      <AddTodoModal
        open={AddTodoModalOpen}
        onClose={() => setAddTodoModalOpen(() => false)}
      />
      <CTAButton size="cta" onClick={() => setAddTodoModalOpen(() => true)}>
        할일 추가하기
      </CTAButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 2.4rem 1.6rem;
`;

const Title = styled(Text)`
  margin-bottom: 20px;
`;

const CTAButton = styled(Button)`
  margin-top: auto;
  position: sticky;
  bottom: 0;
`;

export default Home;
