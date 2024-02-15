import React from "react";
import { useAppDispath } from "../../redux/store";
import { Card, ColorPicker, Flex, Typography } from "antd";
import { updateColor } from "../../redux/theme/slice";
import { useSelector } from "react-redux";
import { themeSelector } from "../../redux/theme/selectors";
import { Colors, CustomColorPickerProps } from "../../redux/theme/types";

const CardMainColors: React.FC = () => {
  const dispatch = useAppDispath();

  const { temp } = useSelector(themeSelector),
    { colors } = temp,
    backgroundColor = colors.backgroundColor,
    colorLines = colors.colorLines,
    colorLinesTable = colors.colorLinesTable;

  const handleChangeColor: CustomColorPickerProps["onChange"] = (
    field,
    color
  ) => {
    dispatch(
      updateColor({
        field: field,
        color: color.toHexString(),
      })
    );
  };

  return (
    <Card
      bordered={false}
      style={{
        width: "100%",
        backgroundColor: "black",
        marginBottom: "1rem",
      }}
    >
      <Typography style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
        Основные
      </Typography>
      <Flex gap={10} vertical>
        <Flex justify="space-between" align="center">
          <Typography style={{ color: "white" }}>Цвет фона</Typography>
          <ColorPicker
            value={backgroundColor}
            onChangeComplete={(color) =>
              handleChangeColor(Colors.backgroundColor, color)
            }
          />
        </Flex>
        <Flex justify="space-between" align="center">
          <Typography style={{ color: "white" }}>Цвет линий</Typography>
          <ColorPicker
            value={colorLines}
            onChangeComplete={(color) =>
              handleChangeColor(Colors.colorLines, color)
            }
          />
        </Flex>
        <Flex justify="space-between" align="center">
          <Typography style={{ color: "white" }}>Цвет линий таблицы</Typography>
          <ColorPicker
            value={colorLinesTable}
            onChangeComplete={(color) =>
              handleChangeColor(Colors.colorLinesTable, color)
            }
          />
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardMainColors;
