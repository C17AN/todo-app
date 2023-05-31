import { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { Todo } from "src/models/Todo";

type Props = Todo & HTMLAttributes<HTMLLIElement>;

const TodoListItem = ({ title, description }: Props) => {
  return (
    <TodoListItemContainer>
      <h3>{title}</h3>
      <div>{description}</div>
    </TodoListItemContainer>
  );
};

const TodoListItemContainer = styled.li`
  padding: 8px 12px;
  list-style: none;
`;

export default TodoListItem;
