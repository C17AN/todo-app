import styled from "@emotion/styled";
import colors from "material-colors";

type Props = {
  totalTodoCount: number;
  resolvedTodoCount: number;
};

const ProgressBar = ({ resolvedTodoCount, totalTodoCount }: Props) => {
  return (
    <ProgressBarContainer
      totalTodoCount={totalTodoCount}
      resolvedTodoCount={resolvedTodoCount}
    >
      <Progress
        totalTodoCount={totalTodoCount}
        resolvedTodoCount={resolvedTodoCount}
      />
      <TotalProgressCount>{totalTodoCount}개</TotalProgressCount>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div<{
  totalTodoCount: number;
  resolvedTodoCount: number;
}>`
  position: relative;
  width: 100%;
  border-radius: 18px;
  background-color: ${colors.grey["300"]};
`;

const TotalProgressCount = styled.div`
  position: absolute;
  right: 0;
  font-size: 0.5rem;
  top: 0.75rem;
  color: ${colors.darkText.secondary};
`;

const Progress = styled.div<{
  totalTodoCount: number;
  resolvedTodoCount: number;
}>`
  height: 8px;
  position: relative;
  transition: 0.2s ease-in-out width;
  width: ${({ resolvedTodoCount, totalTodoCount }) =>
    (resolvedTodoCount / totalTodoCount) * 100}%;
  border-radius: 18px;
  background-color: ${colors.blue["300"]};
`;

export default ProgressBar;
