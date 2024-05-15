// userStore.js

import { create, SetState } from "zustand";
import axios, { AxiosResponse, AxiosInstance } from "axios";
import { UserAttributes } from "storeType";
/*
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api2-2aj3.onrender.com/",
});
*/
 const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
}); 
interface UserStoreAttributes {
  message: string;
  user: UserAttributes[];
  userCreate: UserAttributes | null;
  totalPages: number;
  currentPage: number;
  totalUser: number;
  size: number;
  userId: UserAttributes;
  userStore: UserAttributes;
  trade: [],
  classes: [],
  companiesId: [],
  getAllUsers: (data: { page: number; size: number }) => Promise<void>;
  createUser: (data: object) => Promise<AxiosResponse<{ user: UserAttributes }>>;
  userTradeCreate: (data: object) => Promise<void>;
  getByIdUser: (userId: string) => Promise<void>;
  addUserCompany: (data: object) => Promise<void>
  setUserStore: (data: object) => void
  filterRegisterUser: (data: { zipcode?: number; tradeId?: number; classId?: number }) => Promise<void>
  setCompaniesId: (data) => void
  createCompanyUser: (data: object) => Promise<void>
}

export const userStore = create<UserStoreAttributes>(
  (set: SetState<UserStoreAttributes>) => ({
    message: "",
    user: [],
    userCreate: {},
    userId: {},
    totalPages: 0,
    currentPage: 1,
    totalUser: 0,
    size: 10,
    companiesId: [],
    userStore: {},
    /* filter trades and classes register users */
    trade: [],
    classes: [],
    getAllUsers: async(data) => {
      const { page, size } = data;
      const response = await axiosInstance.get<{
        user: UserAttributes[];
        totalPages: number;
        currentPage: number;
        totalUser: number;
      }>(`/all-users?page=${page}&size=${size}`);
      set({
        user: response.data.user,
        totalPages: response.data.totalPages,
        currentPage: response.data.currentPage,
        totalUser: response.data.totalUser,
      });
    },

    createUser: async (userData: UserAttributes) => {
      const response = await axiosInstance.post<{ user: UserAttributes }>(
        "/create-user",
        userData
      );
      set({ userCreate: response.data.user });
      return response;
    
    },

    userTradeCreate: async (data) => {
      const response = await axiosInstance.post("create-trade-user", data);
      set({ message: response.data.message });
    },
    getByIdUser: async (userId: string) => {
      const response = await axiosInstance.get<{ user: UserAttributes }>(
        `/user-by-id/${userId}`
      );
      set({userId: response.data.user});
    },
    addUserCompany: async (data) => {
      const response = await axiosInstance.post("create-company-user", data);
      set({ message: response.data.message });
    },
    setUserStore: (data) => {
      set((state) => ({ userStore: {...state.userStore, ...data} }))
    },
    filterRegisterUser: async(data) => {
      const { zipcode, tradeId, classId } = data
      const response = await axiosInstance.get<{ trades: [], classes: [], randomCompanyIds: [] }>(
        `/filter-company-user?zipcode=${zipcode}&tradeId=${tradeId}&classId=${classId}`
      )
      set({ trade: response.data.trades, classes: response.data.classes, companiesId: response.data.randomCompanyIds})
    },
    setCompaniesId: (data) => {
      set({ companiesId: data })
    },
    createCompanyUser: async (data) => {
      const response = await axiosInstance.post("create-company-user", data);
      set({ message: response.data.message });
    }
  })
)
