import React from "react";
import styled from "styled-components";
import { RangePickerProps } from "antd/es/date-picker/interface";
import { RangePickerState } from "antd/es/date-picker/RangePicker";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

interface rangePickerProps extends RangePickerProps, RangePickerState {
  block?: boolean;
}
const rangePicker = styled(({ ...props }: rangePickerProps) => (
  <RangePicker {...props} />
))`
  ${({ block }) => block && `display:block`};
`;

export default rangePicker;
