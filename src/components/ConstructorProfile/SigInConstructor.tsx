import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";
import { ImagenSigIn } from "./ImagenSigIn";
import { InputForm } from "../../utils/InputForm";
import { Modal } from "../../utils/ModalError";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isTokenObj } from "../../function/validateSigIn";


const SignInConstructor: React.FC = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [messageLogin, setMessageLogin] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://api2-2aj3.onrender.com/login-company", formData);
      const token = response.data.company.token;
      localStorage.setItem("token", token);
      const tokenObj = isTokenObj(token);
      // Redirige al usuario a la página correspondiente según si es administrador o no
      if (tokenObj.isAdmin && token !== "") {
        localStorage.setItem("id", `${tokenObj.id}`);
        // Redirige al usuario administrador a una ruta específica
        setLogin(true)
        navigate("/dashboardadmi");

      } else if (tokenObj.isAdmin === false && token !== ""){
        // Redirige al usuario no administrador a otra ruta
        localStorage.setItem("id", `${tokenObj.id}`);
        setLogin(true)
        navigate("/dashboard");
      } else {  
        setLogin(false)
        setMessageLogin("NOT_FOUND_USER")
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setLogin(false)
      setMessageLogin("NOT_FOUND_USER")
    }
  };


  const handleButtonModal = () => {
    setMessageLogin("");
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
                  className="text-black"
                />
                <InputForm
                  type="password"
                  nameInput="password"
                  placeholder="Password"
                  stateValue={formData}
                  handleChange={handleChange}
                  className="text-black"
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
        {!login && messageLogin === "NOT FOUND USER" && (
          <Modal
            message={messageLogin}
            isSuccess={login}
            handleFunction={handleButtonModal}
            link={!login ? "/siginconstructorpage" : "/"}
          />
        )}
      </section>
    </>
  );
};

export default SignInConstructor;