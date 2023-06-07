import Checkbox from "@/components/common/CheckBox";
import Chip from "@/components/common/Chip";
import styled from "@emotion/styled";
import colors from "material-colors";
import { HTMLAttributes } from "react";
import { Todo } from "src/models/Todo";

type Props = {
  complete: boolean;
  toggleComplete: () => boolean;
} & Todo &
  HTMLAttributes<HTMLLIElement>;

const CompletedTodoListItem = ({
  title,
  description,
  complete,
  toggleComplete,
}: Props) => {
  const triggerVibrate = () => {
    navigator.vibrate(1000);
  };

  return (
    <TodoListItemContainer onClick={triggerVibrate}>
      <div className="completed-todo-item-container">
        <div className="todo-item-inner-container">
          <h3 className="todo-item-title">{title}</h3>
          <p className="todo-item-summary">{description}</p>
        </div>
      </div>
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

  .todo-item-container {
    display: flex;
    align-items: center;
  }

  .todo-item-inner-container {
    margin-left: 8px;

    .todo-item-title {
      margin-top: 8px;
      margin-bottom: 6px;
      font-size: 0.8rem;
      font-weight: 700;
      color: ${colors.grey[800]};
    }

    .todo-item-summary {
      font-size: 0.75rem;
    }
  }
`;

export default CompletedTodoListItem;
