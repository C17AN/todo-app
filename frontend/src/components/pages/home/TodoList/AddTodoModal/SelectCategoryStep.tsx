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

const SelectCategoryStep = (props: Props) => {
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
          onClick={() => setValue("category", "생활")}
        >
          <img
            src="https://raw.githubusercontent.com/toss/tossface/main/dist/svg/u1F3E0.svg"
            alt="생활"
          />
          생활
        </TodoCategory>
        <TodoCategory
          variants={variant}
          whileHover={"hover"}
          onClick={() => setValue("category", "학습")}
        >
          <img
            src="https://raw.githubusercontent.com/toss/tossface/main/dist/svg/u1F4D6.svg"
            alt="학습"
          />
          학습
        </TodoCategory>
        <TodoCategory
          variants={variant}
          whileHover={"hover"}
          onClick={() => setValue("category", "취미")}
        >
          <img
            src="https://raw.githubusercontent.com/toss/tossface/main/dist/svg/u1F3AE.svg"
            alt="취미"
          />
          취미
        </TodoCategory>
      </TodoCategoryContainer>
    </AnimatePresence>
  );
};

const TodoCategoryContainer = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TodoCategory = styled(motion.li)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 4rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  color: ${colors.grey[300]};

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }
`;

export default SelectCategoryStep;
