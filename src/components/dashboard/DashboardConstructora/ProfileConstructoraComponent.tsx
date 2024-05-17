import { useCompanyHook } from "../../../hooks/hookCompany/useCompanyHook";
import { PropsProfileConstructoraComponent } from "utils";

 const ProfileConstructoraComponent: React.FC<PropsProfileConstructoraComponent> = () => {
  const { companyId } = useCompanyHook();

  return (
    <div>
      {companyId ? (
        <div>
          <h1>{companyId.name_company}</h1>
          <p>Dirección: {companyId.address}</p>
          <p>Teléfono: {companyId.phone}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
export default ProfileConstructoraComponent
