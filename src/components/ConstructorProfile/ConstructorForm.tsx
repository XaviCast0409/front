import Button from "../../utils/Button";
import { useCompanyHook } from "../../hooks/hookCompany/useCompanyHook";
import BackButtonArrow from "../../utils/BackButtonArrow";
import { useZipcCodeHook } from "../../hooks/hookZipCode/useZipCodeHook";
import { Modal } from "../../utils/ModalError";
import { DataStates } from "../../utils/Utils";
import InputSelect from "../../utils/SelectInput";
import InputField from "../../utils/InputField";
import { useState } from "react";

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
  const { statesEEUU } = DataStates();
  const [stateCity, SetStateCity] = useState<string>("");

  const handleButtonModal = () => {
    setMessage();
    setCreated();
  };

  const handleSubmit = () => {
    onSubmit({
      ...companyData,
      stateCity,
      ZipCodeId: zipCode?.id,
    });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const selectedOption = statesEEUU.find(
      (option) => option.value === Number(value)
    );
    const abrev = selectedOption?.abrev;
    if (abrev) {
      SetStateCity(abrev);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h2 className="h1 text-center  my-10">Register Company</h2>
      <section className="grid grid-cols-12 gap-5 pt-5">
        <InputField
          name="name_company"
          type="text"
          placeholder="Name Company"
          errors={{}}
          labelText="Company"
          requiredText="This field is required"
          xlColSpan="xl:col-span-4"
          onChange={(e) => handleChange(e, "name_company")}
        />
        <InputField
          name="email"
          type="email"
          placeholder="Email"
          errors={{}}
          labelText="Email"
          requiredText="This field is required"
          xlColSpan="xl:col-span-4"
          onChange={(e) => handleChange(e, "email")}
        />
        <InputField
          name="password"
          type="password"
          placeholder="Password"
          errors={{}}
          labelText="Password"
          requiredText="This field is required"
          xlColSpan="xl:col-span-4"
          onChange={(e) => handleChange(e, "password")}
        />
        <InputField
          name="phone"
          type="text"
          placeholder="Phone"
          errors={{}}
          labelText="Phone"
          requiredText="This field is required"
          xlColSpan="xl:col-span-4"
          onChange={(e) => handleChange(e, "phone")}
        />
        <InputSelect
          options={statesEEUU}
          name="state"
          labelText="State"
          xlColSpan="xl:col-span-4"
          onChange={handleSelect}
        />
        <InputField
          name="address"
          type="text"
          placeholder="Address"
          errors={{}}
          labelText="Address"
          requiredText="This field is required"
          xlColSpan="xl:col-span-4"
          onChange={(e) => handleChange(e, "address")}
        />
      </section>
      <div className="flex w-full justify-center mt-8 ">
        <BackButtonArrow />
        <Button
          className="btn-primary"
          type="button"
          text="SUBMIT"
          handleClick={handleSubmit}
        />
      </div>
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
