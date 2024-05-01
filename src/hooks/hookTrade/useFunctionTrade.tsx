import { tradeStore } from "../../store/tradeStore";

export function useFunctionTrade() {
  const {
    createTrade,
    addEstimateAction,
    addProjectDetail,
    getAllTradePagination,
    size,
    currentPage,
    totalTrade
  } = tradeStore();

  const onSubmitProjectDetail = (values: {}) => {
    try {
      addProjectDetail(values);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitEstimateAction = (values: {}) => {
    try {
      addEstimateAction(values);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitCreate = (values: { name: string, account: number, classIdArray: number[] }) => {
    try {
      createTrade(values);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePageChange = (currentPage: number) => {
    const dataSearch = { page: currentPage, size };
    getAllTradePagination(dataSearch);
  };

  const handlePerRowsChange = (size: number) => {
    const dataSearch = { page: currentPage, size };
    getAllTradePagination(dataSearch);
  };

  return {
    onSubmitCreate,
    onSubmitEstimateAction,
    onSubmitProjectDetail,
    handlePageChange,
    handlePerRowsChange,
    size,
    currentPage,
    totalTrade
  };
}
