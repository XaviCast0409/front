import logo1 from "../../../../src/assets/asset/images/bathroom-icons.svg";

export function Items() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          <div className="p-5 flex flex-col justify-center items-center">
            <img className="w-1/4  m-8" src={logo1} alt="" />
            <h3 className="primary_color font-semibold">
              Bathroom
            </h3>
            <p className="text-sm leading-5 text-gray-900">
              Straightforward Bathroom Renovations to suit your needs. We can do
              it all.
            </p>
          </div>
          <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        </div>
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          <div className="p-5">
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-blue-400">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="white"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="white"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="mb-2 font-bold">Windows</p>
            <p className="text-sm leading-5 text-gray-900">
              Comprehensive Details for Your Window Replacement and Repair. The
              best window replacement service.
            </p>
          </div>
          <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        </div>
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          <div className="p-5">
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-blue-400">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="white"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="white"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="mb-2 font-bold">Roofing</p>
            <p className="text-sm leading-5 text-gray-900">
              Straightforward Roof Assessments and Renovations. We can help with
              your roof problems. We also offer roof repair.
            </p>
          </div>
          <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        </div>
      </div>
    </div>
  );
}
