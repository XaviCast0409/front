import { useEffect, useState } from "react";
import { userStore } from "../../store/userStore";
import { UserAttributes, TradeUser, ClassUser, CompanyUser } from "storeType";

export function useUser() {
  const { user: userData, trade, classes, companiesId } = userStore();
  const [user, setUser] = useState<UserAttributes[]>([]);
  const [tradeUser, setTradeUser] = useState<TradeUser[]>([]);
  const [classUser, setClassUser] = useState<ClassUser[]>([]);
  const [companyUser, setCompanyUser] = useState<CompanyUser[]>([]);

  useEffect(() => {
    const newUser = userData.map((item) => ({
      id: item.id,
      name: String(item.name).toUpperCase(),
      lastName: String(item.last_name).toUpperCase(),
      email: item.email,
      address: item.address,
      phone: item.phone,
      ZipCodeId: item.ZipCodeId,
    }));
    setUser(newUser);
  }, [userData]);

  useEffect(() => {
    const newTrade = trade?.map((item: { id: number, name: string }) => ({
      id: item.id,
      name: item.name,
    }));
    setTradeUser(newTrade);
  }, [trade]);

  useEffect(() => {
    const newClasses = classes?.map((item: { id: number, name: string }) => ({
      id: item.id,
      name: item.name,
    }));
    setClassUser(newClasses);
  }, [classes]);

  useEffect(() => {
    const newCompaniesId = companiesId?.map((item: { id: number }) => ({
      id: item.id,
    }));
    setCompanyUser(newCompaniesId);
  }, [companiesId]);

  return {
    user,
    tradeUser,
    classUser,
    companyUser,
  };
}
