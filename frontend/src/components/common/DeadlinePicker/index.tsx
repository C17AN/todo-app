import { formatDateToMMddttmmss } from "@/utils/formatter/formatDateToMMDDttmmss";
import styled from "@emotion/styled";
import colors from "material-colors";
import { ComponentProps, useState } from "react";
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
    <Container>
      <DatePickerWrapper>
        <Label>시작시간</Label>
        <DatePicker
          onChange={handleStartDateChange}
          showTimeSelect
          value={formatDateToMMddttmmss(new Date(localStartDate))}
          timeFormat="HH:mm"
          timeIntervals={30}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <Label>종료시간</Label>
        <DatePicker
          onChange={handleEndDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
        />
      </DatePickerWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const DatePickerWrapper = styled.div`
  &:first-of-type {
    margin-right: 12px;
  }
`;

const Label = styled.label`
  font-size: 12px;
  display: block;
  margin-bottom: 4px;
  color: ${colors.darkText.primary};
`;

export default DeadlinePicker;
