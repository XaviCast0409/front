import { useZipcCodeHook } from "../../../hooks/hookZipCode/useZipCodeHook";
import { FormContainer } from "../../../utils/FormContainer";
import { useUserHook } from "../../../hooks/hookUser/useUserHook";
import { CardTrade } from "./CardTrade";
import { useNavigate } from "react-router-dom";

export default function TypeOfProjectForm() {
  const { zipCode } = useZipcCodeHook();
  const { setUserStore, filterRegisterUser, tradeUser } = useUserHook();

  const navigate = useNavigate();

  const setTradeIdStore = (id: number) => {
    setUserStore({ TradeId: id, zipCodeId: zipCode?.id });
    filterRegisterUser({
      zipcode: Number(zipCode?.code),
      tradeId: id,
      classId: 0,
    });
    navigate("/form/classTrade");
  };

return (
  <div className="flex justify-center items-center min-h-screen">
    <FormContainer title="Trade Company">
      <section className="grid grid-cols-3 items-center gap-4 ">
        {tradeUser?.map((item, index) => (
          <CardTrade
            key={index}
            name={item.name || ""}
            id={item.id || 0}
            handleNextClick={setTradeIdStore}
          />
        ))}
      </section>
    </FormContainer>
  </div>
);
}
