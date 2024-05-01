import Button from "../../utils/Button";
import { InputForm } from "../../utils/InputForm";
import { Link } from "react-router-dom";
import BackButtonArrow from "../../utils/BackButtonArrow";
import { useZipcCodeHook } from "../../hooks/hookZipCode/useZipCodeHook";
import logoImage from "../../assets/asset/images/HOWS-ADVISOR-website.png";

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
    onSubmitCreate(zipCode);
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      <img src={logoImage} alt="Logo" className="w-20 h-20 object-contain" />
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
      </section>
    </div>
  );
}
