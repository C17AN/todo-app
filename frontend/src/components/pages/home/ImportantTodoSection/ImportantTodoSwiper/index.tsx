import { Todo } from "@/models/Todo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ImportantTodoListItem from "../ImportantTodoListItem";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  todoList: Todo[];
};

const ImportantTodoSwiper = ({ todoList }: Props) => {
  return (
    <StyledSwiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={"auto"}
      pagination={{ clickable: true }}
    >
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
  height: 100%;
  margin: 0;

  .swiper-wrapper {
    box-sizing: border-box;
  }

  .swiper-slide {
  }
`;

export default ImportantTodoSwiper;
