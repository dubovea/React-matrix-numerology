import { useState } from "react";
import {
  Layout,
  DatePicker,
  Drawer,
  Card,
  Flex,
  Typography,
  ColorPicker,
  Space,
  Button,
} from "antd";
import { SettingOutlined } from "@ant-design/icons";
import type { DatePickerProps, ColorPickerProps, GetProp } from "antd";
import { setCurrentDate } from "../../redux/inputs/slice";
import { useAppDispath } from "../../redux/store";
import { resetSettings, saveSettings } from "../../redux/theme/slice";
import CardMainColors from "../CardMainColors";
import CardIconColors from "../CardIconColors";

const { Header } = Layout;

type Color = GetProp<ColorPickerProps, "value">;

const AppHeader = () => {
  const dispatch = useAppDispath();
  const [color, setColor] = useState<Color>("#DF5F0A");
  const [open, setOpen] = useState(false);

  const dateFormat = "DD.MM.YYYY";

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleResetSettings = () => dispatch(resetSettings());

  const handleSaveSettings = () => dispatch(saveSettings());

  const handleChangeDate: DatePickerProps["onChange"] = (date) => {
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
      <DatePicker onChange={handleChangeDate} format={dateFormat} />
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
