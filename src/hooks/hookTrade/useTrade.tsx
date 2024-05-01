import { useEffect, useState } from "react";
import { tradeStore } from "../../store/tradeStore";
import { TradeAttributes, ClassDataAttributes } from "hooksType";

export function useTrade() {
  const { trade: tradeData, tradeById: tradeByIdData } = tradeStore();
  const [trade, setTrade] = useState<TradeAttributes[]>([]);
  const [tradeById, setTradeById] = useState<TradeAttributes | undefined>();
  const [classData, setClassData] = useState<ClassDataAttributes[]>([]);

  useEffect(() => {
    const newTrade = tradeData?.map((item, index) => ({
      id: item?.id,
      value: item?.id,
      item: index + 1,
      name: item.name,
      account: item.account,
    }));
    setTrade(newTrade);
  }, [tradeData]);

  useEffect(() => {
    setTradeById({
      id: tradeByIdData?.id,
      name: tradeByIdData?.name,
      account: tradeByIdData?.account,
      Classes: tradeByIdData?.Classes?.map((item) => ({
        id: item.id,
        value: item.id,
        name: item.name,
      }))
    });
  }, [tradeByIdData]);

  useEffect(() => {
    const newClassData = tradeByIdData?.Classes?.map((item: ClassDataAttributes) => ({
      id: item.id,
      name: item.name,
    }));
    setClassData(newClassData);
  }, [tradeByIdData]);

  return {
    trade,
    tradeById,
    classData,
  };
}
