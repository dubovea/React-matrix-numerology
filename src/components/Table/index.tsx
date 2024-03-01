import React from "react";
import { useSelector } from "react-redux";
import { ConfigProvider, Flex, Table, Tooltip, Typography } from "antd";
import type { TableProps } from "antd";
import { ChakraType, TableDataType } from "../../redux/matrix/types";
import { matrixSelector } from "../../redux/matrix/selectors";
import { themeSelector } from "../../redux/theme/selectors";
import { QuestionCircleOutlined } from "@ant-design/icons";

const columns: TableProps<TableDataType>["columns"] = [
  {
    title: "ФИЗИКА",
    dataIndex: "physics",
    key: "physics",
    align: "center",
  },
  {
    title: "ЭНЕРГИЯ",
    dataIndex: "energy",
    key: "energy",
    align: "center",
  },
  {
    title: "ЭМОЦИИ",
    dataIndex: "emotions",
    key: "emotions",
    align: "center",
  },
  {
    title: "ЧАКРА",
    dataIndex: "chakra",
    key: "chakra",
    render: (chakra: ChakraType) => (
      <Flex>
        <Typography className="flex-1">{chakra.label}</Typography>
        <Tooltip title={chakra.tooltip} placement="left">
          <QuestionCircleOutlined />
        </Tooltip>
      </Flex>
    ),
  },
];

const TableComponent: React.FC = () => {
  const { tableData } = useSelector(matrixSelector),
    { temp } = useSelector(themeSelector),
    colorLinesTable = temp.colors.colorLinesTable;
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "black",
            headerColor: "white",
            borderColor: colorLinesTable,
            colorText: "white",
            cellPaddingBlock: 1,
            headerBorderRadius: 0,
          },
        },
      }}
    >
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        bordered
        onRow={(record) => ({
          style: {
            background: record.backgroundColor,
            fontWeight: record.result ? "bold" : "",
          },
        })}
      />
    </ConfigProvider>
  );
};

export default TableComponent;
