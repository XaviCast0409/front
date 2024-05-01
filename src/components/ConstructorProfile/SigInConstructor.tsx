import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";
import { useCompanyHook } from "../../hooks/hookCompany/useCompanyHook";
import { ImagenSigIn } from "./ImagenSigIn";
import { InputForm } from "../../utils/InputForm";
import { Modal } from "../../utils/ModalError";

const SignInConstructor: React.FC = () => {
  const { companyLogin, messageLogin, login, setMessageLogin } =
    useCompanyHook();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    companyLogin(formData);
  };
  console.log({
    messageLogin,
    login
  });
  

  const handleButtonModal = () => {
    setMessageLogin();
  };

  return (
    <>
      <section className="min-h-screen flex items-stretch text-white">
        <ImagenSigIn />
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
          <div className="">
            <h1 className="mb-4 text-4xl font-bold text-gray-700">Log In</h1>
            <form className="flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <InputForm
                  type="text"
                  nameInput="email"
                  placeholder="Email"
                  stateValue={formData}
                  handleChange={handleChange}
                />
                <InputForm
                  type="password"
                  nameInput="password"
                  placeholder="Password"
                  stateValue={formData}
                  handleChange={handleChange}
                />
              </div>
              <div className="mt-6 flex justify-center items-center">
{/*                 <Link to="/dashboard"> */}
                  <Button
                    className="btn-primary"
                    type="button"
                    text="SUBMIT"
                    handleClick={handleSubmit}
                  />
{/*                 </Link> */}
              </div>
            </form>
            <p className="mt-4 text-gray-700">
              Don't have an account?{" "}
              <Link to="/zipcodeconstructor" className="text-blue-500">
                Create an account
              </Link>
            </p>
          </div>
        </div>
        {!login && messageLogin === "NOT_FOUND_USER" && (
          <Modal
            message={messageLogin}
            isSuccess={login}
            handleFunction={handleButtonModal}
            link={ !login ? "/siginconstructorpage" : "/" }
          />
        )}
      </section>
    </>
  );
};

export default SignInConstructor;
