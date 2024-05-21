import { InputForm } from "../../../utils/InputForm";
import BackButtonArrow from "../../../utils/BackButtonArrow";
import Button from "../../../utils/Button";
import { useNavigate } from "react-router-dom";
import CheckBox from "../../../utils/CheckBox";
import { useState } from "react";
import { useUserHook } from "../../../hooks/hookUser/useUserHook";
import { FormContainer } from "../../../utils/FormContainer";
import * as Yup from "yup";

export default function StreetAddressForm() {
  const { handleChange, userData, setUserStore } = useUserHook();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const validationSchema = Yup.object().shape({
    address: Yup.string()
      .required("The street address is required")
      .min(3, "The address must be at least 3 characters long")
      .matches(/\d/, "The address must contain at least one number"),
  });

  const handleValidate = async () => {
    try {
      await validationSchema.validate({ address: userData.address });
      setUserStore({ address: userData.address });
      setError("");
      return true;
    } catch (error: any) {
      setError(error.message);
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!isChecked) {
      setError("You must confirm that you are the homeowner to continue.");
      return;
    }

    const isValid = await handleValidate();
    if (isValid) navigate("/emailphone");
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <FormContainer title=" Enter your Street Address ">
        <InputForm
          id="floating_address"
          nameInput="address"
          type="text"
          placeholder=" "
          stateValue={userData.address}
          color="black"
          title="Street Address"
          className="w-80 md:w-full lg:w-96"
          handleChange={handleChange}
        />
        <div className="checkbox-container flex justify-center">
          <CheckBox
            id="terms-agreement"
            labelText="I'm the Home Owner"
            isChecked={isChecked}
            handleChange={(event) => setIsChecked(event.target.checked)}
          />
        </div>
      </FormContainer>
      {error && <p className="text-red-500">{error}</p>}
      <div className="container_buttons flex ">
        <BackButtonArrow />
        {Button && (
          <Button
            className="btn-primary"
            type={"button"}
            text="NEXT"
            handleClick={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
