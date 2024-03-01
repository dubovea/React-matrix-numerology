import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, DatePicker, Drawer, Space, Button } from "antd";
import moment from "moment";
import { SettingOutlined } from "@ant-design/icons";
import type { DatePickerProps } from "antd";
import { setCurrentDate } from "../../redux/inputs/slice";
import { useAppDispath } from "../../redux/store";
import { resetSettings, saveSettings } from "../../redux/theme/slice";
import CardMainColors from "../CardMainColors";
import CardIconColors from "../CardIconColors";
import { inputsSelector } from "../../redux/inputs/selectors";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const { Header } = Layout;

const AppHeader = () => {
  const { dateString } = useSelector(inputsSelector);
  const dispatch = useAppDispath();
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [open, setOpen] = useState(false);

  const dateFormat = "DD.MM.YYYY";

  const isValidDate = (dateString: string, format: string) => {
    return moment(dateString, format, true).isValid();
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleResetSettings = () => dispatch(resetSettings());

  const handleSaveSettings = () => dispatch(saveSettings());

  const handleChangeDate: DatePickerProps["onChange"] = (date) => {
    if (!date) {
      dispatch(setCurrentDate(""));
      setUrlParams("");
      return;
    }
    const dateString = date.toDate().toLocaleDateString();
    setUrlParams(dateString);
    dispatch(setCurrentDate(dateString));
  };

  const parseUrlParams = () => {
    if (hash) {
      const dateString = hash.slice(1);
      if (isValidDate(dateString, dateFormat)) {
        dispatch(
          setCurrentDate(
            moment(dateString, dateFormat).toDate().toLocaleDateString()
          )
        );
      }
    }
  };

  const setUrlParams = (dateString: string) => {
    navigate(`#${dateString}`);
  };

  useEffect(() => {
    parseUrlParams();
  }, []);
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
      <DatePicker
        value={dateString ? dayjs(dateString, dateFormat) : null}
        onChange={handleChangeDate}
        format={dateFormat}
      />
      <SettingOutlined
        style={{ color: "white", fontSize: "24px" }}
        onClick={showDrawer}
      />
      <Drawer
        title="Палитра"
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={handleResetSettings} danger>
              Сбросить
            </Button>
            <Button onClick={handleSaveSettings}>Сохранить</Button>
          </Space>
        }
      >
        <CardMainColors />
        <CardIconColors />
      </Drawer>
    </Header>
  );
};

export default AppHeader;
