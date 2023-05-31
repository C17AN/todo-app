import { Todo } from "src/models/Todo";
import TodoListItem from "./TodoList/todo-list-item";
import styled from "@emotion/styled";
import Text from "@/components/common/Text";

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
  return (
    <div>
      <Text typography="h2">
        안녕하세요 OO님,
        <br />
        오늘의 하루는 어떠셨나요?
      </Text>
      <div></div>
      {TODO_LIST.map((todo, index) => (
        <TodoListItem key={todo.title + index} {...todo} />
      ))}
    </div>
  );
};

const Title = styled.h2`
  font-size: 22px;
`;

export default Home;
