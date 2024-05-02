import Button from "../../../utils/Button";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../../../utils/FormContainer";
import BackButtonArrow from "../../../utils/BackButtonArrow";
import { InputForm } from "../../../utils/InputForm";
import { useUserHook } from "../../../hooks/hookUser/useUserHook";

export default function FullNameForm() {
  const { handleChange, userData, setUserStore } =
    useUserHook();
  const navigate = useNavigate()

  const handleSubmit = () => {
    setUserStore({
      ...userData,
    });
    navigate("/streetaddressform")
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

          <div className="container_buttons">
            <BackButtonArrow />
            <Button className="btn-primary" type="button" text="SUBMIT" handleClick={handleSubmit} />
          </div>
      
    </div>
  );
}
