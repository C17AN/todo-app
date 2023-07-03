import Text from "@/components/common/Text";
import TodoListItem from "@/components/common/TodoListItem";
import styled from "@emotion/styled";
import colors from "material-colors";
import { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSwipeable } from "react-swipeable";

import "./calendar.scss";

type Props = {};

const Calendar = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlers = useSwipeable({
    onSwipedLeft: (e) => {
      alert("be");
    },
    onSwipedRight: () => {},
  });

  return (
    <div>
      <ReactCalendar
        defaultView="month"
        onChange={(e) => {
          console.log(e);
          setSelectedDate(e);
        }}
        {...handlers}
      />
      <Contents>
        <Text
          typography="h4"
          fontWeight="bold"
          color={colors.darkText.primary}
          className="title"
        >
          오늘의 일정
        </Text>
        <TodoListItem title="ㅇㅇ" description="dd" />
        <TodoListItem title="ㅇㅇ" description="dd" />
        <TodoListItem title="ㅇㅇ" description="dd" />
      </Contents>
    </div>
  );
};

const Contents = styled.div`
  padding: 1.25rem;

  .title {
    margin-bottom: 1rem;
  }
`;

export default Calendar;
