import { InputForm } from "../../../utils/InputForm";
import BackButtonArrow from "../../../utils/BackButtonArrow";
import Button from "../../../utils/Button";
import { useNavigate } from "react-router-dom";
import CheckBox from "../../../utils/CheckBox";
import { useState } from "react";
import { useUserHook } from "../../../hooks/hookUser/useUserHook";
import { FormContainer } from "../../../utils/FormContainer";

export default function StreetAddressForm() {
  const { handleChange, userData, setUserStore, useStoreCreate } = useUserHook();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  
  const handleSubmit = () => {
    setUserStore({
      address: userData.address
    });
    navigate("/emailphone");
  };
  console.log(useStoreCreate)
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
