import { Link } from "react-router-dom";
import BackButtonArrow from "../../utils/BackButtonArrow";
import Button from "../../utils/Button";
import CheckBox from "../../utils/CheckBox";
import { useState } from "react";

export default function MatchingForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <form className="container_form_column">
      <h2 className="h2 mb-4">We have matching Pros in your area!</h2>
      <p className="p mb-6">Where should we send your matches?</p>

      {/* Checkbox */}
      <div className="mb-6">
        <CheckBox
          id="terms-agreement"
          labelText="We respect your privacy and want to make you aware of a few things. By clicking Get Results, you authorize CostGuide and up to four home improvement companies to call you on the phone or text you on the number provided to discuss your project. You understand that some may use automated phone technology or text to contact you. Txt STOP to cancel or HELP for help. Message and data rates may apply and frequency may vary. Your consent here is not a condition of purchase of any goods or services."
          isChecked={isChecked}
          handleChange={(event) => setIsChecked(event.target.checked)}
        />
      </div>

      <div className="container_buttons flex justify-between">
        <BackButtonArrow />
        <Link to="/matchingprosform">
          <Button
            className="btn-primary"
            type={"button"}
            text="NEXT"
            handleClick={handleClick}
            disabled={!isChecked}
          />
        </Link>
      </div>
    </form>
  );
}
