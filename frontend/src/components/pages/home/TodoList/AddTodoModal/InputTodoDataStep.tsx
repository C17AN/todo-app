import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import TextArea from "@/components/common/TextArea";
import styled from "@emotion/styled";
import colors from "material-colors";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { Todo } from "@/models/Todo";
import { uploadTodo } from "@/remotes/todo";
import { useMutation } from "react-query";
import { PostgrestError } from "@supabase/supabase-js";
import { Toaster, toast } from "react-hot-toast";

type Props = {
  onClose: () => void;
};

const variant: Variants = {
  hover: {
    scale: 0.95,
    color: colors.grey[800],
  },
  invisible: {
    opacity: 0,
  },
  fadeOut: {
    opacity: 0,
  },
  fadeIn: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};

const InputTodoDataStep = ({ onClose }: Props) => {
  const { register, handleSubmit } = useFormContext();
  const { mutate, isLoading } = useMutation(uploadTodo, {
    onSuccess() {
      toast.success("새로운 일정이 등록되었어요!");
      onClose();
    },
    onError(error: PostgrestError) {
      if (error) {
        toast.error(
          "알 수 없는 오류가 발생했어요.\n잠시 뒤에 다시 시도해주세요."
        );
      }
    },
  });

  const submitTodo = async (data: Todo) => {
    const { title, description, category } = data;
    mutate({ title, description, category });
  };

  return (
    <AnimatePresence>
      <Toaster />
      <TodoInformationInputContainer
        variants={variant}
        initial="invisible"
        exit="fadeOut"
        animate="fadeIn"
      >
        <InputContainer>
          <Input
            placeholder="제목을 입력해주세요"
            label="제목"
            className="input-title"
            {...register("title")}
          />
          <TextArea
            placeholder="내용을 입력해주세요"
            label="내용"
            className="input-content"
            {...register("description")}
          />
        </InputContainer>
        <Button
          size="cta"
          onClick={handleSubmit(submitTodo)}
          loading={isLoading}
        >
          등록하기
        </Button>
      </TodoInformationInputContainer>
    </AnimatePresence>
  );
};

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

export default InputTodoDataStep;
