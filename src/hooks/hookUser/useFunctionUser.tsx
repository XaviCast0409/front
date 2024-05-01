// useFunctionUser.js

import { userStore } from "../../store/userStore";
import { UserAttributes } from "storeType";
import { useState, ChangeEvent } from "react";

export function useFunctionUser() {
  const { user, createUser, userTradeCreate } = userStore();
  const [users, setUsers] = useState<UserAttributes[]>([]);
  const [userData, setUserData] = useState<UserAttributes>({
    name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    ZipCodeId: 0,
  });

  const [/* dataFilterUser */, setDataFilterUser] = useState({})

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | { target: { value: unknown } },
    fieldName: keyof UserAttributes
  ): void => {
    const { value } = e.target || e;
    setUserData({ ...userData, [fieldName]: value });
  };

  const handleFilterTrade = (data: object) => {
    setDataFilterUser(state => {
      return {
        ...state,
        ...data
      }
    })
  }

  const onSubmitUserTrade = async (values: object) => {
    try {
      await userTradeCreate(values);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (value: object, companiesId: number[]) => {
    try {
    const response = await createUser({ ...value, CompanyId: companiesId });
    return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return {
    handleChange,
    user,
    setUsers,
    users,
    userData,
    onSubmit,
    setUserData,
    onSubmitUserTrade,
    handleFilterTrade
  };
}
