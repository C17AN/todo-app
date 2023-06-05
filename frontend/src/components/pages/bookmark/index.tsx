import styled from "@emotion/styled";
import BookMarkItem from "./BookmarkItem";
import Button from "@/components/common/Button";

type Props = {};

const Bookmark = (props: Props) => {
  return (
    <Container>
      <div>
        <BookMarkItem />
        <Button onClick={() => {}}>북마크 추가하기</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

export default Bookmark;
