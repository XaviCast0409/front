import { create, SetState } from "zustand";
import axios, { AxiosResponse, AxiosInstance } from "axios";
import { ClassAttributes } from "storeType";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

interface ClassStoreAttributes {
  classes: ClassAttributes[];
  message: string;
  createClass: (data: ClassAttributes) => Promise<void>;
  getClasses: () => Promise<void>;
  setMessage: () => void;
  getback: () => Promise<void>;
}

export const classStore = create<ClassStoreAttributes>(
  (set: SetState<ClassStoreAttributes>) => ({
    classes: [],
    message: "",
    getback: async () => {
      const response: AxiosResponse<{ message: string }> =
        await axiosInstance.get<{ message: string }>("blog");
      console.log(response.data.message);
    },
    createClass: async (data) => {
      const response: AxiosResponse<{
        class: ClassAttributes;
        message: string;
      }> = await axiosInstance.post<{
        class: ClassAttributes;
        message: string;
      }>("create-class", data);
      set((state) => ({
        classes: [...state.classes, response.data.class],
        message: response.data.message,
      }));
    },
    getClasses: async () => {
      const response: AxiosResponse<{ classes: ClassAttributes[] }> =
        await axiosInstance.get<{ classes: ClassAttributes[] }>("all-classes");
      set({ classes: response.data.classes });
    },
    setMessage: () => {
      set({ message: "" });
    },
  })
);
