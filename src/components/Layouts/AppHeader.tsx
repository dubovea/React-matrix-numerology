import { Layout, DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { useSelector } from "react-redux";
import { inputsSelector } from "../../redux/inputs/selectors";
import { setCurrentDate } from "../../redux/inputs/slice";
import dayjs from "dayjs";
import { useAppDispath } from "../../redux/store";

const { Header } = Layout;

const AppHeader = () => {
  const dispatch = useAppDispath();
  const { dateValue } = useSelector(inputsSelector);
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    // dispatch(setCurrentDate(date?.$d ?? new Date()));
    dispatch(setCurrentDate(new Date()));
  };

  const dateFormat = "DD.MM.YYYY";
  return (
    <Header
      style={{
        textAlign: "center",
        height: 60,
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "black",
      }}
    >
      <DatePicker onChange={onChange} format={dateFormat} />
    </Header>
  );
};

export default AppHeader;
