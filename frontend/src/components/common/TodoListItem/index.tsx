import Checkbox from "@/components/common/CheckBox";
import Chip from "@/components/common/Chip";
import { usePriorityChipMetadata } from "@/hooks/usePriorityChipMetadata";
import { Priority, type Todo } from "@/models/Todo";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import colors from "material-colors";
import { HTMLAttributes, useState } from "react";
import { useSwipeable } from "react-swipeable";

import TodoDetailFullModal from "./TodoDetailFullModal";

type Props = {
  complete: boolean;
  toggleComplete?: () => boolean;
} & Todo &
  HTMLAttributes<HTMLLIElement>;

const TodoListItem = ({
  title,
  description,
  priority = Priority.매우_낮음,
  toggleComplete,
}: Props) => {
  const [completeOverlayVisible, setCompleteOverlayVisible] = useState(false);
  const [todoDetailFullModalOpen, setTodoDetailFullModalOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: (e) => {
      setCompleteOverlayVisible(true);
    },
    onSwipedRight: () => setCompleteOverlayVisible(false),
  });

  const chipMetadata = usePriorityChipMetadata(priority);

  const handleClick = () => {
    setTodoDetailFullModalOpen(true);
  };

  return (
    <>
      <TodoListItemContainer onClick={handleClick} {...handlers}>
        <div className="todo-item-container">
          {/* <Checkbox onChange={toggleComplete} /> */}
          <div className="todo-item-inner-container">
            <div className="todo-item-top-area">
              <div className="todo-item-top-container">
                <div className="todo-item-countdown">마감까지 53분</div>
                <div className="todo-item-chip-container">
                  {priority && (
                    <Chip
                      backgroundColor={chipMetadata?.backgroundColor}
                      color={chipMetadata?.color}
                    >
                      {chipMetadata?.text}
                    </Chip>
                  )}
                  <Chip>진행중</Chip>
                </div>
              </div>
              <h3 className="todo-item-title">{title}</h3>
              <p className="todo-item-summary">{description}</p>
            </div>
            <div className="todo-item-bottom-area">
              <div>SK Supex Hall</div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {completeOverlayVisible && (
            <motion.div
              animate={completeOverlayVisible && { opacity: 1, x: 0 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="todo-item-complete-overlay"
            >
              <span className="todo-item-compete-overlay-text">
                <div className="todo-item-compete-overlay-title">완료 확인</div>
                <div className="todo-item-compete-overlay-description">
                  이 일정을 정말 마무리할까요?
                </div>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </TodoListItemContainer>
      <TodoDetailFullModal
        open={todoDetailFullModalOpen}
        title={title}
        onClose={() => {
          setTodoDetailFullModalOpen(() => false);
        }}
      />
    </>
  );
};

const TodoListItemContainer = styled.li`
  list-style: none;
  background-color: ${colors.white};
  padding-top: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  position: relative;
  width: 100%;
  border: 1px solid ${colors.grey[200]};

  .todo-item-container {
    display: flex;
    align-items: center;
  }

  .todo-item-inner-container {
    width: 100%;

    .todo-item-top-container {
      display: flex;
      align-items: center;

      .chip {
        margin-left: auto;
      }
    }

    .todo-item-countdown {
      font-size: 0.625rem;
      color: ${colors.grey[600]};
      font-weight: 300;
    }

    .todo-item-title {
      margin-top: 4px;
      margin-bottom: 8px;
      font-size: 0.8rem;
      font-weight: 700;
      color: ${colors.grey[800]};
    }

    .todo-item-summary {
      font-size: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .todo-item-chip-container {
      margin-left: auto;

      .chip {
        margin-right: 10px;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }

    .todo-item-top-area {
      padding: 0 12px;
    }

    .todo-item-bottom-area {
      display: flex;
      align-items: center;
      font-size: 0.675rem;
      padding: 8px 0 8px 12px;
      border-top: 1px solid ${colors.grey[300]};
      color: ${colors.grey[600]};
    }
  }

  .todo-item-complete-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    backdrop-filter: blur(12px);
    transition: 0.2s ease-in-out all;

    .todo-item-compete-overlay-text {
      font-weight: 600;
      color: ${colors.darkText.primary};

      .todo-item-compete-overlay-title {
        margin-bottom: 6px;
        font-size: 0.75rem;
      }

      .todo-item-compete-overlay-description {
        font-size: 0.625rem;
        color: ${colors.grey[500]};
      }
    }
  }
`;

export default TodoListItem;
