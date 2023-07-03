import React, { ComponentProps } from "react";
import DatePicker from "react-datepicker";

import "./DeadlinePicker.scss";

interface Props extends ComponentProps<typeof DatePicker> {}

const DeadlinePicker = ({ ...rest }: Props) => {
  return <DatePicker {...rest} />;
};

export default DeadlinePicker;
