import FullModal from "@/components/common/FullModal";
import Modal from "@/components/common/Modal";
import { Todo } from "@/models/Todo";
import { uploadTodo } from "@/remotes/todo";
import styled from "@emotion/styled";
import { ComponentProps, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import InputTodoDataStep from "./InputDataStep";
import SelectTypeStep from "./SelectTypeStep";

type Props = {} & ComponentProps<typeof Modal>;

// Note: Animation Variant 역시 전역으로 관리하는게 나을지 고민해보기

const AddTodoModal = ({ open, onClose }: Props) => {
  const formMethods = useForm<Todo>();
  const type = formMethods.watch("type");

  const handleClose = () => {
    formMethods.reset();
    onClose();
  };

  return (
    <Modal
      type={type && "full"}
      open={open}
      onClose={handleClose}
      title={!type ? "새로운 일정을 등록해주세요" : "오늘 할 일을 입력해주세요"}
    >
      <FormProvider {...formMethods}>
        <ContentContainer>
          {!type ? (
            <SelectTypeStep />
          ) : (
            <InputTodoDataStep onClose={handleClose} />
          )}
        </ContentContainer>
      </FormProvider>
    </Modal>
  );
};

const ContentContainer = styled.div`
  overflow: hidden;
`;

const CustomModal = styled(Modal)``;

export default AddTodoModal;
