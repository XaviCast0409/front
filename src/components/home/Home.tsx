import { Routes, Route } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import TradeUserPage from "../../pages/TradeUserPage";
import FullNameFormPage from "../../pages/FullNameFormPage";
import StreetAddressPage from "../../pages/StreetAddressPage";
import MatchingPage from "../../pages/MatchingPage";
import MatchingProsPage from "../../pages/MatchingProsPage";
import ServiceNeededPage from "../../pages/ServiceNeededPage";
import ConstructorPage from "../../pages/ConstructorPage";
import TradeCompanyPages from "../../pages/TradeCompanyPages";
import ZipCodeConstructorPage from "../../pages/ZipCodePage";
import RegisterCardConstructorPage from "../../pages/RegisterCardConstructorPage";
import DashboardPage from "../../pages/DashboardPage";
import DashboardAdmiPage from "../../pages/DashboardAdmiPage";
import SigInConstructorPage from "../../pages/SigInConstructorPage";
import ProfileConstructoraPage from "../../pages/ProfileConstructoraPage";
import ProfileDashboardTradePage from "../../pages/ProfileDashboardTradePage";
import ClassTradeCardsPage from "../../pages/ClassTradePage";
import ZipCodeFormUser from "../../pages/zipCodeUser";
import NotFoundPage from "../../pages/NotFoundPage";
import { NavBar } from "../../components/nav/Nav";
import { ClassesPage } from "../../pages/ClassesPage";
import BlogPage from "../../pages/BlogPage";
import UserCompanyPage from "../../pages/UserCompanyPage";
import BlogAdmiPage from "../../pages/BlogAdmiPage";
import EmailPhonePage from "../../pages/EmailPhonePage";
import BlogsCardsPages from "../../pages/BlogsCardsPages";


/* import { ProtectedRouter } from "../../utils/ProtectedRoute";
const token = localStorage.getItem("token");
const isAdmin = localStorage.getItem("isAdmin") === "true" ? true : false; */


const Home= () => {
  return (
    <>
    <NavBar />
      {/* Enrutamiento */}
      <Routes>
        {/* visual web */}
        <Route path="/" element={<LandingPage /> ?? null} />
        <Route path="/matchingform" element={<MatchingPage /> ?? null} />
        <Route path="/matchingprosform" element={<MatchingProsPage /> ?? null}/>
        <Route path="/serviceneededformgutter" element={<ServiceNeededPage /> ?? null}/>
        <Route path="/blog/:id" element={<BlogPage /> ?? null} />
        <Route path="/blogscards" element={<BlogsCardsPages /> ?? null} />


        {/* create company */}
        <Route path="/zipcodeconstructor" element={<ZipCodeConstructorPage /> ?? null}/>
        <Route path="/constructorform" element={<ConstructorPage />} />
        <Route path="/tradecompany" element={<TradeCompanyPages /> ?? null} />
        {/* esta ruta depende de completar el formulario */}
        <Route path="/registercardconstructor" element={<RegisterCardConstructorPage /> ?? null}/>

        {/* login companies and admin */}
        <Route path="/siginconstructorpage" element={<SigInConstructorPage />}/>

{/*         <Route element={<ProtectedRouter token={token} isAdmin={isAdmin} redirectPath={"/"}/>}> */}
           {/* dashboard profile company */}
          <Route path="/dashboard" element={<DashboardPage /> ?? null} />
          <Route path="/company/table-user" element={<UserCompanyPage /> ?? null} />
{/*         </ Route> */}


        {/* protección de rutas */}
       {/*  <Route element={<ProtectedRouter token={token} isAdmin={isAdmin} redirectPath={"/"}/>}> */}
        {/* dashboard Admin*/}
          <Route path="/dashboardadmi" element={<DashboardAdmiPage />} />
          <Route path="/dashboardadmitrade" element={<ProfileDashboardTradePage />}/>
          <Route path="/Classes" element={<ClassesPage />}/>
          <Route path="/dashboardadmiblog" element={<BlogAdmiPage />}/>
        {/* </ Route> */}

        {/* rutas a descartar */}
        <Route path="/profileconstructordashboard" element={<ProfileConstructoraPage />}/>


        {/* rutas user */}
        {/* se valida código postal */}
        <Route path="/formUser" element={<ZipCodeFormUser /> ?? null} />
        {/* SE ESCOGE ID DE TRADE */}
        <Route path="/form/tradeUser" element={<TradeUserPage />}/>
        {/* SE ESCOGE ID DE CLASE DE TRADE (REPARACIÓN, NUEVO, REEMPLAZO) */}
        <Route path="/form/classTrade" element={<ClassTradeCardsPage /> ?? null}/>
        {/* SE AGREGA NOMBRE Y APELLIDO */}
        <Route path="/fullnameform" element={<FullNameFormPage /> ?? null} />
        {/* SE AGREGA DIRECCIÓN */}
        <Route path="/streetaddressform" element={<StreetAddressPage /> ?? null}/>
        {/* SE AGREGA TELÉFONO Y CORREO, EN ESTA ETAPA DE SEBE TENER EL OBJETO EN EL STORE CON ESTOS DATOS
        ZIPCODEID, TRADEID, CLASSTRADEID, NOMBRE, APELLIDO, DIRECCIÓN, TELÉFONO, CORREO, PARA CREARLO FINALMENTE EN LA BASE DE DATOS */}
        {/* email phone add user */}
        <Route path="/emailphone" element={<EmailPhonePage /> ?? null}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Footer */}
    </>
  );
}

export default Home;