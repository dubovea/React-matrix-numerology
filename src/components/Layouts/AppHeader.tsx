import { useState } from "react";
import {
  Layout,
  DatePicker,
  Drawer,
  Card,
  Flex,
  Typography,
  ColorPicker,
} from "antd";
import { SettingOutlined } from "@ant-design/icons";
import type { DatePickerProps, ColorPickerProps, GetProp } from "antd";
import { setCurrentDate } from "../../redux/inputs/slice";
import { useAppDispath } from "../../redux/store";
import { setBackgroundColor, setColorLine } from "../../redux/theme/slice";
import { useSelector } from "react-redux";
import { themeSelector } from "../../redux/theme/selectors";

const { Header } = Layout;

type Color = GetProp<ColorPickerProps, "value">;

const AppHeader = () => {
  const { backgroundColor, colorLines } = useSelector(themeSelector);
  const [color, setColor] = useState<Color>("#DF5F0A");
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispath();
  const dateFormat = "DD.MM.YYYY";

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange: DatePickerProps["onChange"] = (date) => {
    dispatch(setCurrentDate(date.toDate() ?? new Date()));
  };

  const handleChangeBackgroundColor: ColorPickerProps["onChange"] = (color) => {
    const hexColor = color.toHexString();
    dispatch(setBackgroundColor(hexColor));
  };

  const handleChangeFontColor: ColorPickerProps["onChange"] = (color) => {
    const hexColor = color.toHexString();
    dispatch(setColorLine(hexColor));
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
      <SettingOutlined
        style={{ color: "white", fontSize: "24px" }}
        onClick={showDrawer}
      />
      <Drawer title="Palettify" onClose={onClose} open={open}>
        <Card
          bordered={false}
          style={{
            width: "100%",
            backgroundColor: "black",
            marginBottom: "1rem",
          }}
        >
          <Typography
            style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
          >
            Основные
          </Typography>
          <Flex gap={10} vertical>
            <Flex justify="space-between" align="center">
              <Typography style={{ color: "white" }}>Цвет фона</Typography>
              <ColorPicker value={backgroundColor} onChange={handleChangeBackgroundColor} />
            </Flex>
            <Flex justify="space-between" align="center">
              <Typography style={{ color: "white" }}>Цвет линий</Typography>
              <ColorPicker
                value={colorLines}
                onChange={handleChangeFontColor}
              />
            </Flex>
          </Flex>
        </Card>
        <Card
          bordered={false}
          style={{ width: "100%", backgroundColor: "black" }}
        >
          <Typography
            style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
          >
            Дополнительные
          </Typography>
          <Flex gap={10} vertical>
            <Flex justify="space-between" align="center">
              <Typography style={{ color: "white" }}>Цвет фона</Typography>
              <ColorPicker value={color} onChange={setColor} />
            </Flex>
            <Flex justify="space-between" align="center">
              <Typography style={{ color: "white" }}>Цвет линий</Typography>
              <ColorPicker value={color} onChange={setColor} />
            </Flex>
          </Flex>
        </Card>
      </Drawer>
    </Header>
  );
};

export default AppHeader;
