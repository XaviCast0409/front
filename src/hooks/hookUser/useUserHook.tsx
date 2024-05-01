import { useFunctionUser } from "./useFunctionUser";
import { useUser } from "./useUser";
import { userStore } from "../../store/userStore";

export function useUserHook() {
  const {
    message,
    totalPages,
    currentPage,
    totalUser,
    size,
    userCreate,
    setUserStore,
    userStore: useStoreCreate,
    filterRegisterUser,
    setCompaniesId,
    companiesId,
  } = userStore();
  const { user, tradeUser, classUser, companyUser } = useUser();
  const { handleChange, userData, setUserData, onSubmit, handleFilterTrade } =
    useFunctionUser();

  return {
    user,
    handleChange,
    message,
    totalPages,
    currentPage,
    totalUser,
    size,
    userCreate,
    userData,
    setUserData,
    onSubmit,
    setUserStore,
    useStoreCreate,
    handleFilterTrade,
    tradeUser,
    classUser,
    companyUser,
    filterRegisterUser,
    setCompaniesId,
    companiesId
  };
}