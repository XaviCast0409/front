import { create, SetState } from "zustand";
import axios, { AxiosResponse, AxiosInstance } from "axios";
import { TradeAttributes } from "storeType";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

interface CompanyProfileStoreAttributes {
  message: string;
  trade: TradeAttributes[];
  createTradeCompanyUser: (data: {
    name: string;
    companyId: number;
  }) => Promise<void>;
  createTradeClassCompanyUser: (data: {
    ClassId: number;
    TradeCompanyUserId: number;
  }) => Promise<void>;
  getTradeCompanyUser: () => Promise<void>;
  deleteTradeClassCompanyUser: (data: {
    ClassId: number,
    TradeCompanyUserId: number
  }) => Promise<void>;
}

export const companyProfileStore = create<CompanyProfileStoreAttributes>(
  (set: SetState<CompanyProfileStoreAttributes>) => ({
    message: "",
    trade: [],
    createTradeCompanyUser: async (data) => {
      console.log(data)
      const response: AxiosResponse<{
        message: string;
        trade: TradeAttributes;
      }> = await axiosInstance.post<{
        message: string;
        trade: TradeAttributes;
      }>("/create-trade-companyProfile", data);
      set((state) => ({
        trade: [...state.trade, response.data.trade],
        message: response.data.message,
      }));
    },
    createTradeClassCompanyUser: async (data) => {
      const response: AxiosResponse<{
        message: string;
      }> = await axiosInstance.post<{
        message: string;
      }>("/create-trade-class-company-profile", data);
      set({ message: response.data.message });
    },
    getTradeCompanyUser: async () => {
      const response: AxiosResponse<{
        message: string;
        trade: TradeAttributes[];
      }> = await axiosInstance.get<{
        message: string;
        trade: TradeAttributes[];
      }>("/trade-company-profile");
      set({ trade: response.data.trade });
    },
    deleteTradeClassCompanyUser: async (data) => {
      const response: AxiosResponse<{
        message: string;
      }> = await axiosInstance.delete<{
        message: string;
      }>("/delete-trade-class-company-profile", { data });
      set({ message: response.data.message });
    }
  })
);
