import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3889F2] py-10 md:py-20 text-white">
      <div className="container mx-auto text-center">
        <h1 className="h1">
          Let's collaborate on your <br /> next project.
        </h1>
        <p className="text-lg md:text-xl mb-8 md:max-w-lg mx-auto">
          Discover reputable professionals in your locality and kickstart your
          project today!
        </p>

        <hr className="border-t-2 my-6 border-white" />
        <div className="flex flex-col  justify-center items-center">
          <div className="flex mb-4 md:mb-4">
            <a
              href="#"
              className="text-white mx-4 text-3xl transition duration-300 hover:text-gray-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white mx-4 text-3xl transition duration-300 hover:text-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white mx-4 text-3xl transition duration-300 hover:text-gray-300"
            >
              <FaInstagram />
            </a>
          </div>
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
