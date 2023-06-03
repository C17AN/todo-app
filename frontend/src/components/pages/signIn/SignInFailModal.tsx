import Modal from "@/components/common/Modal";
import { ComponentProps } from "react";

const SignInFailModal = ({ open, onClose }: ComponentProps<typeof Modal>) => {
  return (
    <Modal open={open} onClose={onClose}>
      SignInFailModal
    </Modal>
  );
};

export default SignInFailModal;
