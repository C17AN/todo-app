import { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { Todo } from "src/models/Todo";
import colors from "material-colors";

type Props = Todo & HTMLAttributes<HTMLLIElement>;

const TodoListItem = ({ title, description }: Props) => {
  return (
    <TodoListItemContainer>
      <h3 className="todo-item-title">{title}</h3>
      <p className="todo-item-summary">{description}</p>
    </TodoListItemContainer>
  );
};

const TodoListItemContainer = styled.li`
  padding: 8px 0;
  list-style: none;

  .todo-item-title {
    margin-bottom: 6px;
    font-size: 1rem;
    font-weight: 700;
    color: ${colors.grey[800]};
  }

  .todo-item-summary {
    font-size: 0.875rem;
  }
`;

export default TodoListItem;
