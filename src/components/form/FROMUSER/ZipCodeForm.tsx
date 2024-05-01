import { InputForm } from "../../../utils/InputForm";
import Button from "../../../utils/Button";
import { useNavigate } from "react-router-dom";
import BackButtonArrow from "../../../utils/BackButtonArrow";
import { useZipcCodeHook } from "../../../hooks/hookZipCode/useZipCodeHook";
import { useUserHook } from "../../../hooks/hookUser/useUserHook";

export default function ZipCodeForm() {
  const {
    onSubmitCreate,
    zipCode,
    zipCodeNumber,
    message,
    validate,
    handleChange,
    setMessage
  } = useZipcCodeHook();
  const { filterRegisterUser } = useUserHook();
  const navigate = useNavigate();

  const createZipCode = () => {
    onSubmitCreate(zipCode ?? {});
    setMessage()
    filterRegisterUser({ zipcode: Number(zipCodeNumber?.zipCode), tradeId: 0, classId: 0 })
    setTimeout(() => {
      navigate("/form/tradeUser")
    }, 500)
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <section className="container_form_column" style={{ width: "60%" }}>
        <h1>Validate zipCode</h1>
        <InputForm
          id="floating_postal_code"
          nameInput="zipCode"
          type="text"
          placeholder=" "
          stateValue={zipCodeNumber}
          handleChange={handleChange}
          color="black"
          title="Postal Code"
          className="w-1/2"
        />
        {validate === false ? (
          <div>
            <p className="text-center text-red-600">{`${message}`}</p>
          </div>
        ) : (
          <div>
            <p className="text-center text-green-600">
              {zipCode?.city} {zipCode?.state}
            </p>
          </div>
        )}
        <div className="container_buttons gap-8">
          <BackButtonArrow />
            <Button
              className="btn-primary"
              type="button"
              text="SUBMIT"
              handleClick={createZipCode}
              disabled={!validate}
            />
        </div>
      </section>
    </div>
  );
}