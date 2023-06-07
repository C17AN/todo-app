import styled from "@emotion/styled";
import colors from "material-colors";

type Props = {};

const BookMarkItem = (props: Props) => {
  return (
    <Container>
      <div className="bookmark-title">네이버 바로가기</div>
      <p className="created-date-text">추가된 날짜 : 2023년 6월 5일</p>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 8px;
  padding: 12px;
  background-color: ${colors.grey[50]};
  box-shadow: 1px 1px 2px 2px ${colors.grey[50]};

  .bookmark-title {
    margin-bottom: 8px;
    font-weight: 700;
    color: ${colors.grey[700]};
  }

  .created-date-text {
    font-size: 0.75rem;
    width: auto;
    margin-left: auto;
    color: ${colors.darkText.secondary};
  }
`;

export default BookMarkItem;
