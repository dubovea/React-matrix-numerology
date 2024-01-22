import React, { useRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.scss";
import { useAppDispath } from "../../redux/store";
import { useSelector } from "react-redux";
import { setCurrentDate } from '../../redux/inputs/slice';
import { inputsSelector } from "../../redux/inputs/selectors";

const DatePickerComponent: React.FC = () => {
  const dispatch = useAppDispath();
  const { dateValue } = useSelector(inputsSelector);

  const onChangeDate = (date: Date) => {
    dispatch(setCurrentDate(date));
  };
  return (
    <DatePicker
      showIcon
      dateFormat="dd-MM-yyyy"
      selected={dateValue}
      onChange={(date: any) => onChangeDate(date)}
    />
  );
};

export default DatePickerComponent;
