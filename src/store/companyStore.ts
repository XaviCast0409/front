import { create, SetState, GetState } from "zustand";
import axios, { AxiosResponse, AxiosInstance } from "axios";
import { CompanyAttributes } from "storeType";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api2-2aj3.onrender.com",
});

interface CompanyStoreAttributes {
  message: string;
  companies: CompanyAttributes[];
  companyCreate: CompanyAttributes;
  companyId: CompanyAttributes;
  getAllCompany: (data: { page: number; size: number }) => Promise<void>;
  createCompany: (data: CompanyAttributes) => Promise<void>;
  companiesByZipCode: (zipCode: number) => Promise<void>;
  addCardCompany: (data: CompanyAttributes) => Promise<void>;
  createCompanyTrade: (data: { CompanyId: number, TradeId:number }) => Promise<void>;
  companyLogin: (data: CompanyAttributes) => Promise<void>;
  changeStatusCompany: (data: { CompanyId: number, status: boolean }) => Promise<void>;
  setMessage: () => void;
  setIsSuccess: () => void;
  setCreated: () => void;
  setMessageLogin: () => void;
  setMessageTradeCompany: (message: string) => void;
  setLogin: () => void;
  totalPages: number;
  currentPage: number;
  totalCompany: number;
  size: number;
  created: boolean;
  isSuccess: boolean;
  messageCreate: string;
  login: boolean;
  messageLogin: string

  loginCompany: {
    token: string;
  };
  getCompanyById: (companyId: number) => Promise<void>;
}

export const companyStore = create<CompanyStoreAttributes>(
  (
    set: SetState<CompanyStoreAttributes>,
    get: GetState<CompanyStoreAttributes>
  ) => ({
    created: false,
    isSuccess: false,
    message: "",
    messageCreate: "",
    companyCreate: {},
    messageLogin: "",
    companyId: {},
    totalPages: 0,
    currentPage: 1, // Mandar al Front
    totalCompany: 0,
    companies: [],
    loginCompany: {
      token: "",
    },
    login: false,
    size: 10, //Mandar al Front
    getAllCompany: async (data) => {
      const { page, size } = data;
      const response: AxiosResponse<{
        companies: CompanyAttributes[];
        totalPages: number;
        currentPage: number;
        totalCompany: number;
      }> = await axiosInstance.get<{
        companies: CompanyAttributes[];
        totalPages: number;
        currentPage: number;
        totalCompany: number;
      }>(`/all-companies?page=${page}&size=${size}`);
      set({
        companies: response.data.companies,
        totalPages: response.data.totalPages,
        currentPage: response.data.currentPage,
        totalCompany: response.data.totalCompany,
      });
    },
    createCompany: async (data) => {
      const response: AxiosResponse<{
        company: CompanyAttributes;
        message: string;
        created: boolean;
      }> = await axiosInstance.post<{
        company: CompanyAttributes;
        message: string;
        created: boolean;
      }>("/create-company", data);
      set({
        companyCreate: response.data.company,
        messageCreate: response.data.message,
        created: response.data.created,
      });
    },
    companiesByZipCode: async (zipCode) => {
      const response: AxiosResponse<{ companies: CompanyAttributes[] }> =
        await axiosInstance.get<{ companies: CompanyAttributes[] }>(
          `company-zip-code?zipCode=${zipCode}`
        );
      set({ companies: response.data.companies });
    },
    addCardCompany: async (data) => {
      const response: AxiosResponse<{ message: string }> =
        await axiosInstance.put<{ message: string }>("add-card-company", data);
      set({ message: response.data.message });
    },

    createCompanyTrade: async (data) => {
      const response: AxiosResponse<{ message: string; isSuccess: boolean }> =
        await axiosInstance.post<{ message: string; isSuccess: boolean }>(
          "add-trade-company",
          data
        );
        console.log(response.data.message);
        
      set({
        message: response.data.message,
        isSuccess: response.data.isSuccess,
      });
    },
    companyLogin: async (data) => {
      const response: AxiosResponse<{
        company: { token: string };
        message: string;
        login: boolean
      }> = await axiosInstance.post<{
        company: { token: string };
        message: string;
        login: boolean
      }>("login-company", data);
      set({
        loginCompany: { token: response.data.company.token },
        messageLogin: response.data.message,
        login: response.data.login
      });
    },

    getCompanyById: async (companyId: number) => {
      const response: AxiosResponse<{ company: CompanyAttributes }> =
        await axiosInstance.get<{ company: CompanyAttributes }>(
          `/company-by-id/${companyId}`
        );
      set({ companyId: response.data.company });
    },
    changeStatusCompany: async (data) => {
      const response: AxiosResponse<{
        message: string;
        company: CompanyAttributes;
      }> = await axiosInstance.patch<{
        message: string;
        company: CompanyAttributes;
      }>("change-status", data);
      const { companies } = get();
      const newCompany = structuredClone(companies);
      const indexCompany = companies.findIndex((elem) => elem.id === data.CompanyId);

      newCompany[indexCompany] = response.data.company;

      set({ companies: newCompany, message: response.data.message });
    },
    setMessage: () => {
      set({ message: "", messageCreate: "" });
    },
    setIsSuccess: () => {
      set({ isSuccess: false });
    },
    setCreated: () => {
      set({ created: false });
    },
    setMessageTradeCompany: (message) => {
      set({ message })
    },
    setMessageLogin: () => {
      set({ messageLogin: '' })
    },
    setLogin: () => {
      set({ login: false })
    }
  })
);
