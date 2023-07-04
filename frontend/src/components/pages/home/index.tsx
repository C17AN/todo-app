import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import { useSession } from "@/hooks/useSession";
import { useListTodo } from "@/remotes/todo";
import styled from "@emotion/styled";
import colors from "material-colors";
import { useState } from "react";

import TodoListItem from "../../common/TodoListItem";
import ImportantTodoSection from "./ImportantTodoSection";
import MonthlyProgressSection from "./MonthlyProgressSection";
import ProgressBar from "./ProgressBar";
import ProjectSection from "./ProjectSection";
import AddTodoModal from "./TodoList/AddTodoModal";
import TodoSection from "./TodoSecion";

const Home = () => {
  const session = useSession();
  const [AddTodoModalOpen, setAddTodoModalOpen] = useState(false);

  const { data: todoList = [] } = useListTodo();

  return (
    <Container>
      <section className="main-header-section">
        <Title
          typography="h3"
          color={colors.darkText.primary}
          fontWeight="semibold"
        >
          안녕하세요 {session?.user.user_metadata.name}님,
          <br />
          오늘의 하루는 어떠셨나요?
        </Title>
        <div></div>
      </section>
      <MonthlyProgressSection />
      <section className="main-top-section">
        <section className="main-left-section">
          <ImportantTodoSection todoList={todoList} />
          <section
            className="main-left-bottom-section"
            onClick={() => setAddTodoModalOpen(() => true)}
          >
            <Text
              typography="section-title"
              fontWeight="bold"
              color={colors.darkText.primary}
              className="section-title"
            >
              새로운 계획
            </Text>
            <Text
              typography="section-description"
              fontWeight="semibold"
              color={colors.darkText.secondary}
            >
              일정, 루틴 등을 추가해보세요.
            </Text>
            {/* {todoList.length > 0 && (
              <ProgressBar
                totalTodoCount={todoList.length}
                resolvedTodoCount={todoList.length}
              />
            )} */}
          </section>
        </section>
        <ProjectSection todoList={todoList} />
      </section>
      <TodoSection todoList={todoList} />
      {/* <CTAButton size="cta" onClick={() => setAddTodoModalOpen(() => true)}>
        할일 추가하기
      </CTAButton> */}
      <AddTodoModal
        open={AddTodoModalOpen}
        onClose={() => setAddTodoModalOpen(() => false)}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 16px 0 16px;

  .main-top-section {
    gap: 10px;
    display: flex;
    margin-bottom: 10px;
    min-height: 40vh;
  }

  .main-left-section {
    max-width: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .main-left-bottom-section {
    background: #fce1e4;
    padding: 12px 14px;
    border-radius: 12px;
    flex: 2;

    .section-title {
      margin-bottom: 4px;
    }
  }

  .main-right-section {
    padding: 14px;
    background: #ddedea;
    border-radius: 12px;
    box-shadow: 1px 1px 4px 0px ${colors.grey[200]};
  }
`;

const Title = styled(Text)`
  margin-bottom: 20px;
`;

export default Home;
