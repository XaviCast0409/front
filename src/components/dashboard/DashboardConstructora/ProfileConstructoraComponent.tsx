import { useCompanyHook } from "../../../hooks/hookCompany/useCompanyHook";
import { PropsProfileConstructoraComponent } from "utils";

 const ProfileConstructoraComponent: React.FC<PropsProfileConstructoraComponent> = () => {
  const { comapanyId } = useCompanyHook();

  return (
    <div>
      {comapanyId ? (
        <div>
          <h1>{comapanyId.name_company}</h1>
          <p>Dirección: {comapanyId.address}</p>
          <p>Teléfono: {comapanyId.phone}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
export default ProfileConstructoraComponent
