import React from "react";
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import { TradeAttributes } from "storeType";
import SubHeaderTrade from "./SubHeaderTrade";
interface RowData {
  item: number;
  name: string;
}
interface TableTradeProps {
  handlePageChange: (data: number) => void;
  handlePerRowsChange: (data: number) => void;
  size: number;
  currentPage: number;
  trade: TradeAttributes[];
  totalTrade: number;
  setOpenModal: (data: boolean) => void;
}

const columns: TableColumn<RowData>[] = [
  {
    name: "Item",
    selector: (row: RowData) => row.item,
    sortable: true,
  },
  {
    name: "Name Trade",
    selector: (row: RowData) => row.name,
    sortable: true,
  },
];

export const TableTrade: React.FC<TableTradeProps> = ({
  handlePageChange,
  handlePerRowsChange,
  size,
  trade,
  totalTrade,
  setOpenModal
}) => {
  return (
    <DataTable
      title="Trades"
      columns={
        columns as TableColumn<{
          item: number;
          name: string | undefined;
        }>[]
      }
      data={trade.map((item) => ({
        item: item.item || 0,
        name: item.name
      }))}
      subHeader
      subHeaderComponent={<SubHeaderTrade
        setOpenModal={setOpenModal}
      />}
      striped
      responsive
      pagination
      highlightOnHover
      paginationServer
      paginationPerPage={size}
      paginationTotalRows={totalTrade}
      onChangePage={handlePageChange}
      onChangeRowsPerPage={handlePerRowsChange}
    />
  );
};
