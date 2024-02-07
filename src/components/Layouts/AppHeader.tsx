import { Layout, DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { setCurrentDate } from "../../redux/inputs/slice";
import { useAppDispath } from "../../redux/store";

const { Header } = Layout;

const AppHeader = () => {
  const dispatch = useAppDispath();
  const dateFormat = "DD.MM.YYYY";

  const onChange: DatePickerProps["onChange"] = (date) => {
    dispatch(setCurrentDate(date.toDate() ?? new Date()));
  };

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
