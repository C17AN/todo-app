import { Project } from "@/models/Project";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import colors from "material-colors";

type Props = {
  timeLeft: number;
} & Project;

const ProjectListItem = ({ title, timeLeft, goalText }: Props) => {
  return (
    <Container>
      <div className="project-title">{title}</div>
      <div className="project-goal-text">{goalText}</div>
      <div className="project-metadata-container">
        <div className="project-time-left">1개월 2일 남음</div>
        <motion.button className="project-link">
          프로젝트 바로가기
        </motion.button>
      </div>
    </Container>
  );
};

const Container = styled.li`
  padding: 12px;
  border: 1px solid ${colors.grey[300]};
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 1px 2px 6px 0px ${colors.grey[200]};

  &:last-of-type {
    margin-bottom: 0;
  }

  .project-title {
    margin-bottom: 8px;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${colors.grey[800]};
  }

  .project-metadata-container {
    display: flex;
    justify-content: space-between;

    .project-time-left {
      font-size: 0.625rem;
      color: ${colors.grey[600]};
    }
  }

  .project-goal-text {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${colors.grey[600]};
    margin-bottom: 24px;
  }

  .project-link {
    font-size: 10px;
    text-align: right;
    border-radius: 8px;
    border: 0;
    padding: 4px 6px;
  }
`;

export default ProjectListItem;
