import { create, SetState } from "zustand";
import axios, { AxiosResponse, AxiosInstance } from "axios";
import { zipCodeAttributes } from "storeType";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api2-2aj3.onrender.com/",
});

/* const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
}); */

interface ZipCodeStoreAttributes {
  zipCode: zipCodeAttributes;
  message: string;
  validate: boolean;
  validateZipCode: (zipCode: { zipCode: string }) => Promise<void>;
  createZipCode: (data: zipCodeAttributes) => Promise<void>;
  setMessage: () => void;
  setValidate: () => void;
}

export const zipCodeStore = create<ZipCodeStoreAttributes>(
  (set: SetState<ZipCodeStoreAttributes>) => ({
    message: "",
    zipCode: {
      id: 0,
      city: "",
      code: 0,
      state: "",
    },
    validate: false,
    validateZipCode: async (zipCode) => {
      const response: AxiosResponse<{
        validate: boolean;
        zipCodeData: zipCodeAttributes;
        message: string;
      }> = await axiosInstance.post<{
        validate: boolean;
        zipCodeData: zipCodeAttributes;
        message: string;
      }>("validate-zip-code", zipCode);
      console.log(response);
      set({
        validate: response.data.validate,
        zipCode: response.data.zipCodeData,
        message: response.data.message,
      });
    },
    createZipCode: async (data) => {
      const response: AxiosResponse<{
        zipCode: zipCodeAttributes;
        message: string;
      }> = await axiosInstance.post<{
        zipCode: zipCodeAttributes;
        message: string;
      }>("create-zip-code", data);
      set({ zipCode: response.data.zipCode, message: response.data.message });
    },
    setMessage: () => {
      set({ message: "" });
    },
    setValidate: () => {
      set({ validate: false });
    },
  })
);
