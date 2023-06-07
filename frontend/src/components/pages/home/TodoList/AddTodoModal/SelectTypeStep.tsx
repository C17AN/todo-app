import styled from "@emotion/styled";
import { AnimatePresence, Variants, motion } from "framer-motion";
import colors from "material-colors";
import { useFormContext } from "react-hook-form";

type Props = {};

const variant: Variants = {
  hover: {
    scale: 0.95,
    color: colors.grey[800],
  },
  invisible: {
    opacity: 0,
  },
  fadeOut: {
    opacity: 0,
  },
  fadeIn: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};

const SelectTypeStep = (props: Props) => {
  const { setValue } = useFormContext();

  return (
    <AnimatePresence>
      <TodoCategoryContainer
        variants={variant}
        exit="fadeOut"
        initial="invisible"
        animate="fadeIn"
      >
        <TodoCategory
          variants={variant}
          whileHover={"hover"}
          onClick={() => setValue("type", "일정")}
        >
          <h3 className="todo-type-name">일정</h3>
          <p className="todo-type-description">일정을 추가해보세요.</p>
        </TodoCategory>
        <TodoCategory
          variants={variant}
          whileHover={"hover"}
          onClick={() => setValue("type", "루틴")}
        >
          <h3 className="todo-type-name">루틴</h3>
          <p className="todo-type-description">일정을 추가해보세요.</p>
        </TodoCategory>
        <TodoCategory
          variants={variant}
          whileHover={"hover"}
          onClick={() => setValue("type", "프로젝트")}
        >
          <h3 className="todo-type-name">프로젝트</h3>
          <p className="todo-type-description">프로젝트를 추가해보세요.</p>
        </TodoCategory>
      </TodoCategoryContainer>
    </AnimatePresence>
  );
};

const TodoCategoryContainer = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TodoCategory = styled(motion.li)`
  padding: 1rem 0.875rem;
  border: 0.0625rem solid #e0e0e0;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  color: ${colors.darkText.primary};

  .todo-type-name {
    margin-right: auto;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .todo-type-description {
    font-size: 0.75rem;
    color: ${colors.grey[500]};
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

export default SelectTypeStep;
