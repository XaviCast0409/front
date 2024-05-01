import Button from "../../../utils/Button";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2 className="h1">
        Please enter <br /> your full name
      </h2>
      <form>
        <section
          className="container_form_column"
          style={{ width: "60%", height: "60%" }}
        >
          <InputForm
            id="floating_name"
            nameInput="name"
            type="text"
            placeholder=" "
            stateValue={userData.name}
            color="black"
            title="First Name"
            className="w-1/2"
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
            className="w-1/2"
            handleChange={handleChange}
          />

          <div className="container_buttons">
            <BackButtonArrow />
            <Button className="btn-primary" type="button" text="SUBMIT" handleClick={handleSubmit} />
          </div>
        </section>
      </form>
    </div>
  );
}
