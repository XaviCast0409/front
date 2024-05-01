import { useFunctionBlog } from "./useFunctionBlog";
import { useBlog } from "./useBlog";
import { blogStore } from "../../store/blogStore";

export const useBlogHook = () => {
  const { getAllBlog } = blogStore();

  const {
    handleInputBlog,
    handleCreateBlog,
    handleDeleteBlog,
    handleGetAllBlogs,
    handleUpdateBlog,
  } = useFunctionBlog();

  const { blogData } = useBlog();

  return {
    blogData,
    handleInputBlog,
    handleCreateBlog,
    handleDeleteBlog,
    handleGetAllBlogs,
    getAllBlog,
    handleUpdateBlog,
  };
};

//handleUpdateBlog,
