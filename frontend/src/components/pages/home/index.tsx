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
            {todoList.length > 0 && (
              <ProgressBar
                totalTodoCount={todoList.length}
                resolvedTodoCount={todoList.length}
              />
            )}
          </section>
        </section>
        <section className="main-right-section">
          <Text
            typography="sm"
            fontWeight="bold"
            as="h3"
            color={colors.darkText.primary}
          >
            프로젝트
          </Text>
          <TodayTodoList>
            {todoList.map((todo, index) => (
              <TodoListItem key={todo.title + index} {...todo} />
            ))}
          </TodayTodoList>
        </section>
      </section>
      <section className="main-middle-section">
        <Text
          typography="h3"
          fontWeight="semibold"
          color={colors.darkText.primary}
        >
          오늘의 할일
        </Text>
        <TodayTodoList>
          {todoList.map((todo, index) => (
            <TodoListItem key={todo.title + index} {...todo} />
          ))}
        </TodayTodoList>
      </section>
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
  padding: 24px 12px 0 12px;

  .main-top-section {
    gap: 10px;
    display: flex;
    margin-bottom: 1.5rem;
  }

  .main-left-section {
    flex: 6;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .main-left-bottom-section {
    background: #fce1e4;
    padding: 18px;
    border-radius: 12px;
    flex: 2;
  }

  .main-right-section {
    flex: 4;
    padding: 16px;
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
