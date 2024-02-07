import React from "react";
import { useSelector } from "react-redux";
import { ConfigProvider, Table } from "antd";
import type { TableProps } from "antd";
import { TableDataType } from "../../redux/matrix/types";
import { matrixSelector } from "../../redux/matrix/selectors";

const columns: TableProps<TableDataType>["columns"] = [
  {
    title: "ФИЗИКА",
    dataIndex: "physics",
    key: "physics",
  },
  {
    title: "ЭНЕРГИЯ",
    dataIndex: "energy",
    key: "energy",
  },
  {
    title: "ЭМОЦИИ",
    dataIndex: "emotions",
    key: "emotions",
  },
  {
    title: "НАЗВАНИЕ ЧАКРЫ",
    dataIndex: "chakra",
    key: "chakra",
  },
];

const TableComponent: React.FC = () => {
  const { tableData } = useSelector(matrixSelector);
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "black",
            headerColor: "white",
            borderColor: "white",
            colorText: "white",
          },
        },
      }}
    >
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
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
