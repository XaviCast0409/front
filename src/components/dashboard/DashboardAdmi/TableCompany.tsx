import React from "react";
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import { CompanyAttributes } from "storeType";
import { CheckCircle, CancelCircle, On, Off } from "../../../assets/Icons";

interface RowData {
  id: number;
  item: number;
  name_company: string;
  address: string;
  email: string;
  status: boolean;
}

interface TableCompanyProps {
  handlePageChange: (data: number) => void;
  handlePerRowsChange: (data: number) => void;
  size: number;
  currentPage: number;
  company: CompanyAttributes[];
  totalCompany: number;
  handleStatusCompany: (data: { CompanyId: number; status: boolean }) => void;
}


export const TableCompany: React.FC<TableCompanyProps> = ({
  handlePageChange,
  handlePerRowsChange,
  size,
  company,
  totalCompany,
  handleStatusCompany
}) => {
  const columns: TableColumn<RowData>[] = [
    {
      name: "Item",
      selector: (row) => row.item.toString(),
      sortable: true,
    },
    {
      name: "Id",
      selector: (row) => row.id.toString(),
      sortable: true,
    },
    {
      name: "Name Company",
      selector: (row) => row.name_company,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (row.status ? "HABILITADO" : "INHABILITADO"),
      sortable: true,
      cell: (row) =>
        row.status ? (
          <span className=" text-xs flex items-center gap-2 text-green-600">
            <CheckCircle /> HABILITADO
          </span>
        ) : (
          <span className=" text-xs flex items-center gap-2 text-red-600">
            <CancelCircle /> INHABILITADO
          </span>
        ),
    },
    {
      name: "Actions",
      grow: 0.7,
      cell: (row) => {
        return (
          <button
            className="flex gap-4 py-2"
            onClick={(e) => {
              e.preventDefault();     
              handleStatusCompany({ CompanyId: row.id, status: !row.status });
            }}
          >
            {row.status ? <On /> : <Off />}
          </button>
        );
      },
    },
  ];
  const transformedData = company.map((item) => ({
    item: item.item || 0,
    id: item.id || 0,
    name_company: item.name_company || "",
    address: String(item.address) || "",
    email: item.email || "",
    status: item.status || false,
  }));

  return (
    <DataTable
      title="Companies"
      columns={columns}
      data={transformedData}
      striped
      responsive
      pagination
      highlightOnHover
      paginationServer
      paginationPerPage={size}
      paginationTotalRows={totalCompany}
      onChangePage={handlePageChange}
      onChangeRowsPerPage={handlePerRowsChange}
    />
  );
};
