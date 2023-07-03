import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import { Todo } from "@/models/Todo";
import styled from "@emotion/styled";
import colors from "material-colors";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof Modal> {
  title: Todo["title"];
  description: Todo["description"];
}

const TodoDetailFullModal = ({
  open,
  onClose,
  title,
  description,
  ...rest
}: Props) => {
  return (
    <Modal open={open} onClose={onClose} {...rest}>
      <ModalTitle className="modal-title">{title}</ModalTitle>
      <div>{description}</div>
      <ButtonContainer>
        <Button size="tiny" onClick={() => {}}>
          완료
        </Button>
      </ButtonContainer>
    </Modal>
  );
};

const ModalTitle = styled.h3`
  color: ${colors.darkText.primary};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  button {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export default TodoDetailFullModal;
