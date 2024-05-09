import { useUserHook } from "../../../hooks/hookUser/useUserHook";
import { InputForm } from "../../../utils/InputForm";
import { useNavigate } from "react-router-dom";
import Button from "../../../utils/Button";
import { useState, useEffect } from "react";
import { FormContainer } from "../../../utils/FormContainer";
import BackButtonArrow from "../../../utils/BackButtonArrow";

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

  const handleSubmit = () => {
    setUserStore({
      email: userData.email,
      phone: userData.phone,
    });
    setCreate(true);
    setTimeout(() => {
      navigate("/matchingform");
    }, 500);
  };

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
