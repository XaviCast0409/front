import "./App.css";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { companyStore } from "./store/companyStore";
import { isTokenExpired } from "./function/validateSigIn";

function App() {
  
  const [isLoggedExpirate, setIsLoggedIn] = useState<boolean>(false);
  const { loginCompany, login, setLogin } = companyStore();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(isTokenExpired(loginCompany.token));
    localStorage.setItem("token", loginCompany.token);
    localStorage.setItem("expirate", `${isTokenExpired(loginCompany.token)}`);
  }, [loginCompany.token]);
  
/*   useEffect(() => {
    if (login && !isLoggedExpirate) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login, isLoggedExpirate]); */


  return (
    <>
      <HomePage setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}

export default App;
