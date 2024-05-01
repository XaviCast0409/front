import SideBarDashboard from "./SideBarDashboard";
import { TableUser } from "./TableUser";
import { useCompanyHook } from "../../../hooks/hookCompany/useCompanyHook";
import { useEffect } from "react";

const UsersCompany: React.FC = () => {
  const { findCompanyById, usersCompany } = useCompanyHook();
  useEffect(() => {
    findCompanyById(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="flex w-full">
      <SideBarDashboard />
      <div className="w-full mt-20">
        <div className="w-full px-2 py-2">
          <TableUser
            users={usersCompany}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersCompany;
