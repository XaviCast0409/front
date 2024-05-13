import { useState, useEffect } from "react";
import { useUserHook } from "../../../hooks/hookUser/useUserHook";
import { InputForm } from "../../../utils/InputForm";
import { useNavigate } from "react-router-dom";

import Button from "../../../utils/Button";
import { FormContainer } from "../../../utils/FormContainer";
import BackButtonArrow from "../../../utils/BackButtonArrow";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\d+$/, "Must contain only numbers")
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Must be a valid phone number")
    .required("The phone number is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("The email is required"),
});

export default function EmailPhone() {
  const {
    handleChange,
    userData,
    setUserStore,
    useStoreCreate,
    onSubmit,
    companiesId,
  } = useUserHook();
  const [formState, setFormState] = useState({
    create: false,
    error: "",
  });
  

  const navigate = useNavigate();

   
  useEffect(() => {
    window.localStorage.setItem("email", userData.email ?? "");
    window.localStorage.setItem("phone", userData.phone ?? "");
  }, [userData.email, userData.phone]);

  const handleValidate = async () => {
    try {
      await validationSchema.validate({
        email: userData.email,
        phone: userData.phone,
      });

      setUserStore({
        email: userData.email,
        phone: userData.phone,
      });
      setFormState((prevState) => ({
        ...prevState,
        error: "",
      }));
      return true;
    } catch (error: any) {
      setFormState((prevState) => ({
        ...prevState,
        error: error.message,
      }));
      console.error(error);
      return false;
    }
  };

  const handleSubmit = async () => {
    const isValid = await handleValidate();
    if (isValid) {
      setFormState((prevState) => ({
        ...prevState,
        create: true,
      }));
      setTimeout(() => {
        navigate("/matchingform");
      }, 500);
    }
  };

  useEffect(() => {
    if (formState.create) {
      onSubmit(useStoreCreate, companiesId);
      setFormState((prevState) => ({
        ...prevState,
        create: false,
      }));
    }
  }, [formState.create, useStoreCreate, onSubmit, companiesId]);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <FormContainer title="Email & Phone ">
        <InputForm
          id="floating_address"
          nameInput="email"
          type="text"
          placeholder=" "
          stateValue={userData.email}
          color="black"
          title="Email"
          handleChange={handleChange}
          className="w-80 md:w-full lg:w-96"
        />
        <InputForm
          id="floating_address"
          nameInput="phone"
          type="text"
          placeholder=" "
          stateValue={userData.phone}
          color="black"
          title="Phone"
          handleChange={handleChange}
          className="w-80 md:w-full lg:w-96"
        />
      </FormContainer>

      {/* Mostrar mensaje de error si existe */}
      {formState.error && <p className="text-red-500">{formState.error}</p>}

      <div className="container_buttons flex ">
        <BackButtonArrow />
        {Button && (
          <Button
            className="btn-primary"
            type="button"
            text="NEXT"
            handleClick={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
