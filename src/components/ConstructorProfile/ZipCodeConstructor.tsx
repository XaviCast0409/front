import Button from "../../utils/Button";
import { InputForm } from "../../utils/InputForm";
import { Link } from "react-router-dom";
import BackButtonArrow from "../../utils/BackButtonArrow";
import { useZipcCodeHook } from "../../hooks/hookZipCode/useZipCodeHook";
import logoImage from "../../assets/asset/images/HOWS-ADVISOR-website.png";
import { FormContainer } from "../../utils/FormContainer";

export default function PostalCodeForm() {
  const {
    onSubmitCreate,
    zipCode,
    zipCodeNumber,
    message,
    validate,
    handleChange,
  } = useZipcCodeHook();

  const createZipCode = () => {
    if (zipCode) {
      onSubmitCreate(zipCode);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <img src={logoImage} alt="Logo" className="w-56 h-56 object-contain md:w-80 md:h-80 lg:w-96 lg:h-96"  />
      <FormContainer title="Zip Code ">
        <InputForm
          id="floating_postal_code"
          nameInput="zipCode"
          type="text"
          placeholder=" "
          stateValue={zipCodeNumber}
          handleChange={handleChange}
          color="black"
          title="Postal Code"
          className="w-80 md:w-full lg:w-96"
        />
      </FormContainer>
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
        <Link to="/constructorform">
          <Button
            className="btn-primary"
            type="button"
            text="SUBMIT"
            handleClick={createZipCode}
            disabled={!validate}
          />
        </Link>
      </div>
    </div>
  );
}
