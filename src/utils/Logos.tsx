import InstagramWhiteLogo from "../assets/asset/images/hows-advisor-instagram-white.png";
import FacebookWhiteLogo from "../assets/asset/images/hows-advisor-facebook-white.png";
import LinkedinWhiteLogo from "../assets/asset/images/hows-advisor-linkedin-white.png";
import WhatsAppLogo from "../assets/asset/images/hows-advisor-whatsapp-white.png";

export default function Logos() {
  return (
    <div className="mx-4 p-4 text-center flex justify-center  items-center">
      <a
        href="https://www.instagram.com/howsadvisor/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={InstagramWhiteLogo}
          className="w-10 h-10 mx-4  my-2"
          alt="Img Instagram"
        />
      </a>
      <img
        src={FacebookWhiteLogo}
        className="w-10 h-10 mx-4  my-2"
        alt="Img Facebook"
      />
      <img
        src={LinkedinWhiteLogo}
        className="w-10 h-10 mx-4  my-2"
        alt="Img Linkedin"
      />
      <img
        src={WhatsAppLogo}
        className="mx-4 my-2 w-10 h-10"
        alt="Img Whatsapp"
      />
    </div>
  );
}
