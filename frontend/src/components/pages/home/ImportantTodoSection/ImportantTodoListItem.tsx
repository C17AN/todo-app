import { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { Todo } from "src/models/Todo";
import colors from "material-colors";
import Checkbox from "@/components/common/CheckBox";

type Props = {
  toggleComplete: () => boolean;
} & Todo &
  HTMLAttributes<HTMLLIElement>;

const ImportantTodoListItem = ({
  title,
  description,
  complete,
  toggleComplete,
}: Props) => {
  return (
    <TodoListItemContainer>
      <div className="todo-item-title-container">
        <img
          src="https://raw.githubusercontent.com/toss/tossface/main/dist/svg/u1F6A8.svg"
          alt="우선순위 높음 아이콘"
          className="urgent-item-icon"
          width={14}
          height={14}
        />
        <h3 className="todo-item-title">{title}</h3>
      </div>
      <p className="todo-item-description">{description}</p>
    </TodoListItemContainer>
  );
};

const TodoListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 12px;
  border-radius: 8px;
  height: 100%;
  padding: 12px;
  background-color: #fff;

  &:last-of-type {
    margin-bottom: 0;
  }

  .urgent-item-icon {
    width: 14px;
    height: 14px;
  }

  .todo-item-title-container {
    display: flex;
    margin-bottom: 8px;
  }

  .todo-item-title {
    font-size: 0.8rem;
    margin-left: 8px;
    font-weight: 700;
    color: ${colors.grey[800]};
  }

  .todo-item-description {
    font-size: 0.75rem;
  }
`;

export default ImportantTodoListItem;
