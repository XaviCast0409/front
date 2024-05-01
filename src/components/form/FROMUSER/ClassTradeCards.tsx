import { CardTrade } from "./CardTrade";
import { useZipcCodeHook } from "../../../hooks/hookZipCode/useZipCodeHook";
import { useUserHook } from "../../../hooks/hookUser/useUserHook";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../../../utils/FormContainer";
interface Props {
  handleNextClick?: () => void;
}

const ClassTradeCards: React.FC<Props> = () => {
  const { zipCode } = useZipcCodeHook();
  const {
    setUserStore,
    classUser,
    filterRegisterUser,
    companyUser,
    tradeUser,
    setCompaniesId,
  } = useUserHook();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    setUserStore({ ClassId: id });
    filterRegisterUser({
      zipcode: Number(zipCode?.code),
      tradeId: tradeUser[0].id,
      classId: id,
    });
    setCompaniesId(companyUser);
    navigate("/fullnameform");
  };
  return (
    <div className="container mx-auto px-4 py-8 mt-12">
      <FormContainer title="class trade">
        <div className="container_form_trade" style={{ width: "60%" }}>
          {classUser.map((item, index) => (
            <CardTrade
              key={index}
              handleNextClick={handleClick}
              name={item.name}
              id={item.id}
            />
          ))}
        </div>
      </FormContainer>
    </div>
  );
};

export default ClassTradeCards;
