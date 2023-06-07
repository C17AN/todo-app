import Modal from "@/components/common/Modal";
import { Todo, TodoCategory as TodoCategoryType } from "@/models/Todo";
import { uploadTodo } from "@/remotes/todo";
import styled from "@emotion/styled";
import { Variants, motion } from "framer-motion";
import colors from "material-colors";
import { ComponentProps, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import InputTodoDataStep from "./InputTodoDataStep";
import SelectCategoryStep from "./SelectCategoryStep";

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
          {!category ? (
            <SelectCategoryStep />
          ) : (
            <InputTodoDataStep onClose={handleClose} />
          )}
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
