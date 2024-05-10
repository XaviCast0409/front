import logo1 from "../../../../src/assets/asset/images/bathroom-icons.png";
import logo2 from "../../../../src/assets/asset/images/windows-icons.png";
import logo3 from "../../../../src/assets/asset/images/roofing-icons.png";
import { Link } from "react-router-dom";

export function Items() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          <div className="p-5 flex flex-col justify-center items-center">
            <Link
              className="flex flex-col justify-center items-center"
              to="/formUser"
            >
              <img className="w-1/4  m-8" src={logo1} alt="" />
            </Link>
            <h3 className="primary-color font-semibold">Bathroom</h3>
            <p className="text-sm leading-5 text-gray-900">
              Straightforward Bathroom Renovations to suit your needs. We can do
              it all.
            </p>
          </div>
          <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        </div>
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          <div className="p-5 flex flex-col justify-center items-center">
            <Link
              className="flex flex-col justify-center items-center"
              to="/formUser"
            >
              <img className="w-1/4  m-8" src={logo2} alt="" />
            </Link>
            <h3 className="primary-color font-semibold">Windows</h3>
            <p className="text-sm leading-5 text-gray-900">
              Detailed info for your windows replacement. Find the Best Energy
              Efficient Solutions.
            </p>
          </div>
          <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        </div>
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          <div className="p-5 flex flex-col justify-center items-center">
            <Link
              className="flex flex-col justify-center items-center"
              to="/formUser"
            >
              <img className="w-1/4  m-8" src={logo3} alt="" />
            </Link>
            <h3 className="primary-color font-semibold">Roofing</h3>
            <p className="text-sm leading-5 text-gray-900">
              Simple inspections and repairs for your roof.
            </p>
          </div>
          <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        </div>
      </div>
    </div>
  );
}
