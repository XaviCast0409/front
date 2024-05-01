import { useUserHook } from "../../../hooks/hookUser/useUserHook";
import { InputForm } from "../../../utils/InputForm";
import { useNavigate } from "react-router-dom";
import Button from "../../../utils/Button";
import { useState, useEffect } from "react";

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
    <div>
      <form className="container_form_column w-1/2 h-1/2">
        <h2 className="h1 mb-8"> Email and Phone </h2>
        <InputForm
          id="floating_address"
          nameInput="email"
          type="text"
          placeholder=" "
          stateValue={userData.email}
          color="black"
          title="Email"
          className="w-1/2"
          handleChange={handleChange}
        />
        <InputForm
          id="floating_address"
          nameInput="phone"
          type="text"
          placeholder=" "
          stateValue={userData.phone}
          color="black"
          title="Phone"
          className="w-1/2"
          handleChange={handleChange}
        />
        <div className="container_buttons flex ">
          {Button && (
            <Button
              className="btn-primary"
              type="button"
              text="NEXT"
              handleClick={handleSubmit}
            />
          )}
        </div>
      </form>
    </div>
  );
}
