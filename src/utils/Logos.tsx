import InstagramWhiteLogo from "../assets/asset/images/hows-advisor-instagram-white.png";
import FacebookWhiteLogo from "../assets/asset/images/hows-advisor-facebook-white.png";
import LinkedinWhiteLogo from "../assets/asset/images/hows-advisor-linkedin-white.png";

export default function Logos() {
  return (
    <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
      <img className="w-10 h-10" src={InstagramWhiteLogo} alt="Img Instagram" />
      <img className="w-10 h-10" src={FacebookWhiteLogo} alt="Img Facebook" />
      <img className="w-10 h-10" src={LinkedinWhiteLogo} alt="Img Linkedin" />
    </div>
  );
}
