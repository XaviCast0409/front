export default function WhyThisIsFree() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <div className="order-2 md:order-1">
            <div className="p-8 sm:p-16 lg:p-24 ">
              <h2 className="text-2xl font-bold sm:text-3xl ">
                Why is this FREE?
              </h2>
              <hr className="border-t-2 border-black my-4" />
              <p className="my-4  text-gray-600">
                We believe that accessing project costs and scheduling estimates
                with contractors should be straightforward and hassle-free.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="h-64 sm:h-80 lg:h-full">
              <img
                alt="img"
                src="https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="inset-0 h-full w-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
