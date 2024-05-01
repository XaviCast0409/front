import { InputForm } from "../../../utils/InputForm";
import BackButtonArrow from "../../../utils/BackButtonArrow";
import Button from "../../../utils/Button";
import { useNavigate } from "react-router-dom";
import CheckBox from "../../../utils/CheckBox";
import { useState } from "react";
import { useUserHook } from "../../../hooks/hookUser/useUserHook";

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
    <div>
      <form className="container_form_column w-1/2 h-1/2">
        <h2 className="h1 mb-8"> What is your street address? </h2>
        <InputForm
          id="floating_address"
          nameInput="address"
          type="text"
          placeholder=" "
          stateValue={userData.address}
          color="black"
          title="Street Address"
          className="w-1/2"
          handleChange={handleChange}
        />
        <div className="checkbox-container">
          <CheckBox
            id="terms-agreement"
            labelText="I'm the Home Owner"
            isChecked={isChecked}
            handleChange={(event) => setIsChecked(event.target.checked)}
          />
        </div>

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
      </form>
    </div>
  );
}
