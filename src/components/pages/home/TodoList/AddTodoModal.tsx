import Modal from "@/components/common/Modal";
import styled from "@emotion/styled";
import { ComponentProps } from "react";
import colors from "material-colors";
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
    <Modal
      open={open}
      onClose={onClose}
      title="새로운 일정을 등록해주세요"
      confirmButton
    >
      <TodoCategoryContainer>
        <TodoCategory variants={variant} whileHover={"hover"}>
          생활
        </TodoCategory>
        <TodoCategory variants={variant} whileHover={"hover"}>
          학습
        </TodoCategory>
        <TodoCategory variants={variant} whileHover={"hover"}>
          개발
        </TodoCategory>
        <TodoCategory variants={variant} whileHover={"hover"}>
          교양
        </TodoCategory>
      </TodoCategoryContainer>
      <div></div>
    </Modal>
  );
};

const TodoCategoryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const TodoCategory = styled(motion.li)`
  text-align: center;
  padding: 1.2rem 0;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  color: ${colors.grey[300]};
`;

export default AddTodoModal;
