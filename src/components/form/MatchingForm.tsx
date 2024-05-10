import { Link } from "react-router-dom";
import BackButtonArrow from "../../utils/BackButtonArrow";
import Button from "../../utils/Button";
import CheckBox from "../../utils/CheckBox";
import { useState } from "react";
import { FormContainer } from "../../utils/FormContainer";
import Check from "../../assets/asset/images/marca-de-verificacion.png"

export default function MatchingForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <img src={Check} className="w-24 h-24" alt="Check" />
      <FormContainer title="We have matching pros in your area ">
        <div className="mb-6 flex flex-col justify-normal items-center">
          <CheckBox
            id="terms-agreement"
            labelText="By clicking on Get Results, you authorize Hows Advisor and up to four home improvement companies to contact you to discuss your project. They may use automated phone technology. You can cancel or request help by sending a text message. Message and data rates may apply. Your consent is not a condition to purchase goods or services."
            isChecked={isChecked}
            handleChange={(event) => setIsChecked(event.target.checked)}
          />
        </div>

        <div className="container_buttons flex   justify-between p-4 ">
          <div className="flex justify-evenly p-4">
            <BackButtonArrow />

            <Link to="/matchingprosform">
              <Button
                className="btn-primary"
                type={"button"}
                text="GET RESULTS"
                handleClick={handleClick}
                disabled={!isChecked}
              />
            </Link>
          </div>
        </div>
      </FormContainer>
    </div>
  );
}

/*



*/
