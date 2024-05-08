import { Link } from "react-router-dom";

import Button from "../../../utils/Button";

export function HowWeCanHelp() {
  function handleClick() {
    window.scrollTo(0, 0);
  }
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden  lg:block">
            <img
              src="https://images.pexels.com/photos/7710011/pexels-photo-7710011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-lg shadow-md "
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="primary_color font-semibold">
              Professional services
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Build your SaaS solution with help from our experts
            </p>
            <p className="mt-3 text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum, sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium
            </p>
            <div className="flex items-center justify-center space-x-3">
            <Button
              className="btn-primary"
              type={"button"}
              text={<Link to="/formUser">Hire Local Professionals</Link>}
              handleClick={handleClick}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
