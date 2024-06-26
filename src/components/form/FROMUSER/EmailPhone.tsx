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
  const [create, setCreate] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Función para guardar el estado del email y el phone en localStorage
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
      setError("");
      return true;
    } catch (error: any) {
      setError(error.message);
      console.error(error);
      return false;
    }
  };

  const handleSubmit = async () => {
    const isValid = await handleValidate();
    if (isValid) {
      setUserStore({
        email: userData.email,
        phone: userData.phone,
      });
      setCreate(true);
      setTimeout(() => {
        navigate("/matchingform");
      }, 500);
    }
  };
  console.log(companiesId)
  useEffect(() => {
    if (create) {
      onSubmit(useStoreCreate, companiesId);
      setCreate(false);
    }
  }, [create, useStoreCreate, onSubmit, companiesId]);

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
      {error && <p className="text-red-500">{error}</p>}

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
