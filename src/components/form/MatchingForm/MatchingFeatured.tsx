import logo1 from "../../../../src/assets/asset/images/bathroom-icons.svg";


export default function MatchingFeatured() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-5xl font-bold text-center dark:text-gray-900">
          Your Matching <b className="primary_color">Pros</b>
        </h2>
        </div>
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl h-1/2">
          <div className="p-5 flex flex-col justify-center items-center">
            <img className="w-1/6  m-8" src={logo1} alt="img constructor" />
            <h3 className="primary_color font-semibold">Bathroom</h3>
            <p className="text-sm leading-5 text-gray-900">
              Straightforward Bathroom Renovations to suit your needs. We can do
              it all.
            </p>
          </div>
          <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        </div>
      </div>
    </section>
  );
}
