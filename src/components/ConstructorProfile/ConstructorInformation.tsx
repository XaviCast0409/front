import SideBarDashboard from "../dashboard/DashboardConstructora/SideBarDashboard";
import { useEffect , useState } from "react";
import { useCompanyHook } from "../../hooks/hookCompany/useCompanyHook";
import axios from "axios";

export default function ConstructorInformationComponent() {
  const [companyId, setCompanyId] = useState<number | null>(null);
  const { findCompanyById } = useCompanyHook();

  const id = Number(localStorage.getItem("id")) || 0;

    useEffect(() => {
      findCompanyById(id).then((company) => {
        if (company !== null) {
          setCompanyId(id);
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      const fetchCompanyProfile = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/company-profile/${companyId}`);
          setCompanyId(response.data.companyId);
        } catch (error) {
          console.error('Error fetching company profile:', error);
        }
      };

      fetchCompanyProfile();
    }, [companyId]);

    return (
      <div className="flex  justify-center items-center mt-10">
        <SideBarDashboard />
        <section className=" flex flex-col">
          <div className="px-4 sm:px-0">
            <h3 className="text-center font-semibold leading-7 text-gray-900">
              Company Information
            </h3>
          </div>
          <div className="mt-6 border-t border-gray-100 p-10 m-10">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Company name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {companyId?.name_company}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Backend Developer
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  margotfoster@example.com
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Phone
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  $120,000
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  State City
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  qui eu.
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    );
  }
    
