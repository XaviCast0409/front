import { Link } from "react-router-dom";
import Button from "../../utils/Button";
import Logos from "../../utils/Logos";

export default function Footer() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <footer className="bg-[#3889F2] py-10 md:py-20 text-white">
      <div className="container mx-auto text-center flex flex-col w-1/2">
        <h1 className="h1">Let’s work together on your next project</h1>
        <p className="text-lg md:text-xl mb-8 md:max-w-lg mx-auto">
          Find trusted experts in your area and get your project started!
        </p>
        <div className="flex justify-center">
          <Button
            className="btn-secundary "
            type={"button"}
            text={<Link to="/formUser">Get FREE Estimate</Link>}
            handleClick={handleClick}
          />
        </div>
        <Logos />
        <hr className="border-t-2 my-6 border-white" />
        <div className="flex flex-col  justify-center items-center">
          <div>
            <p className="text-sm text-white">
              &copy; {new Date().getFullYear()} Hows Advisor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
