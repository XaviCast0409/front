import { companyStore } from "../../store/companyStore";
import { CompanyAttributes } from "storeType";
import { useState, ChangeEvent } from "react";

export function useFunctionCompany() {
  const {
    createCompany,
    createCompanyTrade,
    companiesByZipCode,
    addCardCompany,
    companyLogin,
    getAllCompany,
    getCompanyById,
    changeStatusCompany,
    size,
    currentPage
  } = companyStore();
  const [zipCode, setZipCode] = useState<number>(0);

  const [companyData, setCompanyData] = useState<CompanyAttributes>({
    name_company: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    stateCity: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>, fieldName: keyof CompanyAttributes): void => {
    const { value } = e.target;
    setCompanyData({ ...companyData, [fieldName]: value });
  };
  const onSubmitCardCompany = (values: CompanyAttributes) => {
    try {
      addCardCompany(values);
    } catch (error) {
      console.log(error);
    }
  };

  const findCompaniesForZipCode = (code: number) => {
    try {
      companiesByZipCode(code);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitTradeCompany = async (values: { CompanyId: number, TradeId: number[] }) => {
    try {
      for (const id of values.TradeId) {
        await createCompanyTrade({ CompanyId: values.CompanyId, TradeId: id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (value: CompanyAttributes) => {
    try {
      createCompany(value);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCompaniesData = (page: number, size: number) => {
    try {
      getAllCompany({ page, size });
    } catch (error) {
      console.log(error);
    }
  };

  const findCompanyById = async (companyId: number) => {
    try {
      return await getCompanyById(companyId);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (currentPage: number) => {
    const dataSearch = { page: currentPage, size }
    getAllCompany(dataSearch)
  }

  const handlePerRowsChange = (size: number) => {
    const dataSearch = { page: currentPage, size }
    getAllCompany(dataSearch)
  }

  const handleStatusCompany = async (data: { CompanyId: number, status: boolean }) => {
    try {
      await changeStatusCompany(data);
    } catch (error) {
      console.log(error);
    }
  }


  return {
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
    zipCode,
    handlePageChange,
    handlePerRowsChange,
    size,
    currentPage,
    handleStatusCompany
  };
}
