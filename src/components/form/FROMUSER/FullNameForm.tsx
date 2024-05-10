import Button from "../../../utils/Button";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../../../utils/FormContainer";
import BackButtonArrow from "../../../utils/BackButtonArrow";
import { InputForm } from "../../../utils/InputForm";
import { useUserHook } from "../../../hooks/hookUser/useUserHook";
import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  last_name: Yup.string()
    .required("The last name is required")
    .min(3, "The last name must be at least 3 characters long"),
  name: Yup.string()
    .required("The first name is required")
    .min(3, "The name must be at least 3 characters long"),
});

export default function FullNameForm() {
  const { handleChange, userData, setUserStore } = useUserHook();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleValidate = async () => {
    try {
      await validationSchema.validate({
        name: userData.name,
        last_name: userData.last_name,
      });

      setUserStore({
        name: userData.name,
        last_name: userData.last_name,
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
        name: userData.name,
        last_name: userData.last_name,
      });

      setTimeout(() => {
        navigate("/streetaddressform");
      }, 500);
    }
  };
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <FormContainer title=" Enter your Full Name ">
        <InputForm
          id="floating_name"
          nameInput="name"
          type="text"
          placeholder=" "
          stateValue={userData.name}
          color="black"
          title="First Name"
          className="w-80 md:w-full lg:w-96"
          handleChange={handleChange}
        />
        <InputForm
          id="floating_lastName"
          nameInput="last_name"
          type="text"
          placeholder=" "
          stateValue={userData.last_name}
          color="black"
          title="Last Name"
          className="w-80 md:w-full lg:w-96"
          handleChange={handleChange}
        />
      </FormContainer>
      {error && <p className="text-red-500">{error}</p>}
      <div className="container_buttons">
        <BackButtonArrow />
        <Button
          className="btn-primary"
          type="button"
          text="SUBMIT"
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
}
