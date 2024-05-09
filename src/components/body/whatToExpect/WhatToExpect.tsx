import { Link } from "react-router-dom";
import Button from "../../../utils/Button";

export default function WhatToExpect() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden  lg:block">
            <img
              src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
              className="rounded-lg shadow-md "
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="primary_color font-semibold text-center">
              Professional services
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              What to expect
            </p>
            <p className="mt-3 text-gray-600">
              Discover pros in your area, or let us suggest some. Compare
              estimates, clarify queries, and select the perfect company for
              your home project. <br />
              Effortless Scheduling Schedule appointments with local pros
              hassle-free. Use their live calendars to pick a convenient time –
              no more phone tags!
            </p>
            <div className="flex items-center justify-center space-x-3">
              <Button
                className="btn-primary"
                type={"button"}
                text={<Link to="/formUser">TRY NOW</Link>}
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
