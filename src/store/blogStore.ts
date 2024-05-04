import axios, { AxiosResponse, AxiosInstance } from "axios";
import { Blog } from "storeType";
import { create, SetState } from "zustand";

/* const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api2-2aj3.onrender.com",
});
*/

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://localhost:3000",
});


interface BlogStoreAttributes {
  message: string;
  blog: Blog[];
  getAllBlog: () => Promise<void>;
  getBlogById: (id: string) => Promise<void>;
  createBlog: (data: {
    title: string;
    content: string;
    imageUrl: string;
  }) => Promise<void>;
  updateBlog: (data: {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
  }) => Promise<void>;
  deleteBlog: (data: { id: number }) => Promise<void>;
}

export const blogStore = create<BlogStoreAttributes>(
  (set: SetState<BlogStoreAttributes>) => ({
    message: "",
    blog: [],

    getAllBlog: async () => {
      const response = await axiosInstance.get("/company-all-blogs")

      set({ blog: response.data.blogs, message: response.data.message });
    },

    createBlog: async (data: { title: string; content: string }) => {
      const response: AxiosResponse<{ message: string; blog: Blog[] }> =
        await axiosInstance.post<{
          message: string;
          blog: Blog[];
        }>("/company-blog-create", data);
      set({ message: response.data.message });
    },
    updateBlog: async (data) => {
      const response: AxiosResponse<{ message: string; blog: Blog[] }> =
        await axiosInstance.put<{
          message: string;
          blog: Blog[];
        }>(`/company-blog-update?id=${data.id}`);
      console.log("Updated blog:", response.data);
      set({ message: response.data.message });
    },
    deleteBlog: async (data) => {
      const response: AxiosResponse<{ message: string }> =
        await axiosInstance.delete<{
          message: string;
        }>(`/company-blog-delete?id=${data.id}`);
      console.log("Deleted blog:", response.data);
      set({ message: response.data.message });
    },
    getBlogById: async (id: string) => {
      const response = await axiosInstance.get(`/company-blog-byId/${id}`);
      set({ blog: [response.data.blog], message: response.data.message });
    },
  })
);
