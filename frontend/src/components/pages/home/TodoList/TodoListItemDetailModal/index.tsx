import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import { Todo } from "@/models/Todo";

type Props = {
  open: boolean;
  onClose: () => void;
  todoData: Todo;
};

const TodoListItemDetailModal = ({ open, onClose, todoData }: Props) => {
  return (
    <Modal open={open} onClose={onClose} confirmButton>
      <div>내 일정 정보를 입력해주세요</div>
      <div>{todoData.title}</div>
      <div>{todoData.description}</div>
      <div>
        <Button onClick={() => {}}>삭제</Button>
        <Button onClick={() => {}}>수정</Button>
        <Button onClick={() => {}}>완료</Button>
      </div>
    </Modal>
  );
};

export default TodoListItemDetailModal;
