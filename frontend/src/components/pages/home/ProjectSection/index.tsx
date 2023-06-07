import Text from "@/components/common/Text";
import { Todo } from "@/models/Todo";
import colors from "material-colors";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

type Props = {
  todoList: Todo[];
};

const ProjectSection = ({ todoList }: Props) => {
  const navigate = useNavigate();

  return (
    <Container
      className="main-right-section"
      onClick={() => navigate("/project")}
    >
      <Text
        typography="section-title"
        fontWeight="bold"
        as="h3"
        color={colors.darkText.primary}
        className="main-right-section__title"
      >
        프로젝트
      </Text>
      <Text typography="sm" as="h3" color={colors.grey[600]}>
        프로젝트 일정을
        <br />
        관리해 보세요
      </Text>

      {/* <div>
        {todoList.map((todo, index) => (
          <TodoListItem key={todo.title + index} {...todo} />
        ))}
      </div> */}
    </Container>
  );
};

const Container = styled.section`
  flex: 4;
  padding: 16px;
  background: #edf2fb;
  border-radius: 12px;
  box-shadow: 1px 1px 4px 0px ${colors.grey[200]};

  .main-right-section__title {
    margin-bottom: 0.5rem;
  }
`;

export default ProjectSection;
