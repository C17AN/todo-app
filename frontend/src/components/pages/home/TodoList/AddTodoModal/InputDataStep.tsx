import Button from "@/components/common/Button";
import DeadlinePicker from "@/components/common/DeadlinePicker";
import Input from "@/components/common/Input";
import TagSelect from "@/components/common/TagSelect";
import TextArea from "@/components/common/TextArea";
import { Todo } from "@/models/Todo";
import { uploadTodo } from "@/remotes/todo";
import styled from "@emotion/styled";
import { PostgrestError } from "@supabase/supabase-js";
import { AnimatePresence, Variants, motion } from "framer-motion";
import colors from "material-colors";
import { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useFormContext } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useMutation } from "react-query";

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

const InputDataStep = ({ onClose }: Props) => {
  const { register, handleSubmit, setValue, watch } = useFormContext<Todo>();
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

  // Note:
  useEffect(() => {
    register("startTime");
    register("deadline");
  }, []);

  const [startTime, deadline] = watch(["startTime", "deadline"]);

  const submitTodo = async (data: Todo) => {
    const { title, type, description, category } = data;
    mutate({ title, type, description, category });
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
          <Input className="input-deadline" {...register("deadline")}>
            <DeadlinePicker
              locale={"ko-KR"}
              startDate={startTime}
              endDate={deadline}
              onStartDateChange={(value) => setValue("startTime", value)}
              onChange={(e) => console.log(e)}
              placeholderText="마감 일정을 정해주세요"
            />
          </Input>
          <Input
            placeholder="오늘의 할일 제목을 입력해주세요"
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
          <TextArea
            placeholder="우선순위를 입력해주세요"
            label="우선순위"
            className="input-content"
            {...register("description")}
          />
          {/* <TextArea
            placeholder="부여할 포인트를 입력해주세요"
            label="포인트"
            className="input-content"
            {...register("point")}
          /> */}
          <Input label="태그" className="input-tag" {...register("tag")}>
            <TagSelect />
          </Input>
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

  .input-deadline {
    margin-bottom: 1rem;
  }

  .input-title {
    margin-bottom: 1rem;
  }

  .input-content {
    margin-bottom: 1rem;
  }
`;

export default InputDataStep;
