import { useFunctionCompany } from "./useFunctionCompany";
import { useCompany } from "./useCompany";
import { companyStore } from "../../store/companyStore";

export function useCompanyHook() {
  const {
    message,
    totalPages,
    totalCompany,
    companyCreate,
    isSuccess,
    setIsSuccess,
    setMessage,
    messageCreate,
    created,
    setCreated,
    setMessageTradeCompany,
    messageLogin,
    login,
    setMessageLogin,
  } = companyStore();
  const { company, tokenLogin, tradeFilter, comapanyId, usersCompany } = useCompany();
  const {
    onSubmit,
    handleChange,
    companyData,
    onSubmitTradeCompany,
    findCompaniesForZipCode,
    setZipCode,
    onSubmitCardCompany,
    companyLogin,
    getAllCompaniesData,
    findCompanyById,
    handlePageChange,
    handlePerRowsChange,
    size,
    currentPage,
    handleStatusCompany
  } = useFunctionCompany();

  return {
    company,
    onSubmit,
    handleChange,
    companyData,
    onSubmitTradeCompany,
    findCompaniesForZipCode,
    setZipCode,
    onSubmitCardCompany,
    message,
    totalPages,
    currentPage,
    totalCompany,
    size,
    tokenLogin,
    tradeFilter,
    companyLogin,
    getAllCompaniesData,
    findCompanyById,
    companyCreate,
    comapanyId,
    isSuccess,
    setIsSuccess,
    setMessage,
    messageCreate,
    created,
    setCreated,
    setMessageTradeCompany,
    messageLogin,
    login,
    setMessageLogin,
    handlePageChange,
    handlePerRowsChange,
    handleStatusCompany,
    usersCompany
  };
}
