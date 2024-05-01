import React from "react";
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import { TradeAttributes } from "storeType";
import SubHeaderClass from "./subHeaderClass";
interface RowData {
  item: number;
  name: string;
}
interface TableClassesProps {
  classes: TradeAttributes[];
  setOpenModal: (data: boolean) => void;
}

const columns: TableColumn<RowData>[] = [
  {
    name: "Item",
    selector: (row: RowData) => row.item,
    sortable: true,
  },
  {
    name: "Name Class",
    selector: (row: RowData) => row.name,
    sortable: true,
  },
];

export const TableClasses: React.FC<TableClassesProps> = ({
  classes,
  setOpenModal
}) => {
  return (
    <DataTable
      title="Classes"
      columns={
        columns as TableColumn<{
          item: number;
          name: string | undefined;
        }>[]
      }
      data={classes.map((item) => ({
        item: item.item || 0,
        name: item.name,
      }))}
      subHeader
      subHeaderComponent={<SubHeaderClass setOpenModal={setOpenModal} />}
      striped
      responsive
      pagination
    />
  );
};
