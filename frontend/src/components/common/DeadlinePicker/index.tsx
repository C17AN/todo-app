import React, { ComponentProps, useState } from "react";
import DatePicker from "react-datepicker";

import "./DeadlinePicker.scss";

interface Props extends ComponentProps<typeof DatePicker> {
  onStartDateChange: () => {};
  onEndDateChange: () => {};
}

const DeadlinePicker = ({
  onStartDateChange,
  onEndDateChange,
  ...rest
}: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = () => {};

  const handleEndDateChange = () => {};

  return (
    <>
      <DatePicker
        onChange={onStartDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
      />
      <DatePicker
        onChange={onEndDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
      />
    </>
  );
};

export default DeadlinePicker;
