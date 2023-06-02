import Modal from "@/components/common/Modal";
import styled from "@emotion/styled";
import colors from "material-colors";
import { ComponentProps, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { TodoCategory as TodoCategoryType } from "@/models/Todo";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

type Props = {} & ComponentProps<typeof Modal>;

// Note: Animation Variant 역시 전역으로 관리하는게 나을지 고민해보기
const variant: Variants = {
  hover: {
    scale: 0.95,
    color: colors.grey[800],
  },
  invisible: {
    opacity: 0,
  },
  fadeOut: {
    x: "-100%",
    transition: {
      duration: 0.3,
    },
    opacity: 0,
  },
  fadeIn: {
    transition: {
      delay: 0.3,
    },
    opacity: 1,
  },
};

type AddTodoStep = "카테고리" | "상세정보";

const AddTodoModal = ({ open, onClose }: Props) => {
  const [selectedCategory, setSelectedCategory] =
    useState<TodoCategoryType | null>(null);
  const [addTodoStep, setAddTodoStep] = useState<AddTodoStep>("카테고리");

  const handleClose = () => {
    setSelectedCategory(() => null);
    setAddTodoStep(() => "카테고리");
    onClose();
  };

  const selectCategory = (category: TodoCategoryType) => {
    setSelectedCategory(() => category);
    setAddTodoStep(() => "상세정보");
  };

  return (
    <Modal open={open} onClose={handleClose} title="새로운 일정을 등록해주세요">
      <ContentContainer>
        <AnimatePresence>
          {addTodoStep === "카테고리" && (
            <TodoCategoryContainer
              variants={variant}
              animate="fadeIn"
              exit="fadeOut"
            >
              <TodoCategory
                variants={variant}
                whileHover={"hover"}
                onClick={() => selectCategory("생활")}
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
                onClick={() => selectCategory("학습")}
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
                onClick={() => selectCategory("취미")}
              >
                <img
                  src="https://raw.githubusercontent.com/toss/tossface/main/dist/svg/u1F3AE.svg"
                  alt="취미"
                />
                취미
              </TodoCategory>
            </TodoCategoryContainer>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {addTodoStep === "상세정보" && (
            <TodoInformationInputContainer
              variants={variant}
              initial="invisible"
              animate="fadeIn"
            >
              <InputContainer>
                <Input placeholder="제목을 입력해주세요" />
                <Input placeholder="내용을 입력해주세요" />
              </InputContainer>
              <Button size="cta" onClick={() => {}}>
                등록하기
              </Button>
            </TodoInformationInputContainer>
          )}
        </AnimatePresence>
      </ContentContainer>
    </Modal>
  );
};

const ContentContainer = styled.div`
  overflow: hidden;
`;

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

const TodoInformationInputContainer = styled(motion.div)``;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default AddTodoModal;
