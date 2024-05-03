import React from "react";
import axios from "axios"; // Importa Axios
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import SubHeaderClass from "./subHeaderClass";
import { Blog } from "storeType";

interface RowData {
  id: number;
  item: number;
  title: string;
  content: string;
  imageUrl: string;
  publicationDate: string | number | Date;
}

interface TableBlogProps {
  blogs: Blog[];
  setOpenModal: (data: boolean) => void;
}

export const TableBlogs: React.FC<TableBlogProps> = ({
  blogs,
  setOpenModal,
}) => {
  console.log("Entra en TableBlogs");
  console.log("blogs:", blogs);

  const deleteBlog = async (id: string | null) => {
    if (!id) {
      console.error("deleteBlog: id is null");
      return;
    }

    try {
      // Envía una solicitud DELETE al servidor para eliminar el blog por su ID
      await axios.delete(`http://localhost:3000/api/blog/${id}`);
    } catch (error) {
      console.error(`Error al eliminar el blog con id '${id}':`, error);
    }
  };

  const columns: TableColumn<RowData>[] = [
    {
      name: "Post",
      selector: (row: RowData) => row.item,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row: RowData) => row.title,
      sortable: true,
    },
    {
      name: "Content",
      selector: (row: RowData) => row.content.slice(0, 20),
      sortable: true,
    },
    {
      name: "Photo",
      selector: (row: RowData) => row.imageUrl,
      sortable: true,
    },
    {
      name: "",
      cell: (row: RowData) => (
        <button onClick={() => deleteBlog(row.id.toString())}>Delete</button>
      ),
    },
  ];

  console.log("columns:", columns);

  return (
    <DataTable
      title="Blogs"
      columns={columns as TableColumn<Blog>[]}
      data={blogs}
      subHeader
      subHeaderComponent={<SubHeaderClass setOpenModal={setOpenModal} />}
      striped
      responsive
      pagination
    />
  );
};
