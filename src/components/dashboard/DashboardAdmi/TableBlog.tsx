import React from "react";
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import SubHeaderClass from "./subHeaderClass";
import { useBlogHook } from "../../../hooks/HookBlog/useBlogHook";
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
  handleDeleteBlog?: (id: number) => Promise<void>;
}

export const TableBlogs: React.FC<TableBlogProps> = ({
  blogs,
  setOpenModal,
}) => {
  const { handleDeleteBlog } = useBlogHook();

  const deleteBlog = async (id) => {
    await handleDeleteBlog(id);
  }
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
        <button onClick={() => deleteBlog(row.id)}>Delete</button>
      ),
    },
  ];

  return (
    <DataTable
      title="Blogs"
      columns={
        columns as TableColumn<Blog>[]
      }
      data={blogs}
      subHeader
      subHeaderComponent={<SubHeaderClass setOpenModal={setOpenModal} />}
      striped
      responsive
      pagination
    />
  );
};
