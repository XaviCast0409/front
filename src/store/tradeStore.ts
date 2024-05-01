import { create, SetState } from "zustand";
import axios, { AxiosResponse, AxiosInstance } from "axios";
import { TradeAttributes } from "storeType";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

interface TradeStoreAttributes {
  trade: TradeAttributes[];
  tradeById: TradeAttributes;
  totalPages: number;
  currentPage: number;
  totalTrade: number;
  message: string;
  size: number;
  getAllTradePagination: (data: {
    page: number;
    size: number;
  }) => Promise<void>;
  getAllTrades: () => Promise<void>;
  createTrade: (data: { name: string, account: number, classIdArray: number[] }) => Promise<void>;
  getTradeById: (data: string) => Promise<void>;
  addEstimateAction: (data: object) => Promise<void>;
  addProjectDetail: (data: object) => Promise<void>;
  deleteClassTrade: (data: object) => Promise<void>;
  createClassTrade: (data: object) => Promise<void>;
}

export const tradeStore = create<TradeStoreAttributes>(
  (set: SetState<TradeStoreAttributes>) => ({
    message: "",
    totalPages: 0,
    currentPage: 1,
    totalTrade: 0,
    tradeById: {},
    size: 10,
    trade: [],
    getAllTrades: async () => {
      const response: AxiosResponse<{ trade: TradeAttributes[] }> =
        await axiosInstance.get<{ trade: TradeAttributes[] }>("all-trades");
      set({ trade: response.data.trade });
    },
    getAllTradePagination: async (data) => {
      const { page, size } = data;
      const response: AxiosResponse<{
        totalPages: number;
        currentPage: number;
        totalTrade: number;
        trades: TradeAttributes[];
      }> = await axiosInstance.get<{
        totalPages: number;
        currentPage: number;
        totalTrade: number;
        trades: TradeAttributes[];
      }>(`all-trades-pagination?page=${page}&size=${size}`);
      set({
        trade: response.data.trades,
        totalPages: response.data.totalPages,
        currentPage: response.data.currentPage,
        totalTrade: response.data.totalTrade,
      });
    },
    createTrade: async (data) => {
      console.log(data);
      
      const response: AxiosResponse<{
        trade: TradeAttributes;
        message: string;
      }> = await axiosInstance.post<{
        trade: TradeAttributes;
        message: string;
      }>("create-trade", data);
      set((state) => ({
        trade: [...state.trade, response.data.trade],
        message: response.data.message,
      }));
    },
    getTradeById: async (data) => {
      const response: AxiosResponse<{ trade: TradeAttributes }> =
        await axiosInstance.get(`trade-by-id?TradeId=${data}`);
      set({ tradeById: response.data.trade });
    },
    addEstimateAction: async (data) => {
      const response: AxiosResponse<{ message: string }> =
        await axiosInstance.put<{ message: string }>(
          "add-estimate-action",
          data
        );
      set({ message: response.data.message });
    },
    addProjectDetail: async (data) => {
      const response: AxiosResponse<{ message: string }> =
        await axiosInstance.put<{ message: string }>(
          "add-project-detail",
          data
        );
      set({ message: response.data.message });
    },
    /* Eliminar relacion trade Class */
    deleteClassTrade: async (data) => {
      const response: AxiosResponse<{ message: string }> =
        await axiosInstance.post<{ message: string }>(
          "class-trade-delete",
          data
        );
      set({ message: response.data.message });
    },
    /* agregar relacion trade class */
    createClassTrade: async (data) => {
      const response: AxiosResponse<{ message: string }> =
        await axiosInstance.post<{ message: string }>(
          "class-trade-created",
          data
        );
      set({ message: response.data.message });
    },
  })
);
