import { useState, useEffect, ChangeEvent } from "react";
import { blogStore } from "../../store/blogStore";
import { Blog } from "storeType";

export const useFunctionBlog = () => {
  const { blog, getAllBlog, createBlog, deleteBlog, updateBlog, getBlogById } =
    blogStore();

  const [blogData, setBlogData] = useState<Blog[]>(blog ?? []);
  const [blogInput, setBlogInput] = useState<{
    title: string;
    content: string;
    imageUrl: string;
  }>({
    title: "",
    content: "",
    imageUrl: "",
  });
  const [upDateBlog /* setUpDateBlog */] = useState<{
    id: number;
    title: string;
    content: string;
    imageUrl: string;
  }>({
    id: 0,
    title: "",
    content: "",
    imageUrl: "",
  });

  useEffect(() => {
    setBlogData(blog ?? []);
  }, [blog]);

  const handleInputBlog = (e: ChangeEvent<HTMLInputElement>) => {
    setBlogInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreateBlog = async ({
    title,
    content,
    imageUrl,
  }: typeof blogInput) => {
    await createBlog({ title, content, imageUrl });
  };

  const handleDeleteBlog = async (id: number) => {
    await deleteBlog({ id });
  };

  const handleGetAllBlogs = () => {
    getAllBlog();
  };

  const handleUpdateBlog = async (id: number) => {
    await updateBlog({
      id,
      title: upDateBlog.title,
      content: upDateBlog.content,
      imageUrl: upDateBlog.imageUrl,
    });
  };

  const handleGetBlogById = async (id: number) => {
    try {
      await getBlogById(id);
    } catch (error) {
      console.error('Error getting blog by id:', error);
    }
  };

  return {
    blogData,
    blogInput,
    handleInputBlog,
    handleCreateBlog,
    handleDeleteBlog,
    handleGetAllBlogs,
    handleUpdateBlog,
    handleGetBlogById,
  };
};
