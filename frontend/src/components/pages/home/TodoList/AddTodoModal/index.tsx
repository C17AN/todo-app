import Modal from "@/components/common/Modal";
import styled from "@emotion/styled";
import colors from "material-colors";
import { ComponentProps, useState } from "react";
import { Variants, motion } from "framer-motion";
import { TodoCategory as TodoCategoryType } from "@/models/Todo";
import { useMutation } from "react-query";
import { uploadTodo } from "@/remotes/todo";
import { FormProvider, useForm } from "react-hook-form";
import CategoryStep from "./SelectCategoryStep";
import SelectCategoryStep from "./SelectCategoryStep";

type Props = {} & ComponentProps<typeof Modal>;

// Note: Animation Variant 역시 전역으로 관리하는게 나을지 고민해보기

type AddTodoStep = "카테고리" | "상세정보";

const AddTodoModal = ({ open, onClose }: Props) => {
  const [selectedCategory, setSelectedCategory] =
    useState<TodoCategoryType | null>(null);
  const [addTodoStep, setAddTodoStep] = useState<AddTodoStep>("카테고리");
  const { data, mutate } = useMutation("uploadTodo", uploadTodo);
  const formMethods = useForm();

  const handleClose = () => {
    setSelectedCategory(() => null);
    setAddTodoStep(() => "카테고리");
    onClose();
  };

  const handleUploadTodo = async () => {
    if (selectedCategory === null) {
      return;
    }
    // mutate({});
  };

  const selectCategory = (category: TodoCategoryType) => {
    setSelectedCategory(() => category);
    setAddTodoStep(() => "상세정보");
  };

  return (
    <Modal open={open} onClose={handleClose} title="새로운 일정을 등록해주세요">
      <FormProvider {...formMethods}>
        <ContentContainer>
          {addTodoStep === "카테고리" && <CategoryStep />}
          {addTodoStep === "상세정보" && <SelectCategoryStep />}
        </ContentContainer>
      </FormProvider>
    </Modal>
  );
};

const ContentContainer = styled.div`
  overflow: hidden;
`;

const TodoInformationInputContainer = styled(motion.div)``;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  .input-title {
    margin-bottom: 0.5rem;
  }

  .input-content {
    margin-bottom: 1rem;
  }
`;

export default AddTodoModal;
