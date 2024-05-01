import SideBarDashboard from "../DashboardConstructora/SideBarDashboard";
import { TableCompany } from "./TableCompany";
import { useCompanyHook } from "../../../hooks/hookCompany/useCompanyHook";
import { useEffect } from "react";
import Card from "./CardDashboard";

const DashboardAdmiComponent: React.FC = () => {
  const {
    getAllCompaniesData,
    handlePageChange,
    handlePerRowsChange,
    size,
    currentPage,
    company,
    totalCompany,
    handleStatusCompany
  } = useCompanyHook();

  useEffect(() => {
    getAllCompaniesData(currentPage, size);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, size]);

  return (
    <div className="flex w-full">
      <SideBarDashboard />
      <div className="w-full mt-20">
        <div className="flex">
          <Card title="Total Leads" description="0" />
          <Card title="Total Companys" description={`${totalCompany}`} />
          <Card title="Total ingresos" description="0" />
          <Card title="otro dato" description="breve" />
          <Card title="otro dato" description="breve" />
        </div>
        <div className="w-full px-2 py-2">
          <TableCompany
            totalCompany={totalCompany}
            company={company}
            handlePageChange={handlePageChange}
            handlePerRowsChange={handlePerRowsChange}
            size={size}
            currentPage={currentPage}
            handleStatusCompany={handleStatusCompany}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmiComponent;
