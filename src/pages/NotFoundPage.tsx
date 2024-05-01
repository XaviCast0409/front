import { Link } from "react-router-dom";
import  Button  from "../../src/utils/Button";

export default function NotFoundPage() {
  return (
    <section className="flex items-center h-full p-16text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl  text-blue-500">
            <span className="sr-only  ">Error</span>404
          </h2>
          <h5 className="text-2xl font-semibold md:text-3xl m-2 text-black">
            Sorry, we couldn't find this page.
          </h5>
          <Link to="/">
            <Button
              className="px-8 py-3 font-semibold rounded bg-blue-500 text-white"
              text="Back to homepage"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
