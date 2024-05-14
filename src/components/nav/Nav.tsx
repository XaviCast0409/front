import { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/asset/images/HOWS-ADVISOR-blanco.png";
import { BarsNav } from "../../assets/Icons";
import Button from "../../utils/Button";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = () => {
    console.log("Button clicked!");
    setIsMobileMenuOpen(false);
  };

  //Hace una funcion para cuando se toque en mobile alguno de los dons link el toogle se cierre y se redirija a la pagina correspondiente

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 z-10">
      <nav
        className={`fixed top-0  flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 w-full h-20 shadow-md bg-primary transition-transform duration-500 ease-in-out`}
      >
        <Link to="/" className="text-white ml-4">
          <img
            src={logoImage}
            alt="Logo"
            className="w-36 h-36 p-2 object-contain color-slate-300"
          />
        </Link>
        <div
          className={`hidden md:flex items-center gap-12 mr-8 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "hidden" : ""
          }`}
        >
          <Link to="/siginconstructorpage" className="text-white">
            Are you a Contractor?
          </Link>

          <Button
            className="btn-secundary"
            type={"button"}
            text={<Link to="/formUser">GET FREE ESTIMATE</Link>}
            handleClick={handleClick}
          />
        </div>
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "block" : "hidden"
          } fixed top-0 left-0 w-full h-screen bg-[#0760F0]  z-50`}
        >
          <div className="flex flex-col gap-12 items-center pt-16">
            
            <Button
              className="btn-primary text-primary bg-white"
              type={"button"}
              text={<Link to="/siginconstructorpage">Are you contractor?</Link>}
              handleClick={handleClick}
            />
            <Button
              className="btn-primary text-primary bg-white"
              type={"button"}
              text={<Link to="/formUser">GET FREE ESTIMATE</Link>}
              handleClick={handleClick}
            />
          </div>
        </div>
        <div className="md:hidden z-50 mr-4">
          <div className="cursor-pointer" onClick={toggleMobileMenu}>
            <BarsNav />
          </div>
        </div>
      </nav>
    </div>
  );
};
{
  /*
            <Link
              to="/blogscards"
              onClick={toggleMobileMenu}
              className="text-white"
            >
              Blog
            </Link>
            */
}
