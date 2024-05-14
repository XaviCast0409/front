import InstagramWhiteLogo from "../../assets/asset/images/hows-advisor-instagram-white.png";
import FacebookWhiteLogo from "../../assets/asset/images/hows-advisor-facebook-white.png";
import LinkedinWhiteLogo from "../../assets/asset/images/hows-advisor-linkedin-white.png";
import WhatsAppLogo from "../../assets/asset/images/hows-advisor-whatsapp-white.png";

export const ImagenSigIn = () => {
  return (
    <div
      className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center "
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7937294/pexels-photo-7937294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="w-full px-24 z-10">
        <h1 className="text-5xl font-bold text-center tracking-wide text-white">
          Building Excellence
        </h1>
        <p className="text-3xl my-4 text-white">
          Crafting your spaces with precision and care, every step of the way.
        </p>
        <div className=" mx-4 p-4 text-center flex justify-center  items-center">
          <a
            href="https://www.instagram.com/howsadvisor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={InstagramWhiteLogo}
              className="mx-4 w-10 h-10 my-2"
              alt="Img Instagram"
            />
          </a>
          <img
            src={FacebookWhiteLogo}
            className="mx-4 w-10 h-10 my-2 "
            alt="Img Facebook"
          />
          <img
            src={LinkedinWhiteLogo}
            className="mx-4 my-2 w-10 h-10"
            alt="Img Linkedin"
          />
          <img
            src={WhatsAppLogo}
            className="mx-4 my-2 w-10 h-10"
            alt="Img Whatsapp"
          />
        </div>
      </div>
    </div>
  );
};
