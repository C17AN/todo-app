import { formatDateToMMddttmmss } from "@/utils/formatter/formatDateToMMDDttmmss";
import React, { ComponentProps, useState } from "react";
import DatePicker from "react-datepicker";

import "./DeadlinePicker.scss";

interface Props extends ComponentProps<typeof DatePicker> {
  onStartDateChange: (value: Date) => {};
  onEndDateChange: (value: Date) => {};
}

const DeadlinePicker = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  ...rest
}: Props) => {
  const [localStartDate, setLocalStartDate] = useState(startDate || new Date());
  const [localEndDate, setLocalEndDate] = useState(endDate || new Date());

  const handleStartDateChange = (selectedDate: Date) => {
    setLocalStartDate(() => selectedDate);
    onStartDateChange(selectedDate);
  };

  const handleEndDateChange = (selectedDate: Date) => {
    setLocalEndDate(() => selectedDate);
    onEndDateChange(selectedDate);
  };

  return (
    <>
      <DatePicker
        onChange={handleStartDateChange}
        showTimeSelect
        value={formatDateToMMddttmmss(new Date(localStartDate))}
        timeFormat="HH:mm"
        timeIntervals={30}
      />
      <DatePicker
        onChange={handleEndDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
      />
    </>
  );
};

export default DeadlinePicker;
