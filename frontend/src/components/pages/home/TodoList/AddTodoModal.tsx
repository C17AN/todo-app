import Modal from "@/components/common/Modal";
import styled from "@emotion/styled";
import colors from "material-colors";
import { ComponentProps } from "react";
import { Variants, motion } from "framer-motion";

type Props = {} & ComponentProps<typeof Modal>;

const variant: Variants = {
  hover: {
    scale: 0.95,
    color: colors.grey[800],
  },
};

const AddTodoModal = ({ open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose} title="새로운 일정을 등록해주세요">
      <TodoCategoryContainer>
        <TodoCategory variants={variant} whileHover={"hover"}>
          <img src="/icons/icon_living.png" alt="생활" />
          생활
        </TodoCategory>
        <TodoCategory variants={variant} whileHover={"hover"}>
          <img src="/icons/icon_knowledge.png" alt="학습" />
          학습
        </TodoCategory>
        <TodoCategory variants={variant} whileHover={"hover"}>
          <img src="/icons/icon_development.png" alt="개발" />
          개발
        </TodoCategory>
        <TodoCategory variants={variant} whileHover={"hover"}>
          <img src="/icons/icon_hobby.png" alt="취미" />
          취미
        </TodoCategory>
      </TodoCategoryContainer>
      <div></div>
    </Modal>
  );
};

const TodoCategoryContainer = styled.ul`
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

export default AddTodoModal;
