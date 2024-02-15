import React from "react";
import { useAppDispath } from "../../redux/store";
import { Card, ColorPicker, Flex, Typography } from "antd";
import { updateColor } from "../../redux/theme/slice";
import { useSelector } from "react-redux";
import { themeSelector } from "../../redux/theme/selectors";
import { DollarOutlined, HeartOutlined } from "@ant-design/icons";
import { Colors, CustomColorPickerProps } from "../../redux/theme/types";

const CardIconColors: React.FC = () => {
  const dispatch = useAppDispath();

  const { temp } = useSelector(themeSelector),
    { colors } = temp,
    colorIconHeart = colors.colorIconHeart,
    colorIconDollar = colors.colorIconDollar;

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
        Дополнительные
      </Typography>
      <Flex gap={10} vertical>
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Typography style={{ color: "white", marginRight: 5 }}>
              Цвет иконки
            </Typography>
            <HeartOutlined />
          </Flex>
          <ColorPicker
            value={colorIconHeart}
            onChangeComplete={(color) =>
              handleChangeColor(Colors.colorIconHeart, color)
            }
          />
        </Flex>
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Typography style={{ color: "white", marginRight: 5 }}>
              Цвет иконки
            </Typography>
            <DollarOutlined />
          </Flex>
          <ColorPicker
            value={colorIconDollar}
            onChangeComplete={(color) =>
              handleChangeColor(Colors.colorIconDollar, color)
            }
          />
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardIconColors;
