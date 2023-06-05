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

const ImportantTodoListItem = ({
  title,
  description,
  complete,
  toggleComplete,
}: Props) => {
  return (
    <TodoListItemContainer>
      <img
        src="https://raw.githubusercontent.com/toss/tossface/main/dist/svg/u1F6A8.svg"
        alt="우선순위 높음 아이콘"
        className="urgent-item-icon"
        width={14}
        height={14}
      />
      <h3 className="todo-item-title">{title}</h3>
    </TodoListItemContainer>
  );
};

const TodoListItemContainer = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin-bottom: 12px;
  border-radius: 8px;

  &:last-of-type {
    margin-bottom: 0;
  }

  .urgent-item-icon {
    width: 14px;
    height: 14px;
  }

  .todo-item-title {
    font-size: 0.8rem;
    margin-left: 8px;
    font-weight: 700;
    color: ${colors.grey[800]};
  }
`;

export default ImportantTodoListItem;
