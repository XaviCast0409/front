import { tradeStore } from "../../store/tradeStore";
import { useTrade } from "./useTrade";
import { useFunctionTrade } from "./useFunctionTrade";
export function useTradeHook() {
  const { getAllTrades, getTradeById, getAllTradePagination, deleteClassTrade, createClassTrade } = tradeStore();
  const { trade, tradeById, classData } = useTrade();
  const {
    onSubmitCreate,
    onSubmitEstimateAction,
    onSubmitProjectDetail,
    handlePageChange,
    handlePerRowsChange,
    size,
    currentPage,
    totalTrade
  } = useFunctionTrade();

  return {
    getAllTrades,
    getTradeById,
    trade,
    tradeById,
    onSubmitCreate,
    onSubmitEstimateAction,
    onSubmitProjectDetail,
    classData,
    handlePageChange,
    handlePerRowsChange,
    size,
    currentPage,
    getAllTradePagination,
    totalTrade,
    deleteClassTrade,
    createClassTrade
  };
}
