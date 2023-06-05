import { Todo } from "@/models/Todo";
import { Swiper, SwiperSlide } from "swiper/react";
import ImportantTodoListItem from "../ImportantTodoListItem";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  todoList: Todo[];
};

const ImportantTodoSwiper = ({ todoList }: Props) => {
  return (
    <StyledSwiper slidesPerView={"auto"}>
      {todoList.map((todo) => (
        <SwiperSlide key={todo.title}>
          <ImportantTodoListItem {...todo} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  box-sizing: border-box;
  max-width: 100%;
  height: 100%;
  margin: 0;

  .swiper-slide {
    width: 100%;
  }
`;

export default ImportantTodoSwiper;
