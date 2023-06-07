import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Props = {};

const Calendar = (props: Props) => {
  return (
    <div>
      <ReactCalendar defaultView="month" />
    </div>
  );
};

export default Calendar;
