import Modal from "@/components/common/Modal";
import styled from "@emotion/styled";
import colors from "material-colors";
import { ComponentProps, useState } from "react";
import { Variants, motion } from "framer-motion";
import { Todo, TodoCategory as TodoCategoryType } from "@/models/Todo";
import { useMutation } from "react-query";
import { uploadTodo } from "@/remotes/todo";
import { FormProvider, useForm } from "react-hook-form";
import SelectCategoryStep from "./SelectCategoryStep";
import InputTodoDataStep from "./InputTodoDataStep";

type Props = {} & ComponentProps<typeof Modal>;

// Note: Animation Variant 역시 전역으로 관리하는게 나을지 고민해보기

type AddTodoStep = "카테고리" | "상세정보";

const AddTodoModal = ({ open, onClose }: Props) => {
  const { data, mutate } = useMutation("uploadTodo", uploadTodo);
  const formMethods = useForm<Todo>();
  const category = formMethods.watch("category");
  console.log(category);

  const handleClose = () => {
    formMethods.reset();
    // setSelectedCategory(() => null);
    onClose();
  };

  const handleUploadTodo = async () => {
    // if (selectedCategory === null) {
    //   return;
    // }
    // mutate({});
  };

  return (
    <Modal open={open} onClose={handleClose} title="새로운 일정을 등록해주세요">
      <FormProvider {...formMethods}>
        <ContentContainer>
          {!category ? <SelectCategoryStep /> : <InputTodoDataStep />}
          {/* {category && <SelectCategoryStep />} */}
        </ContentContainer>
      </FormProvider>
    </Modal>
  );
};

const ContentContainer = styled.div`
  overflow: hidden;
`;

export default AddTodoModal;
