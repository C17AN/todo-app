import Text from "@/components/common/Text";
import styled from "@emotion/styled";
import colors from "material-colors";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {};

const MonthlyProgressSection = (props: Props) => {
  return (
    <Container className="monthly-progress">
      <div className="section-title-container">
        <Text
          typography="section-title"
          as="h4"
          fontWeight="semibold"
          className="section-ttle"
        >
          3월의 진행률
        </Text>
        <Text typography="sm" color={colors.grey[600]}>
          40개 중 30개의 일정을 마쳤어요
        </Text>
      </div>
      <div className="progress-bar-container">
        <CircularProgressbar value={66} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fcf4dd;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 10px;
  padding: 12px;
  display: flex;
  align-items: center;

  .section-title-container {
    display: flex;
    flex-direction: column;
  }

  .section-ttle {
    margin-bottom: 4px;
  }

  .progress-bar-container {
    width: 36px;
    height: 36px;
    margin-left: auto;
  }

  .progress-title {
  }
`;

export default MonthlyProgressSection;
