import Text from "@/components/common/Text";
import { Todo } from "@/models/Todo";
import colors from "material-colors";
import { useNavigate } from "react-router-dom";

type Props = {
  todoList: Todo[];
};

const ProjectSection = ({ todoList }: Props) => {
  const navigate = useNavigate();

  return (
    <section
      className="main-right-section"
      onClick={() => navigate("/project")}
    >
      <Text
        typography="sm"
        fontWeight="bold"
        as="h3"
        color={colors.darkText.primary}
      >
        프로젝트
      </Text>
      {/* <div>
        {todoList.map((todo, index) => (
          <TodoListItem key={todo.title + index} {...todo} />
        ))}
      </div> */}
    </section>
  );
};

export default ProjectSection;
