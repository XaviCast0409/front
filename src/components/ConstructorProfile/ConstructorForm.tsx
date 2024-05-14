import Button from "../../utils/Button";
import { useCompanyHook } from "../../hooks/hookCompany/useCompanyHook";
import BackButtonArrow from "../../utils/BackButtonArrow";
import { useZipcCodeHook } from "../../hooks/hookZipCode/useZipCodeHook";
import { Modal } from "../../utils/ModalError";
import { DataStates } from "../../utils/Utils";
import InputSelect from "../../utils/SelectInput";
import InputField from "../../utils/InputField";
import { useState } from "react";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  address: Yup.string()
    .required("The address is required")
    .matches(
      /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
      "The address must contain at least one letter and one number"
    ),
  state: Yup.string().required("The state is required"),
  phone: Yup.string()
    .required("The phone number is required")
    .matches(/^[0-9]+$/, "The phone number must contain only numbers")
    .min(11, "The phone number must be at least 11 characters"),
  password: Yup.string()
    .required("The password is required")
    .matches(
      /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
      "The password must contain at least one letter and one number"
    )
    .min(6, "The password must be at least 6 characters"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("The email is required"),
  name_company: Yup.string()
    .required("The company name is required")
    .min(3, "The company name must be at least 3 characters"),
});

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
  const [error, setError] = useState("");

  const handleButtonModal = () => {
    setMessage();
    setCreated();
  };

  // Crea fuuncion Handler Validate
  const handleValidate = async () => {
    try {
      await validationSchema.validate({
        name_company: companyData.name_company,
        email: companyData.email,
        password: companyData.password,
        phone: companyData.phone,
        state: stateCity,
        address: companyData.address,
      });
      return true;
    } catch (error: any) {
      setError(error.message);
      console.error(error);
      return false;
    }
  };

  const handleSubmit = async () => {
    const isValid = await handleValidate();
    if (!isValid) {
      return;
    }
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
      {error && <p className="text-red-500">{error}</p>}ª
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
