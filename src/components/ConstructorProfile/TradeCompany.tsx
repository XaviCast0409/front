import { FormContainer } from "../../utils/FormContainer";
import { useTradeHook } from "../../hooks/hookTrade/useTradeHook";
import { useEffect, useState } from "react";
import { TradeCards } from "./TradeCards";
import BackButtonArrow from "../../utils/BackButtonArrow";
import Button from "../../utils/Button";
import { useCompanyHook } from "../../hooks/hookCompany/useCompanyHook";
import { Modal } from "../../utils/ModalError";

export default function TradeCompany() {
  const { getAllTrades, trade } = useTradeHook();
  const {
    companyCreate,
    onSubmitTradeCompany,
    setIsSuccess,
    setMessage,
    isSuccess,
    message,
    setMessageTradeCompany
  } = useCompanyHook();
  const [tradeId, setTradeId] = useState<number[]>([]);

  const handleSubmit = () => {
    if (companyCreate && companyCreate.id !== undefined) {
      onSubmitTradeCompany({ CompanyId: companyCreate.id, TradeId: tradeId });
    } else {
      setMessageTradeCompany("CompanyId or tradeId is undefined");
    }
  };
  const handleButtonModal = () => {
    setIsSuccess();
    setMessage();
  };

  useEffect(() => {
    getAllTrades();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <FormContainer title="Trade Company">
        <section className="container_form_trade" style={{ width: "60%" }}>
          {trade?.map((item, index) => (
            <TradeCards
              key={index}
              name={item.name}
              setTradeId={setTradeId}
              tradeId={item.id}
            />
          ))}

          <div className="container_buttons flex justify-center">
            <BackButtonArrow />
            <Button
              className="btn-primary"
              type="button"
              text="SUBMIT"
              handleClick={handleSubmit}
            />
          </div>
        </section>
        {message !== "" && (
          <Modal
            message={message}
            isSuccess={isSuccess}
            handleFunction={handleButtonModal}
            link={isSuccess ? "/siginconstructorpage" : "/tradecompany"}
          />
        )}
      </FormContainer>
    </div>  
  );
}
