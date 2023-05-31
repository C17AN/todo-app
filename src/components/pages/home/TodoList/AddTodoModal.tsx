import Modal from "@/components/common/Modal";
import React, { ComponentProps } from "react";

type Props = {} & ComponentProps<typeof Modal>;

const AddTodoModal = ({ open, onClose }: Props) => {
  return (
    <div>
      <Modal open={open} onClose={onClose} />
    </div>
  );
};

export default AddTodoModal;
