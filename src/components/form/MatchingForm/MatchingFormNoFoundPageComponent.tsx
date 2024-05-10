import { Link } from "react-router-dom";
import BackButtonArrow from "../../../utils/BackButtonArrow";
import Button from "../../../utils/Button";

import { FormContainer } from "../../../utils/FormContainer";

export default function MatchingFormNoFoundPageComponent() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <FormContainer title="We currently don't have any matching professionals available in your area.">
        <div className="container_buttons flex   justify-between p-4 ">
          <div className="flex justify-evenly p-4">
            <BackButtonArrow />
            <Link to="/">
              <Button
                className="btn-primary"
                type={"button"}
                text="Back to Home"
                handleClick={handleClick}
              />
            </Link>
          </div>
        </div>
      </FormContainer>
    </div>
  );
}
