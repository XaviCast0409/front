import Button from "../../utils/Button";
import { useCompanyHook } from "../../hooks/hookCompany/useCompanyHook";
import { InputForm } from "../../utils/InputForm";
import { FormContainer } from "../../utils/FormContainer";
import BackButtonArrow from "../../utils/BackButtonArrow";
import { useZipcCodeHook } from "../../hooks/hookZipCode/useZipCodeHook";
import { Modal } from "../../utils/ModalError";

export default function ConstructorForm() {
  const {
    onSubmit,
    handleChange,
    companyData,
    messageCreate,
    created,
    setMessage,
    setCreated,
  } = useCompanyHook();
  const { zipCode } = useZipcCodeHook();

  const handleButtonModal = () => {
    setMessage();
    setCreated();
  };

  const handleSubmit = () => {
    onSubmit({
      ...companyData,
      ZipCodeId: zipCode?.id,
    });
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <FormContainer title="Register Company ">
        <InputForm
          id="floating_company"
          nameInput="name_company"
          type="text"
          placeholder=" "
          stateValue={companyData}
          handleChange={handleChange}
          color="black"
          title="Name Company"
        />
        <InputForm
          id="floating_email"
          nameInput="email"
          type="text"
          placeholder=" "
          stateValue={companyData}
          handleChange={handleChange}
          color="black"
          title="Email"
        />
        <InputForm
          id="floating_password"
          nameInput="password"
          type="text"
          placeholder=" "
          stateValue={companyData}
          handleChange={handleChange}
          color="black"
          title="Password"
        />
        <InputForm
          id="floating_phone"
          nameInput="phone"
          type="text"
          placeholder=" "
          stateValue={companyData}
          handleChange={handleChange}
          color="black"
          title="Phone"
        />
        <InputForm
          id="floating_address"
          nameInput="address"
          type="text"
          placeholder=" "
          stateValue={companyData}
          handleChange={handleChange}
          color="black"
          title="Address"
        />
        <div className="container_buttons">
          <BackButtonArrow />
          <Button
            className="btn-primary"
            type="button"
            text="SUBMIT"
            handleClick={handleSubmit}
          />
        </div>
      </FormContainer>
      {messageCreate !== "" && (
        <Modal
          message={messageCreate}
          isSuccess={created}
          handleFunction={handleButtonModal}
          link={created ? "/tradecompany" : "/constructorform"}
        />
      )}
    </div>
  );
}
