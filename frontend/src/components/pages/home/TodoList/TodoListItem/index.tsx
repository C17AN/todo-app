import { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { Todo } from "src/models/Todo";
import colors from "material-colors";
import Checkbox from "@/components/common/CheckBox";

type Props = {
  complete: boolean;
  toggleComplete: () => boolean;
} & Todo &
  HTMLAttributes<HTMLLIElement>;

const TodoListItem = ({
  title,
  description,
  complete,
  toggleComplete,
}: Props) => {
  return (
    <TodoListItemContainer>
      <Checkbox />
      <h3 className="todo-item-title">{title}</h3>
      <p className="todo-item-summary">{description}</p>
    </TodoListItemContainer>
  );
};

const TodoListItemContainer = styled.li`
  padding: 8px 0;
  list-style: none;
  background-color: ${colors.grey[50]};
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 8px;

  .todo-item-title {
    margin-bottom: 6px;
    font-size: 0.8rem;
    font-weight: 700;
    color: ${colors.grey[800]};
  }

  .todo-item-summary {
    font-size: 0.75rem;
  }
`;

export default TodoListItem;
