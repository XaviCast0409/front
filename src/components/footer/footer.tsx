import { Link } from "react-router-dom";
import Button from "../../utils/Button";

const FooterButton = ({ handleClick }) => (
  <div className="flex flex-col items-center justify-center">
    <Button
      className="btn-secondary px-4 py-2 bg-white text-[#0760F0] rounded-full shadow-md hover:bg-gray-100 transition duration-300"
      type="button"
      text={<Link to="/formUser">Get FREE Estimate</Link>}
      handleClick={handleClick}
    />
  </div>
);

const FooterText = () => (
  <div className="flex flex-col justify-center items-center">
    <p className="text-sm text-white">
      &copy; {new Date().getFullYear()} Hows Advisor
    </p>
  </div>
);

const Footer = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <footer className="bg-[#0760F0] py-10 md:py-20 text-white">
      <div className="container mx-auto text-center flex flex-col items-center gap-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          Let’s work together on your next project
        </h1>
        <p className="text-sm md:text-xl max-w-lg mx-auto">
          Find trusted experts in your area and get your project started!
        </p>
        <FooterButton handleClick={handleClick} />
        <FooterText />
      </div>
    </footer>
  );
};

export default Footer;
