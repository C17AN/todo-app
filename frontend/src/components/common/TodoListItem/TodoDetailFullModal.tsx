import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import { usePriorityChipMetadata } from "@/hooks/usePriorityChipMetadata";
import { Todo } from "@/models/Todo";
import styled from "@emotion/styled";
import colors from "material-colors";
import { ComponentProps } from "react";

import Chip from "../Chip";

interface Props extends ComponentProps<typeof Modal> {
  title: Todo["title"];
  description: Todo["description"];
  priority: Todo["priority"];
}

const TodoDetailFullModal = ({
  open,
  onClose,
  title,
  description,
  priority,
  ...rest
}: Props) => {
  const chipMetadata = usePriorityChipMetadata(priority);

  return (
    <Modal open={open} onClose={onClose} {...rest}>
      <TitleContainer>
        <ModalTitle className="modal-title">{title}</ModalTitle>
        {priority && <Chip>{chipMetadata?.text}</Chip>}
      </TitleContainer>
      <div>{description}</div>
      <ButtonContainer>
        <Button size="tiny" onClick={() => {}}>
          완료
        </Button>
      </ButtonContainer>
    </Modal>
  );
};

const TitleContainer = styled.div`
  display: flex;
`;

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
