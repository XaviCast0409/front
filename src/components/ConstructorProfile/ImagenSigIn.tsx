import InstagramWhiteLogo from "../../assets/asset/images/hows-advisor-instagram-white.png";
import FacebookWhiteLogo from "../../assets/asset/images/hows-advisor-facebook-white.png";

import LinkedinWhiteLogo from "../../assets/asset/images/hows-advisor-linkedin-white.png";

export const ImagenSigIn = () => {
  return (
    <div
      className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7937294/pexels-photo-7937294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="w-full px-24 z-10">
        <h1 className="text-5xl font-bold text-left tracking-wide">
          Building Excellence
        </h1>
        <p className="text-3xl my-4">
          Crafting your spaces with precision and care, every step of the way.
        </p>
      </div>
      <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
        <img
          className="w-10 h-10"
          src={InstagramWhiteLogo}
          alt="Img Instagram"
        />
        <img className="w-10 h-10" src={FacebookWhiteLogo} alt="Img Facebook" />
        <img className="w-10 h-10" src={LinkedinWhiteLogo} alt="Img Linkedin" />
      </div>
    </div>
  );
};
