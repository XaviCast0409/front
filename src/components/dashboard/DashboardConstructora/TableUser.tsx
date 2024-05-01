import React from "react";
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import { UserAttributes } from "storeType";
interface RowData {
  item: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
}
interface TableTradeProps {
  users: UserAttributes[];
}

const columns: TableColumn<RowData>[] = [
  {
    name: "Item",
    selector: (row: RowData) => row.item,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row: RowData) => row.name,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row: RowData) => row.last_name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: RowData) => row.email,
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row: RowData) => row.phone,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row: RowData) => row.address,
    sortable: true,
  },
];

export const TableUser: React.FC<TableTradeProps> = ({ users }) => {
  return (
    <DataTable
      title="Users"
      columns={
        columns as unknown as TableColumn<{
          item: number;
          name: string;
          last_name: string;
          email: string;
          phone: string;
          address: string;
        }>[]
      }
      data={users?.map((item) => ({
        item: item.item || 0,
        name: item.name || "",
        last_name: item.last_name || "",
        email: item.email || "",
        phone: item.phone || "",
        address: item.address || "", 
      }))}
      striped
      responsive
      pagination
    />
  );
};
