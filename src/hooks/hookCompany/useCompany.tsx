import { useEffect, useState } from "react";
import { companyStore } from "../../store/companyStore";
import { CompanyAttributes, UserAttributes } from "storeType";
import { TradeAttributesFilter } from "hooksType";

export function useCompany() {
  const {
    companies: companyData,
    loginCompany: tokernUser,
    companyId: companyIdData,
  } = companyStore();
  const [company, setCompany] = useState<CompanyAttributes[]>([]);
  const [usersCompany, setUsersCompany] = useState<UserAttributes[]>([]);
  const [tokenLogin, setTokenLogin] = useState({});
  const [tradeFilter, setTradeFilter] = useState<TradeAttributesFilter[]>([]);
  const [comapanyId, setComapanyId] = useState<CompanyAttributes>({})

  useEffect(() => {
    const newCompany = companyData.map((item, index) => ({
      item: index + 1,
      id: item.id,
      name_company: String(item.name_company).toUpperCase(),
      address: String(item.address).toUpperCase(),
      phone: item.phone,
      email: item.email,
      password: item.password,
      ZipCodeId: item.ZipCodeId,
      TokenId: item.TokenId,
      status: item.status
    }));
    setCompany(newCompany);
  }, [companyData]);

  useEffect(() => {
    const newToken = {
      token: tokernUser.token,
    };
    setTokenLogin(newToken);
  }, [tokernUser]);

  useEffect(() => {
    const newTradeFilter = companyData
      .flatMap((item) => item.Trades || [])
      .map((trade) => ({
        id: trade?.id,
        name: trade?.name,
        account: trade?.account,
      }));
    setTradeFilter(newTradeFilter);
  }, [companyData]);

  useEffect(() => {
    if (companyIdData) {
      const newIdCompany = {
        id: companyIdData.id,
        name_company: String(companyIdData.name_company).toUpperCase(),
        address: String(companyIdData.address).toUpperCase(),
        phone: companyIdData.phone,
        email: companyIdData.email,
        password: companyIdData.password,
        ZipCodeId: companyIdData.ZipCodeId,
        TokenId: companyIdData.TokenId,
        TradeCompanyUsers: companyIdData.TradeCompanyUsers?.map((item) => ({
          id: item.id,
          name: item.name,
          Classes: item.Classes?.map((classItem) => ({
            id: classItem.id,
            name: classItem.name,
          })),
        })),
      };
      const usersCompany = companyIdData.Users?.map((item, index) => ({
        item: index + 1,
        id: item.id,
        name: item.name,
        last_name: item.last_name,
        email: item.email,
        phone: item.phone,
        address: item.address,
      }));
      setUsersCompany(usersCompany as UserAttributes[]);
      setComapanyId(newIdCompany as CompanyAttributes);
    }
  }, [companyIdData]);

  return {
    company,
    tokenLogin,
    tradeFilter,
    comapanyId,
    usersCompany
  };
}
