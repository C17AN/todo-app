import styled from "@emotion/styled";
import BookMarkItem from "./BookmarkItem";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";

type Props = {};

const Bookmark = (props: Props) => {
  return (
    <Container>
      <Text fontWeight="bold" typography="h3" className="section-title">
        북마크
      </Text>
      <BookMarkItem />
      <Button size="cta" onClick={() => {}} id="add-bookmark-button">
        북마크 추가하기
      </Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .section-title {
    margin-bottom: 4px;
  }

  #add-bookmark-button {
    margin-top: auto;
  }
`;

export default Bookmark;
