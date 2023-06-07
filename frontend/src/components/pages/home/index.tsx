import TodoListItem from "./TodoList/TodoListItem";
import styled from "@emotion/styled";
import Text from "@/components/common/Text";
import AddTodoModal from "./TodoList/AddTodoModal";
import Button from "@/components/common/Button";
import ProgressBar from "./ProgressBar";
import colors from "material-colors";
import { useState } from "react";
import { useSession } from "@/hooks/useSession";
import { useListTodo } from "@/remotes/todo";
import ImportantTodoSection from "./ImportantTodoSection";
import MonthlyProgressSection from "./MonthlyProgressSection";
import ProjectSection from "./ProjectSection";
import TodoSection from "./TodoSecion";

const Home = () => {
  const session = useSession();
  const [AddTodoModalOpen, setAddTodoModalOpen] = useState(false);

  const { data: todoList = [] } = useListTodo();

  return (
    <Container>
      <Title
        typography="h3"
        color={colors.darkText.primary}
        fontWeight="semibold"
      >
        안녕하세요 {session?.user.user_metadata.name}님,
        <br />
        오늘의 하루는 어떠셨나요?
      </Title>
      <MonthlyProgressSection />
      <section className="main-top-section">
        <section className="main-left-section">
          <ImportantTodoSection todoList={todoList} />
          <section className="main-left-bottom-section">
            <Text
              typography="section-title"
              fontWeight="bold"
              color={colors.darkText.primary}
              className="section-title"
            >
              레포트
            </Text>
            <Text
              typography="section-description"
              fontWeight="semibold"
              color={colors.darkText.secondary}
            >
              내 생활 패턴이 적절한지 파악해요
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
      <CTAButton size="cta" onClick={() => setAddTodoModalOpen(() => true)}>
        할일 추가하기
      </CTAButton>
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
    margin-bottom: 1.5rem;
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
    max-width: 40%;
    padding: 14px;
    background: #ddedea;
    border-radius: 12px;
    box-shadow: 1px 1px 4px 0px ${colors.grey[200]};
  }
`;

const Title = styled(Text)`
  margin-bottom: 20px;
`;

const TodayTodoList = styled.ul`
  margin: 1rem 0 1rem 0;
`;

const CTAButton = styled(Button)`
  margin-top: auto;
  display: block;
  position: sticky;
  bottom: 0;
`;

export default Home;
