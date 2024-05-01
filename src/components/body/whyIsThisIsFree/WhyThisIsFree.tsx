export default function WhyThisIsFree() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="lg:order-last ">
            <div className="p-8 sm:p-16 lg:p-24 ">
              <h2 className="text-2xl font-bold sm:text-3xl text-center ">
                Why is this FREE?
              </h2>
              <hr className="border-t-2 border-black my-4" />
              <p className="my-4 text-align-left">
                We believe that accessing project costs and scheduling estimates
                with contractors should be straightforward and hassle-free.
              </p>
            </div>
          </div>
          
          <div>
            <div className="h-64 lg:h-full">
              <img
                alt=""
                src="https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-full w-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
