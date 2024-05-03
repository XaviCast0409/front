import { FiCreditCard, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { isTokenObj } from "../../../function/validateSigIn";
import { useEffect, useState } from "react";

const SideBarDashboard: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setIsAdmin(isTokenObj(token)?.isAdmin || false);
    }
  }, [token]);

  return (
    <div className="flex flex-col bg-blue-500 text-white w-full h-screen md:w-64 py-6 px-4">
      <h2 className="h2 mb-14 mt-14 text-white">Dashboard</h2>
      <ul className="flex flex-col gap-6 text-xl">
        {isAdmin && (
          <>
            <Link to="/dashboardadmi" className="sidebar-link">
              <li className="sidebar-item flex">
                <FiUser className="mr-2" />
                Profile
              </li>
            </Link>
            <Link to="/dashboardadmitrade" className="sidebar-link">
              <li className="sidebar-item flex">
                <FiCreditCard className="mr-2" /> Trade
              </li>
            </Link>
            <Link to="/Classes">
              <li className="sidebar-item flex">
                <FiUser className="mr-2" /> Class Trade
              </li>
            </Link>
            
            <Link to="/dashboardadmiblog" className="sidebar-link">
              <li className="sidebar-item flex">
                <FiCreditCard className="mr-2" /> Blog
              </li>
            </Link>
           
          </>
        )}

        {!isAdmin && (
          <>
            <Link to="/dashboard" className="sidebar-link">
              <li className="sidebar-item flex">
                <FiUser className="mr-2" />
                Profile
              </li>
            </Link>
            <Link to="/company/table-user" className="sidebar-link">
              <li className="sidebar-item flex">
                <FiCreditCard className="mr-2" /> Table Users
              </li>
            </Link>
             <Link to="/registercardconstructor" className="sidebar-link">
              <li className="sidebar-item flex">
                <FiCreditCard className="mr-2" /> Register Card
              </li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideBarDashboard;
