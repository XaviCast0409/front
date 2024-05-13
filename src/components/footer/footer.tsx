import { Link } from "react-router-dom";
import Button from "../../utils/Button";

export default function Footer() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <footer className="bg-[#0760F0] py-10 md:py-20 text-white">
      <div className="container mx-auto text-center flex flex-col w-80p gap-8">
        <h1 className="h1">Let’s work together on your next project</h1>
        <p className="text-sm  md:text-xl  md:max-w-lg mx-auto">
          Find trusted experts in your area and get your project started!
        </p>
        <div className="flex flex-col items-center justify-center">
          <div>
            <Button
              className="btn-secundary"
              type={"button"}
              text={<Link to="/formUser">Get FREE Estimate</Link>}
              handleClick={handleClick}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Hows Advisor
          </p>
        </div>
      </div>
    </footer>
  );
}

/*
import Logos from "../../utils/Logos";

<Logos />
*/
